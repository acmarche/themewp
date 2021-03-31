<?php


namespace AcMarche\Theme;

use AcMarche\Theme\Lib\Twig;
use AcMarche\Theme\Lib\WpRepository;
use AcMarche\Theme\Inc\Theme;
use AcSort;
use SortLink;

get_header();

$wpRepository = new WpRepository();

$cat_ID      = get_queried_object_id();
$category    = get_category($cat_ID);
$description = category_description($cat_ID);
$title       = single_cat_title('', false);

$blodId   = get_current_blog_id();
$path     = Theme::getPathBlog($blodId);
$siteSlug = Theme::getTitleBlog($blodId);
$color    = Theme::getColorBlog($blodId);
$blogName = Theme::getTitleBlog($blodId);

$children = $wpRepository->getChildrenOfCategory($cat_ID);
$posts    = $wpRepository->getPostsAndFiches($cat_ID);
$parent   = $wpRepository->getParentCategory($cat_ID);
$urlBack  = $path;
$nameBack = $blogName;

if ($parent) {
    $urlBack  = get_category_link($parent->term_id);
    $nameBack = $parent->name;
}
if ($urlBack == '') {
    $urlBack  = '/';//bug if blog citoyen
    $nameBack = 'l\'accueil';
}
wp_enqueue_script(
    'react-app',
    get_template_directory_uri().'/assets/js/build/category.js',
    array('wp-element'),
    wp_get_theme()->get('Version'),
    true
);

$sortLink       = SortLink::linkSortArticles($cat_ID);
$category_order = get_term_meta($cat_ID, 'acmarche_category_sort', true);
if ($category_order == 'manual') {
    //$posts = AcSort::getSortedItems($cat_ID, $posts);
}
Twig::rendPage(
    'category/index.html.twig',
    [
        'title'       => $title,
        'category'    => $category,
        'siteSlug'    => $siteSlug,
        'color'       => $color,
        'blogName'    => $blogName,
        'path'        => $path,
        'subTitle'    => 'Tout',
        'description' => $description,
        'children'    => $children,
        'posts'       => $posts,
        'category_id' => $cat_ID,
        'urlBack'     => $urlBack,
        'nameBack'    => $nameBack,
        'sortLink'    => $sortLink,
    ]
);

get_footer();
