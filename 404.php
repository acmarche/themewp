<?php
namespace AcMarche\Theme;

get_header();
?>

    <section id="content"
             class="pt-42px pb-36px pl-ls-42px overflow-ls-hidden overflow-md-hidden pl-ls-lg-0 pt-xl-66px pb-lg-66px mw-1440px mx-xl-auto w-100">

        <!--ARTICLE-->
        <div class="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">

            <!--back | TODO JF: lien dynamique vers la page précédente-->
            <a href="news.html"
               class="button lvl3 align-self-ls-md-start align-self-md-start position-relative right-0 right-hover-12px fs-short-2"><i
                        class="fas fa-angle-left pr-8px d-ls-md-inline pr-md-12px fs-short-2 d-md-inline"></i>Retour aux
                actualités</a>

            <!--title-->
            <h2 class="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">Page non trouvée</h2>

            <!--category-->
            <span class="color-cat-cit ff-semibold pt-12px d-block fs-short-2">Page non trouvée</span>

            <!--article-->
            <div class="pt-48px d-lg-flex mx-n15px">
                <div class="d-flex flex-column align-items-center mx-md-n15px flex-md-wrap flex-md-row align-items-md-start flex-lg-column col-lg-8 mx-lg-0 flex-lg-nowrap">
                    <!--img-->
                    <div class="bg-img w-100 h-220px position-relative h-lg-330px">
                        <i class="bg-img-news-1 position-absolute top-0 bottom-0 left-0 right-0 md-left-15px md-right-15px lg-left-0 lg-right-0"></i>
                    </div>

                    <!--OBJECT | TAGS-->
                    <div class="overflow-hidden w-100 pt-24px col-md-12 px-0 px-md-15px d-lg-none">
                        <ul class="object-tags">
                            <li><a href="#">École</a></li>
                            <li><a href="#">Jeunesse</a></li>
                            <li><a href="#">Devoirs</a></li>
                            <li><a href="#">Volontariat</a></li>
                        </ul>
                    </div>

                    <!--OBJECT | TEXT-DYN | TODO JF : brancher la possibilité d'ouvrir/réduire le content avec un ellipsis + condition sur l'extend-->
                    <div class="object-text-dyn col-md-8 px-0 px-md-15px col-lg-12 px-lg-0">
                        <input type="checkbox" id="text-dyn"/>
                        <div for="text-dyn">
                            <span class="more">Lire plus</span>
                            <span class="less">Réduire</span>
                        </div>
                        <div for="text-dyn">
                            <p>Le plan de relance économique mit sur pied par la Ville, via la Commission pluraliste a
                                décidé de différentes mesures de soutien de l'économie local. Une de ces mesures est la
                                mise en place d'un prêt de 6000€ à 0% d'intérêt proposé aux commerçants et Horeca
                                marchois afin de les aider pour leur trésorerie et relancer leur activité plus
                                sereinement.</p>
                            <p>Ce prêt, jusqu'à 6000% est remboursable sur 2 ans, suivant un plan de paiement défini et
                                accepté par les 2 parties. Le règlement du prêt, approuvé par le Conseil Communal en sa
                                séance du 13 juillet, est disponible ci-dessous, de même que le formulaire de
                                demande.</p>
                            <p>Ce formulaire, dûment complété, doit être envoyé à l'ADL (adl@marche.be) et doit être
                                accompagné des documents suivants :</p>
                            <ul>
                                <li>Une copie de la carte d'identité du requérant;</li>
                                <li>Les comptes annuels des deux derniers exercices (2018 et 2019);</li>
                                <li>Les attestations ONSS (le cas échéant) et TVA;</li>
                            </ul>
                        </div>
                    </div>

                    <!--OBJECT | SHARE-->
                    <div class="pt-24px w-100 col-md-4 px-0 px-md-15px d-lg-none">
                        <h4 class="text-dark-primary fs-basic text-right text-lg-left">Partagez l'article via</h4>
                        <div class="pt-12px pt-md-16px object-share">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fas fa-link"></i></a>
                            <a href="#" class="d-none d-xl-flex"><i class="fas fa-print"></i></a>
                        </div>
                    </div>

                    <!--previous/next-->
                    <div class="pt-24px d-flex w-100 col-md-8 px-0 px-md-15px col-lg-12 px-lg-0">
                        <div class="col-6 p-0 d-flex">
                            <a href="#"
                               class="button lvl3 align-self-ls-md-center align-self-md-center position-relative left-0 left-hover-n12px d-flex justify-content-center fs-short-2"><i
                                        class="fas fa-angle-left d-ls-md-inline pr-8px pr-md-12px fs-short-1 d-md-inline"></i>Article
                                précédent</a>
                        </div>
                        <div class="col-6 p-0 d-flex justify-content-end">
                            <a href="#"
                               class="button lvl3 align-self-ls-md-center align-self-md-center position-relative left-0 left-hover-12px d-flex justify-content-center fs-short-2">Article
                                suivant<i
                                        class="fas fa-angle-right d-ls-md-inline pl-8px pl-md-12px fs-short-1 d-md-inline"></i></a>
                        </div>
                    </div>

                    <!--OBJECT | RECOM-->
                    <div class="pt-24px w-100 col-md-8 px-0 px-md-15px d-lg-none">
                        <h4 class="text-dark-primary ff-semibold fs-basic">Recommandation</h4>
                        <div class="pt-12px object-recom">
                            <a href="#" class="bg-img">
                                <i class="bg-img-news-1">
                                    <b class="bg-img-bgcolor-hover-primary-55"></b>
                                </i>
                                <div class="col">
                                    <h5 class="text-hover-primary">Écoles de devoirs : un petit déjeuner avec les
                                        volontaires</h5>
                                    <span class="color-cat-cit">Citoyen</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="d-none d-lg-flex col-4 flex-column h-330px justify-content-between">

                    <!--OBJECT | SHARE-->
                    <div class="w-100">
                        <h4 class="text-dark-primary fs-basic text-right text-lg-left">Partagez l'article via</h4>
                        <div class="pt-12px pt-md-16px object-share">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fas fa-link"></i></a>
                            <a href="#" class="d-none d-xl-flex"><i class="fas fa-print"></i></a>
                        </div>
                    </div>

                    <!--OBJECT | TAGS-->
                    <div class="overflow-hidden w-100 pt-24px">
                        <ul class="object-tags">
                            <li><a href="#">École</a></li>
                            <li><a href="#">Jeunesse</a></li>
                            <li><a href="#">Devoirs</a></li>
                            <li><a href="#">Volontariat</a></li>
                        </ul>
                    </div>

                    <!--OBJECT | RECOM-->
                    <div class="pt-24px w-100">
                        <h4 class="text-dark-primary ff-semibold fs-basic">Recommandation</h4>
                        <div class="pt-22px object-recom">
                            <a href="#" class="bg-img">
                                <i class="bg-img-news-1">
                                    <b class="bg-img-bgcolor-hover-primary-55"></b>
                                </i>
                                <div class="col">
                                    <h5 class="text-hover-primary">Écoles de devoirs : un petit déjeuner avec les
                                        volontaires</h5>
                                    <span class="color-cat-cit">Citoyen</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

<?php
get_footer();
