<?php

namespace AcMarche\Theme;

use AcMarche\Common\MarcheConst;
use AcMarche\Common\Twig;
use AcMarche\Pivot\Repository\HadesRepository;
use AcMarche\Theme\Inc\Router;
use AcMarche\Theme\Inc\Theme;

get_header();

global $wp_query;
$codeCgt = $wp_query->get(Router::PARAM_EVENT);

$hadesRepository = new HadesRepository();
$event           = $hadesRepository->getEvent($codeCgt);
//var_dump($event);
if ( ! $event) {
    Twig::rendPage(
        'errors/404.html.twig',
        [
            'title'     => 'Evènement non trouvé',
            'tags'      => [],
            'color'     => Theme::getColorBlog(MarcheConst::TOURISME),
            'blogName'  => Theme::getTitleBlog(MarcheConst::TOURISME),
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

Twig::rendPage(
    'agenda/show.html.twig',
    [
        'event'     => $event,
        'title'     => $event->titre,
        'image'     => $image,
        'tags'      => [],
        'images'    => $images,
        'latitude'  => $event->geocode->latitude() ?? null,
        'longitude' => $event->geocode->longitude() ?? null,
        'color'     => Theme::getColorBlog(MarcheConst::TOURISME),
        'blogName'  => Theme::getTitleBlog(MarcheConst::TOURISME),
        'relations' => [],
        'readspeaker' => true,
    ]
);
get_footer();
