<?php


namespace AcMarche\Theme;

use AcMarche\Common\Twig;
use AcMarche\Common\WpRepository;
use AcMarche\Theme\Inc\Theme;

get_header();
global $post;

$tags = get_the_category($post->ID);

$image = null;
if (has_post_thumbnail()) {
    $images = wp_get_attachment_image_src(get_post_thumbnail_id(), 'original');
    if ($images) {
        $image = $images[0];
    }
}

$categorySlug = get_query_var('category_name');
$category     = WpRepository::getCategoryBySlug($categorySlug);
$urlBack      = get_category_link($category);

$blodId = get_current_blog_id();

$path     = Theme::getPathBlog($blodId);
$blogName = Theme::getTitleBlog($blodId);
$color    = Theme::getColorBlog($blodId);

$relations = WpRepository::getRelations($post->ID, $tags);

Twig::rendPage(
    'article/show.html.twig',
    [
        'post'         => $post,
        'tags'         => $tags,
        'image'        => $image,
        'title'        => $post->post_title,
        'blogName'     => $blogName,
        'color'        => $color,
        'path'         => $path,
        'relations'    => $relations,
        'url_back'     => $urlBack,
        'readspeaker' => true,
    ]
);
get_footer();
