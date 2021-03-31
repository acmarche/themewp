<?php

namespace AcMarche\Theme\Inc;

use AcMarche\Common\Cache;
use AcMarche\Common\Mailer;
use AcMarche\Conseil\Conseil;
use AcMarche\Conseil\ConseilDb;
use AcMarche\Theme\Lib\Menu;
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
        add_shortcode('conseil_ordre', [new ShortCodes(), 'conseilOrdre']);
        add_shortcode('conseil_pv', [new ShortCodes(), 'conseilPv']);
        add_shortcode('conseil_archive', [new ShortCodes(), 'conseilArchive']);
        add_shortcode('google_map', [new ShortCodes(), 'googleMap']);
        add_shortcode('menuDisplay', [new ShortCodes(), 'menuDisplay']);
    }

    public function conseilOrdre(): string
    {
        $conseilDb = new ConseilDb();
        $ordres    = $conseilDb->getAllOrdre();
        $twig      = Twig::LoadTwig();

        return $twig->render(
            'conseil/_ordre.html.twig',
            [
                'ordres' => $ordres,
            ]
        );
    }

    public function conseilPv(): string
    {
        $conseilDb = new ConseilDb();
        $pvs       = $conseilDb->getAllPvs();
        $twig      = Twig::LoadTwig();

        return $twig->render(
            'conseil/_pv.html.twig',
            [
                'pvs' => $pvs,
            ]
        );
    }

    public function conseilArchive(): string
    {
        $conseilDb = new Conseil();
        $twig      = Twig::LoadTwig();
        $txt       = '';
        foreach (range(2013, 2018) as $year) {
            $pvs = $conseilDb->find_all_files($year);
            $txt .= $twig->render(
                'conseil/_pv.html.twig',
                [
                    'pvs' => $pvs,
                ]
            );
        }

        return $txt;
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

    public function googleMap(array $args): string
    {
        $latitude  = $args['lat'];
        $longitude = $args['long'];
        $twig      = Twig::LoadTwig();
        $post      = get_post();
        $title     = $post ? $post->post_title : '';

        return $twig->render(
            'map/_carte.html.twig',
            [
                'latitude'  => $latitude,
                'longitude' => $longitude,
                'title'     => $title,
            ]
        );
    }

    public function menuDisplay(array $args): string
    {
        $menu  = new Menu();
        $items = $menu->getItems($args['site']);
        $twig  = Twig::LoadTwig();

        return $twig->render(
            'menu/_items_short_code.html.twig',
            [
                'items' => $items,
            ]
        );

    }

}
