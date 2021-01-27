<?php


namespace AcMarche\Theme\Inc;


use AcMarche\Bottin\Repository\BottinRepository;
use AcMarche\Pivot\Repository\HadesRepository;

class Seo
{
    static private $metas = ['title' => '', 'keywords' => '', 'description' => ''];

    public function __construct()
    {
        add_action('wp_head', [$this, 'assignMetaInfo']);
    }

    static function assignMetaInfo(): void
    {
        if (Theme::isHomePage()) {
            self::metaBottinHomePage();
        }

        $cat_id = get_query_var('cat');
        if ($cat_id) {
            self::metaCategory($cat_id);
        }

        $postId = get_query_var('cat');
        if ($cat_id) {
            self::metaCategory($cat_id);
        }

        $slugFiche = get_query_var(Router::PARAM_BOTTIN_FICHE);
        if ($slugFiche) {
            self::metaBottinFiche($slugFiche);
        }

        $slugCategory = get_query_var(Router::PARAM_BOTTIN_CATEGORY);
        if ($slugCategory) {
            self::metaBottinCategory($slugCategory);
        }

        $codeCgt = get_query_var(Router::PARAM_EVENT);
        if ($codeCgt) {
            self::metaBottinEvent($codeCgt);
        }

        echo '<title>'.self::$metas['title'].'</title>';

        if (self::$metas['description'] != '') {
            echo '<meta name="description" content="'.self::$metas['description'].'" />';
        }

        if (self::$metas['keywords'] != '') {
            echo '<meta name="keywords" content="'.self::$metas['keywords'].'" />';
        }
    }

    /**
     * @param string $slugFiche
     */
    private static function metaBottinFiche(string $slugFiche)
    {
        $bottinRepository = new BottinRepository();
        $fiche            = $bottinRepository->getFicheBySlug($slugFiche);
        if ($fiche) {
            $cats                 = '';
            $categories           = $bottinRepository->getCategoriesOfFiche($fiche->id);
            $comment              = $fiche->comment1.' '.$fiche->comment2;
            self::$metas['title'] = $fiche->societe.' | ';
            foreach ($categories as $category) {
                $cats .= $category->name;
            }
            self::$metas['keywords']    = $cats;
            self::$metas['description'] = $comment;
        }
    }

    private static function metaBottinCategory($slug)
    {
        $bottinRepository = new BottinRepository();
        $category         = $bottinRepository->getCategoryBySlug($slug);

        if ($category) {
            self::$metas['title']       = $category->name;
            self::$metas['description'] = $category->description;
            $children                   = $bottinRepository->getCategories($category->id);
            $cats                       = array_map(
                function ($category) {
                    return $category->name;
                },
                $children
            );
            self::$metas['keywords']    = join(',', $cats);
        }
    }

    private static function metaBottinEvent($codeCgt)
    {
        $hadesRepository = new HadesRepository();

        $event = $hadesRepository->getEvent($codeCgt);
        if ($event) {
            $description          = '';
            self::$metas['title'] = $event['nom'].' | Agenda des manifestations ';
            if (count($event['description1']) > 0) {
                $description .= $event['description1'][0];
            }
            if (count($event['description']) > 0) {
                $description .= ' '.$event['description'][0];
            }
            self::$metas['description'] = $description;
            //todo get categories event
            //self::$metas['keywords']    = join(',', $cats);
        }
    }

    private static function metaBottinHomePage()
    {
        self::$metas['title']       = self::baseTitle("Page d'accueil");
        self::$metas['description'] = get_bloginfo('description', 'display');
        self::$metas['keywords']    = 'Commune, Ville, Marche, Marche-en-Famenne, Famenne, Administration communal';
    }

    private static function metaCategory(int $cat_id)
    {
        $category                   = get_category($cat_id);
        self::$metas['title']       = self::baseTitle("");
        self::$metas['description'] = $category->description;
        self::$metas['keywords']    = '';
    }

    public function isGoole()
    {
        global $is_lynx;
    }

    public static function baseTitle(string $begin)
    {
        $base = wp_title('|', false, 'right');

        $nameSousSite = get_bloginfo('name', 'display');
        if ($nameSousSite != 'Citoyen') {
            $base .= $nameSousSite.' | ';
        }
        $base .= ' Ville de Marche-en-Famenne';

        return $begin.' '.$base;
    }

}
