<?php

namespace AcMarche\Theme;

use AcMarche\Theme\Lib\Twig;
use AcMarche\Pivot\Repository\HadesRepository;
use Psr\Cache\InvalidArgumentException;

get_header();

$hadesRepository = new HadesRepository();
try {
    $categoryAgenda = get_category_by_slug('agenda-des-manifestations');
    $events         = $hadesRepository->getEvents($categoryAgenda->cat_ID);
} catch (InvalidArgumentException $e) {
    Twig::rendPage(
        'errors/500.html.twig',
        [
            'message' => 'Impossible de charger les évènements: '.$e->getMessage(),
        ]
    );
    get_footer();

    return;
}

wp_enqueue_script(
    'react-app',
    get_template_directory_uri().'/assets/js/build/agenda.js',
    array('wp-element'),
    wp_get_theme()->get('Version'),
    true
);

Twig::rendPage(
    'agenda/index.html.twig',
    [
        'events' => $events,
    ]
);

get_footer();
