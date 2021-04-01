<?php

namespace AcMarche\Theme;

use AcMarche\Theme\Lib\Menu;
use AcMarche\Theme\Lib\Twig;
use AcMarche\Theme\Inc\Theme;

?>
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="<?php bloginfo('charset'); ?>"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="author" content="Nucleïd">
        <meta name="author" content="Cst">
        <?php
        Twig::rendPage('header/_favicons.html.twig');
        wp_head();
        ?>
    </head>
    <body class="bg-white">
    <?php
wp_body_open();

$menu = new Menu();
$data = $menu->getAllItems();

if (Theme::isHomePage()) {
    Twig::rendPage(
        'header/_header_home.html.twig',
        [
            'data' => $data,
        ]
    );
} else {
    $isContact = Theme::isContactPage();dump($isContact);
    Twig::rendPage(
        'header/_header.html.twig',
        [
            'data'      => $data,
            'isContact' => $isContact,
        ]
    );
}
