<?php
/**
 * Template Name: Home-Page-Roman
 */

namespace AcMarche\Theme;

use AcMarche\Theme\Inc\Theme;
use AcMarche\Theme\Lib\Menu;
use AcMarche\Theme\Lib\Twig;
use AcMarche\Theme\Lib\WpRepository;


get_header();

$cat_ID      = get_queried_object_id();
$category    = get_category($cat_ID);
$description = category_description($cat_ID);
$title       = single_cat_title('', false);

$blodId   = get_current_blog_id();
$path     = Theme::getPathBlog($blodId);
$siteSlug = Theme::getTitleBlog($blodId);
$blogName = Theme::getTitleBlog($blodId);

$urlBack  = '/';
$nameBack = 'l\'accueil';

$wpRepository = new WpRepository();
$news         = $wpRepository->getPostsByCategory(258, get_current_blog_id());

$blodId = get_current_blog_id();
$color  = Theme::getColorBlog($blodId);

$menu  = new Menu();
$items = $menu->getItems(get_current_blog_id());
array_map(
    function ($item) {
        $item->name = $item->title;
    },
    $items
);
unset($items[0]);//remove accueil

Twig::rendPage(
    'roman/index.html.twig',
    [
        'title'       => $title,
        'category'    => $category,
        'siteSlug'    => $siteSlug,
        'color'       => $color,
        'blogName'    => $blogName,
        'path'        => $path,
        'subTitle'    => 'Tout',
        'description' => $description,
        'children'    => $items,
        'category_id' => $cat_ID,
        'urlBack'     => $urlBack,
        'nameBack'    => $nameBack,
        'posts'       => [],
        'actus'       => $news,
    ]
);

get_footer();
