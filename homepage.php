<?php

namespace AcMarche\Theme;

use AcMarche\Common\Twig;
use AcMarche\Common\WpRepository;
use AcMarche\Pivot\Repository\PivotRemoteRepository;

/**
 * Template Name: Home-Page-Principal
 */
get_header();

$pivotRepository = new PivotRemoteRepository();
$twig            = Twig::LoadTwig();

$news   = WpRepository::getAllNews(6);
$events = $pivotRepository->getAllEvents();

$content = $twig->render(
    'home/show.html.twig',
    [
        'news'   => $news,
        'events' => $events,
    ]
);
echo $content;
get_footer();
