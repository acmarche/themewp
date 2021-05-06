<?php

namespace AcMarche\Theme\Inc;

use AcMarche\Bottin\Repository\BottinRepository;
use AcMarche\Bottin\RouterBottin;

class AdminBar
{
    public function __construct()
    {
        add_action('admin_bar_menu', [$this, 'customize_my_wp_admin_bar'], 100);
    }

    function customize_my_wp_admin_bar($wp_admin_bar)
    {
        global $wp_query;
        $slugFiche = $wp_query->get(RouterBottin::PARAM_BOTTIN_FICHE, null);
        if ($slugFiche) {
            $bottinRepository = new BottinRepository();
            $fiche            = $bottinRepository->getFicheBySlug($slugFiche);
            if ($fiche) {
                $wp_admin_bar->add_menu(
                    array(
                        'id'    => 'edit',
                        'title' => 'Modifier la fiche',
                        'href'  => 'https://bottin.marche.be/fiche/edit/'.$fiche->id,
                    )
                );
            }
        }
    }
}
