<?php

namespace AcMarche\Theme;

use AcMarche\Pivot\Repository\HadesRepository;
use AcMarche\Pivot\RouterHades;
use AcMarche\Theme\Inc\Theme;
use AcMarche\Theme\Lib\Twig;

get_header();

global $wp_query;
$codeCgt = $wp_query->get(RouterHades::PARAM_EVENT);

$hadesRepository = new HadesRepository();
$event           = $hadesRepository->getOffre($codeCgt);

if ( ! $event) {
    Twig::rendPage(
        'errors/404.html.twig',
        [
            'title'     => 'Evènement non trouvé',
            'tags'      => [],
            'color'     => Theme::getColorBlog(Theme::TOURISME),
            'blogName'  => Theme::getTitleBlog(Theme::TOURISME),
            'relations' => [],
        ]
    );
    get_footer();

    return;
}

$image  = null;
$images = $event->medias;
if (count($images) > 0) {
    $image = $images[0]->url;
}
$tags = [];
foreach ($event->categories as $category) {
    $tags[] = ['name' => $category->lib, 'url' => RouterHades::getUrlEventCategory($category)];
}

$currentCategory = get_category_by_slug(get_query_var('category_name'));
$relations       = $hadesRepository->getOffresSameCategories($event, $currentCategory->cat_ID);

Twig::rendPage(
    'agenda/show.html.twig',
    [
        'event'       => $event,
        'title'       => $event->titre,
        'image'       => $image,
        'tags'        => $tags,
        'images'      => $images,
        'latitude'    => $event->geocode->latitude() ?? null,
        'longitude'   => $event->geocode->longitude() ?? null,
        'color'       => Theme::getColorBlog(Theme::TOURISME),
        'blogName'    => Theme::getTitleBlog(Theme::TOURISME),
        'relations'   => $relations,
        'readspeaker' => true,
    ]
);
get_footer();
