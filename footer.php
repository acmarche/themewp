<?php

namespace AcMarche\Theme;

use AcMarche\Theme\Lib\Twig;

Twig::rendPage(
    'footer/footer.html.twig'
);
wp_footer();
Twig::rendPage(
    'footer/_closte_tags.html.twig'
);
