<?php

namespace AcMarche\Theme\Inc;

use AcMarche\Common\Cache;
use AcMarche\Common\Mailer;
use AcMarche\Theme\Lib\Twig;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;
use function json_decode;


class ShortCodes
{
    /**
     * @var \Symfony\Contracts\Cache\CacheInterface
     */
    private $cache;
    /**
     * @var HttpClientInterface
     */
    private $httpClient;

    public function __construct()
    {
        add_action('init', [$this, 'registerShortcodes']);
        $this->cache = Cache::instance();
    }

    function registerShortcodes()
    {
        add_shortcode('taxe', [new ShortCodes(), 'taxe']);
        add_shortcode('enaos', [new ShortCodes(), 'enaos']);
    }

    public function enaos()
    {
        return $this->cache->get(
            'enaos',
            function () {
                return file_get_contents('https://api.marche.be/marchebe/necrologie/');
            }
        );
    }

    public function taxe()
    {
        return $this->cache->get(
            'taxes',
            function () {
                $this->httpClient = HttpClient::create();
                $nomenclatures    = $this->getContent('/api/nomenclatures.json');

                foreach ($nomenclatures as $nomenclature) {
                    $taxes = [];
                    foreach ($nomenclature->taxes as $taxeString) {
                        $taxe      = $this->getContent($taxeString.'.json');
                        $exercices = [];
                        foreach ($taxe->exercices as $exerciceString) {
                            $exercice           = $this->getContent($exerciceString.'.json');
                            $exercice->fileName = 'https://extranet.marche.be/files/taxes/'.$exercice->fileName;
                            $exercices[]        = $exercice;
                        }
                        $taxe->exercices = $exercices;
                        $taxes[]         = $taxe;
                    }
                    $nomenclature->taxes = $taxes;
                }

                $twig = Twig::LoadTwig();

                $template = 'article/taxe.html.twig';
                $content  = $twig->render($template, ['nomenclatures' => $nomenclatures]);

                return $content;
            }
        );
    }

    private function getContent(string $url)
    {
        $base = 'https://extranet.marche.be';
        try {
            $response = $this->httpClient->request('GET', $base.$url);

            return json_decode($response->getContent());
        } catch (TransportExceptionInterface | ClientExceptionInterface | RedirectionExceptionInterface | ServerExceptionInterface $e) {
            Mailer::sendError("list taxtes", $e->getMessage());
        }

        return [];
    }


}