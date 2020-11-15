<?php

get_header();
$description = get_the_archive_description();
?>

    <!--CONTENT-->
    <section id="content"
             class="pt-42px pb-36px pl-ls-42px overflow-ls-hidden overflow-md-hidden pl-ls-lg-0 pt-xl-66px pb-lg-66px mw-1440px mx-xl-auto w-100">

        <!--CATEGORY-->
        <div class="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">

            <!--back | TODO JF: lien dynamique vers la page précédente-->
            <a href="index.html"
               class="button lvl3 align-self-ls-md-start align-self-md-start position-relative right-0 right-hover-12px fs-short-2">
                <i class="fas fa-angle-left pr-8px d-ls-md-inline pr-md-12px fs-short-2 d-md-inline"> </i>
                Retour à l'accueil
            </a>

            <!--title
            <h2 class="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px"></h2>-->
			<?php the_archive_title( '<h2 class="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">', '</h2>' ); ?>

            <!--category-->
            <span class="color-cat-cit ff-semibold pt-12px d-block fs-short-2">Citoyen</span>

            <!--categories | TODO JF: branchement des filtres-->
			<?php
			get_template_part( 'template-parts/content/category/children' );
			?>
            <!--results-->
			<?php
			get_template_part( 'template-parts/content/category/articles' );
			?>
        </div>
    </section>

<?php
get_footer();
