<?php


namespace AcMarche\Theme;

use AcMarche\Bottin\Bottin;
use AcMarche\Bottin\Repository\BottinRepository;
use AcMarche\Bottin\Repository\WpRepository;
use AcMarche\Common\Twig;

get_header();

global $wp_query;
$twig             = Twig::LoadTwig();
$bottinRepository = new BottinRepository();

$cat_ID      = get_queried_object_id();
$description = category_description($cat_ID);
$title       = single_cat_title('', false);

$posts = $wp_query->get_posts();

$args     = ['parent' => $cat_ID, 'hide_empty' => false];
$children = get_categories($args);
array_map(
    function ($category) {
        $category->permalink = get_category_link($category->term_id);
        $category->id        = $category->term_id;
    },
    $children
);

$categoryBottinId = get_term_meta($cat_ID, \BottinCategoryMetaBox::KEY_NAME, true);
if ($categoryBottinId) {
    $fiches = $bottinRepository->getFichesByCategory($categoryBottinId);
}

$all = array_merge($posts, $fiches);

$path = get_blog_details(get_current_blog_id())->path;

array_map(
    function ($post) use ($path) {
        if ($post instanceof \WP_Post) {
            $post->excerpt   = $post->post_excerpt;
            $post->permalink = get_permalink($post->ID);
        } else {
            $post->fiche      = true;
            $post->excerpt    = Bottin::getExcerpt($post);
            $post->permalink  = $path.'bottin/fiche/'.$post->slug;
            $post->post_title = $post->societe;
        }
    },
    $all
);

$content = $twig->render(
    'category/category.html.twig',
    [
        'title'       => $title,
        'description' => $description,
        'children'    => $children,
        'posts'       => $all,
    ]
);
echo $content;
get_footer();
