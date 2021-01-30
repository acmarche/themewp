<?php

namespace AcMarche\Theme;

use AcMarche\Bottin\Bottin;
use AcMarche\Bottin\Repository\BottinRepository;
use AcMarche\Bottin\Repository\WpBottinRepository;
use AcMarche\Common\Twig;
use AcMarche\Theme\Inc\Router;
use AcMarche\Theme\Inc\Theme;

get_header();
global $wp_query;

$bottinRepository = new BottinRepository();

$slugFiche = $wp_query->get(Router::PARAM_BOTTIN_FICHE, null);

if ($slugFiche) {
    $fiche = $bottinRepository->getFicheBySlug($slugFiche);
} elseif ($post = $wp_query->post) {
    WpBottinRepository::set_table_meta();
    $idfiche = get_metadata(WpBottinRepository::DATA_TYPE, $post->ID, 'id', true);
    $fiche   = $bottinRepository->getFicheById($idfiche);
}

if ( ! $fiche) {
    Twig::rendPage(
        'fiche/not_found.html.twig',
        [
            'title'   => 'Fiche non trouvée',
            'tags'    => [],
            'content' => '',
        ]
    );
    get_footer();

    return;
}

$categories    = $bottinRepository->getCategoriesOfFiche($fiche->id);
$images        = $bottinRepository->getImagesFiche($fiche->id);
$documents     = $bottinRepository->getDocuments($fiche->id);
$isCentreVille = $bottinRepository->isCentreVille($fiche->id);
$logo          = $bottinRepository->getLogo($fiche->id);
if ($logo) {
    unset($images[0]);
}
array_map(
    function ($category) {
        $category->url = Router::getUrlCategoryBottin($category);
    },
    $categories
);

$relations = $bottinRepository->getRelations($fiche->id, $categories);

$blodId   = get_current_blog_id();
$path     = Theme::getPathBlog($blodId);
$blogName = Theme::getTitleBlog($blodId);
$color    = Theme::getColorBlog($blodId);


Twig::rendPage(
    'fiche/show.html.twig',
    [
        'fiche'         => $fiche,
        'title'         => $fiche->societe,
        'tags'          => $categories,
        'isCentreVille' => $isCentreVille,
        'logo'          => $logo,
        'images'        => $images,
        'documents'     => $documents,
        'url_base'      => Bottin::getUrlBottin().$fiche->id.DIRECTORY_SEPARATOR,
        'url_doc'       => Bottin::getUrlDocument().DIRECTORY_SEPARATOR,
        'latitude'      => $fiche->latitude,
        'longitude'     => $fiche->longitude,
        'blogName'      => $blogName,
        'color'         => $color,
        'path'          => $path,
        'content'       => '',
        'relations'     => $relations,
        'readspeaker'   => true,
    ]
);
get_footer();
