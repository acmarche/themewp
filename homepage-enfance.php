<?php

/**
 * Template Name: Home-Page-Enfance
 */

namespace AcMarche\Theme;

use AcMarche\Theme\Lib\Twig;
use AcMarche\Theme\Lib\WpRepository;
use AcMarche\Theme\Inc\Theme;

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

$children = $wpRepository->getRootCategories();
$children = $wpRepository->cleanHomeCategories($children);

$posts    = $wpRepository->getPostsAndFiches($cat_ID);
$parent   = $wpRepository->getParentCategory($cat_ID);
$urlBack  = $path;
$nameBack = $blogName;

if ($parent) {
    $urlBack  = get_category_link($parent->term_id);
    $nameBack = $parent->name;
}
if ($urlBack == '') {
    $urlBack = '/';//bug if blog citoyen
}

Twig::rendPage(
    'enfance/index.html.twig',
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
        'category_id' => $cat_ID,
        'urlBack'     => $urlBack,
        'nameBack'    => $nameBack,
        'posts'       => [],
    ]
);

get_footer();

