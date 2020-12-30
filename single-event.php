<?php

namespace AcMarche\Theme;

use AcMarche\Common\Twig;
use AcMarche\Pivot\Repository\PivotRemoteRepository;
use AcMarche\Theme\Inc\Router;

get_header();

global $wp_query;
$codeCgt = $wp_query->get(Router::PARAM_EVENT);

$pivotRepository = new PivotRemoteRepository();

///$event = $pivotRepository->getDetailOffer($codeCgt);
$event  = null;
$events = $pivotRepository->getAllEvents();
foreach ($events as $element) {
    if ($codeCgt == $element->codeCgt) {
        $event = $element;
        break;
    }
}

$logo   = null;
$images = $event->images;
if (count($event->images) > 0) {
    $logo = $images[0];
}

$url = get_site_url();
Twig::rendPage(
    'agenda/show.html.twig',
    [
        'event'     => $event,
        'nom'       => $event->nom,
        'url'       => $url,
        'logo'      => $logo,
        'tags'      => [],
        'images'    => $images,
        'latitude'  => $event->latitude,
        'longitude' => $event->longitude,
    ]
);
get_footer();
