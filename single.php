<?php


namespace AcMarche\Theme;

use AcMarche\Common\Mailer;
use AcMarche\Common\Router;
use AcMarche\Theme\Inc\Theme;
use AcMarche\Theme\Lib\Twig;
use AcMarche\Theme\Lib\WpRepository;

get_header();
global $post;

$image = null;
if (has_post_thumbnail()) {
    $images = wp_get_attachment_image_src(get_post_thumbnail_id(), 'original');
    if ($images) {
        $image = $images[0];
    }
}


$blodId = get_current_blog_id();

$path     = Theme::getPathBlog($blodId);
$blogName = Theme::getTitleBlog($blodId);
$color    = Theme::getColorBlog($blodId);

$tags      = WpRepository::getTags($post->ID);
$relations = WpRepository::getRelations($post->ID);

$catSlug = get_query_var('category_name');

if (preg_match("#/#", $catSlug)) {
    $vars    = explode("/", $catSlug);
    $catSlug = end($vars);
}

$urlBack  = '/';
$nameBack = '';

$currentCategory = get_category_by_slug($catSlug);
if ($currentCategory) {
    $urlBack  = get_category_link($currentCategory);
    $nameBack = $currentCategory->name;
}

$isActu = array_filter(
    $tags,
    function ($tag) {
        if (preg_match("#artistique#", $tag['name'])) {
            return $tag;
        }

        return null;
    }
);

if (count($isActu) > 0) {
    $urlBack  = $isActu[0]['url'];
    $nameBack = $isActu[0]['name'];
}

$content = get_the_content(null, null, $post);
$content = apply_filters('the_content', $content);
$content = str_replace(']]>', ']]&gt;', $content);

Twig::rendPage(
    'article/show.html.twig',
    [
        'post'        => $post,
        'tags'        => $tags,
        'image'       => $image,
        'title'       => $post->post_title,
        'blogName'    => $blogName,
        'color'       => $color,
        'path'        => $path,
        'relations'   => $relations,
        'urlBack'     => $urlBack,
        'nameBack'    => $nameBack,
        'content'     => $content,
        'readspeaker' => true,
    ]
);
get_footer();
