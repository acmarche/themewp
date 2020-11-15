<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!--<meta name="keywords" content=""> | TODO -->

	<meta name="author" content="Studio Tartine">
	<title>Page de recherche | Ville de Marche-en-Famenne</title>

	<!--BOOTSTRAP-->
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

	<!--CSS-->
	<link rel="stylesheet" href="css/base.css">

	<!--FONT-AWESOME-->
	<script src="https://kit.fontawesome.com/346aed29e3.js" crossorigin="anonymous"></script>

	<!--FAVICON-->
	<link rel="icon" type="image/png" href="rsc/favicon.png" />
</head>

<body class="bg-white">

<!--OBJECT | HEADER-->
<header>
	<div>
		<a href="index.html">
			<img src="rsc/img/img_logo.png" alt="logo">
		</a>

		<!--OBJECT | NAV-->
		<nav>

			<!--home-->
			<div class="home">
				<a href="index.html">
					<i class="icon_nav i-home"></i>
				</a>
			</div>
			<!--search | visible on mobile/tablet && !homepage-extralarge | TODO JF: à brancher-->
			<div class="search">
				<a href="#">
					<i class="icon_nav i-search"></i>
					<i class="icon_nav i-search i-white position-absolute d-none d-xl-block"></i>
				</a>

				<div class="searchScreen">
					<i class="graphicElement"></i>

					<ul>
						<li class="col-ls-12">
							<div class="h-32px">
								<input type="search" placeholder="Que cherchez-vous ?" class="border-0 rounded-pill h-32px pl-16px pr-48px fs-short-3">
								<button class="position-absolute top-0 bottom-0 right-0 w-32px h-32px d-flex justify-content-center align-items-center p-0 border-0 rounded-right-pill bg-transparent icon_custom">
									<!--<i class="fa fa-search text-dark-primary"></i>-->
									<i class="i-search i-dark-primary w-16px h-16px"></i>
								</button>
							</div>
							<!--TODO JF: branchement-->
							<a href="#" class="icon_custom">
								<i class="i-times"></i>
							</a>
						</li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="pool.html" class="icon_custom"><i class="i-swimmer"></i>Piscine</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="#" class="icon_custom"><i class="i-leaf"></i>Environnment-Déchet</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="#" class="icon_custom"><i class="i-traffic-cone"></i>Travaux</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="#" class="icon_custom"><i class="i-beach-ball"></i>Jeunesse-Stages</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="map.html" class="icon_custom"><i class="i-map"></i>Cartes dynamiques</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="#" class="icon_custom"><i class="i-handshake"></i>CPAS</a></li>
						<li class="col-ls-6 col-ls-sm-4 col-xl-12 col-ls-xl-12"><a href="#" class="icon_custom"><i class="i-envelope"></i>Mon adresse e-mail</a></li>
					</ul>

					<i class="graphicElement"></i>
				</div>
			</div>
			<!--all | TODO JF: à brancher-->
			<div class="all d-ls-flex align-items-ls-center justify-content-ls-center">
				<a href="#" class="icon_custom position-relative">
					<i class="icon_nav i-bars"></i>
					<i class="i-bars i-dark-primary"></i>
					<span>Vivre à Marche</span>
					<!--<input type="radio" name="subnav" value="1" class="w-100 h-100">-->
				</a>

				<!--subnav | TODO JF: à brancher-->
				<div class="subnav">
					<ul>
						<li class="d-flex flex-row align-items-center p-24px d-xl-none col-ls-12">
							<h3 class="flex-grow-1 text-white text-left">Vivre à Marche</h3>
							<a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center p-0 icon_custom">
								<i class="i-times i-white"></i>
								<!--<input type="radio" name="subnav" value="0" class="w-100 h-100">-->
							</a>
						</li>

						<!--administration | TODO JF: à brancher-->
						<li class="c-adm col-xl-5 mt-xl-12px col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Administration<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Administration</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil administration</a></li>
									<li><a href="#">Blason-Logos de la ville</a></li>
									<li><a href="#">Horaires-Contact</a></li>
									<li><a href="#">Collège communal</a></li>
									<li><a href="#">Conseil communal</a></li>
									<li><a href="#">Services communaux</a></li>
									<li><a href="#">Autres services administratifs</a></li>
									<li><a href="#">Taxes communales</a></li>
									<li><a href="#">Publications communales</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Permanences institutions</a></li>
									<li><a href="#">Procédures-Documents administratifs</a></li>
									<li><a href="#">Subventions-Primes communales</a></li>
									<li><a href="#">Enquêtes publiques</a></li>
									<li><a href="#" alt="Programme stratégique transversal">PST</a></li>
								</ul>
							</div>
						</li>

						<!--citoyen | TODO JF: à brancher-->
						<li class="c-cit col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="category.html" class="icon_custom">Citoyen<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Citoyen</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="category.html">Accueil citoyen</a></li>
									<li><a href="#">Cultes</a></li>
									<li><a href="#">Conseils-Commissions</a></li>
									<li><a href="#">Emploi-Formation</a></li>
									<li><a href="#">Enfance-Jeunesse</a></li>
									<li><a href="#">Enseignement</a></li>
									<li><a href="#">Environnement</a></li>
									<li><a href="#">Famille</a></li>
									<li><a href="#">Info travaux</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Justice</a></li>
									<li><a href="#">Logement</a></li>
									<li><a href="#">Participation citoyenne</a></li>
									<li><a href="#">Petit patrimoine</a></li>
									<li><a href="#">Mobilité</a></li>
									<li><a href="#">Sécurité</a></li>
								</ul>
							</div>
						</li>

						<!--culture | TODO JF: à brancher-->
						<li class="c-cul col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Culture<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Culture</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil culture</a></li>
									<li><a href="#">Art-Culture</a></li>
									<li><a href="#">2ème roman</a></li>
									<li><a href="#">Activités créatives</a></li>
									<li><a href="#">Bibliothèque-Ludothèque</a></li>
									<li><a href="#">Cercles thèmatiques</a></li>
									<li><a href="#">Comités festifs</a></li>
									<li><a href="#">Enseignement artistique</a></li>
									<li><a href="#">Musées</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Musique</a></li>
								</ul>
							</div>
						</li>

						<!--economie | TODO JF: à brancher-->
						<li class="c-eco col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Économie<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Économie</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil économie</a></li>
									<li><a href="#">Économie marchoise</a></li>
									<li><a href="#">Créer une entreprise</a></li>
									<li><a href="#">Ouvrir un commerce</a></li>
									<li><a href="#">Pays de Famenne</a></li>
									<li><a href="#">Wex</a></li>
									<li><a href="#">Commerces-Entreprises</a></li>
									<li><a href="#">e-Square</a></li>
								</ul>
							</div>
						</li>

						<!--enfance/jeunesse | TODO JF: à brancher-->
						<li class="c-enf col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Enfance-Jeunesse<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Enfance-Jeunesse</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil enfance-jeunesse</a></li>
									<li><a href="#">0-3 ans</a></li>
									<li><a href="#">3-12 ans</a></li>
									<li><a href="#">12-18 ans</a></li>
									<li><a href="#">Plus de 18 ans</a></li>
									<li><a href="http://stages.marche.be/" target="_blank">Stages<i class="fas fa-external-link-alt"></i></a></li>
									<li><a href="#">Conseil communal des enfants</a></li>
									<li><a href="http://www.rescolm.be/" target="_blank">Repas scolaire<i class="fas fa-external-link-alt"></i></a></li>
									<li><a href="#">Enseignement</a></li>
								</ul>
							</div>
						</li>

						<!--sante | TODO JF: à brancher-->
						<li class="c-san col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Santé<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Santé</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil santé</a></li>
									<li><a href="#">Cellule communale santé & Viasano</a></li>
									<li><a href="#">Centre médicaux - Services</a></li>
									<li><a href="#">Collecte de sang</a></li>
									<li><a href="#">Consultations ONE</a></li>
									<li><a href="#">Hôpitaux</a></li>
									<li><a href="#">Médecins généralistes</a></li>
									<li><a href="#">Médecins spécialistes</a></li>
									<li><a href="#">Mutuelles</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Numéros de secours</a></li>
									<li><a href="#">Pharmacies</a></li>
									<li><a href="#">Poste médical - médecin de garde</a></li>
									<li><a href="#">Professionnels de la santé</a></li>
								</ul>
							</div>
						</li>

						<!--social | TODO JF: à brancher-->
						<li class="c-soc col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Social<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Social</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil social</a></li>
									<li><a href="#">Aide aux personnes</a></li>
									<li><a href="#">Associations</a></li>
									<li><a href="#">CPAS</a></li>
									<li><a href="#">Conseil de l'action sociale</a></li>
									<li><a href="#">Économie sociale</a></li>
									<li><a href="#">Info service</a></li>
									<li><a href="#">Seconde main</a></li>
									<li><a href="#" alt="Plan de cohésion sociale">PCS</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Résidence-service Joseph Marthoz</a></li>
									<li><a href="#">Logement</a></li>
									<li><a href="#">Services sociaux</a></li>
									<li><a href="#">Solidarité-Volontariat</a></li>
								</ul>
							</div>
						</li>

						<!--sport | TODO JF: à brancher-->
						<li class="c-spo col-xl-5 col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Sport<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Sport</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Accueil sport</a></li>
									<li><a href="#">Actu-Santé</a></li>
									<li><a href="#">Challenges-Mérites sportifs</a></li>
									<li><a href="#">Clubs-Compétitions</a></li>
									<li><a href="#">Cours-Animations</a></li>
									<li><a href="#">Clubs sports & loisirs</a></li>
									<li><a href="#">Location salles & terrains multisports</a></li>
									<li><a href="#">Missions des services</a></li>
									<li><a href="pool.html">Piscine communale</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Sport en Marche</a></li>
									<li><a href="#">Sports loisirs</a></li>
									<li><a href="#">Stages</a></li>
									<li><a href="#">Subventions-Subsides</a></li>
								</ul>
							</div>
						</li>

						<!--tourisme | TODO JF: à brancher-->
						<li class="c-tou col-xl-5 mb-xl-12px col-ls-6 col-ls-xl-5">
							<a href="#" class="icon_custom">Tourisme<i class="i-angle-right i-white bg-size-50"></i></a>

							<div class="col-xl-7">
								<div class="p-24px d-xl-none col-ls-12">
									<h3 class="text-left">Tourisme</h3>
									<span class="d-flex flex-row align-items-center pt-8px">
                                                <a href="#" class="d-flex flex-grow-1 align-items-center fs-short-2 text-dark-primary icon_custom"><i class="i-angle-left bg-size-40 bg-position-left"></i>Retour sur Vivre à Marche</a>
                                                <a href="#" class="position-relative w-24px h-24px d-flex justify-content-center align-items-center icon_custom">
                                                    <i class="i-times"></i>
                                                </a>
                                            </span>
								</div>
								<ul class="col-ls-6">
									<li><a href="#">Manifestations</a></li>
									<li><a href="#">Accueil tourisme</a></li>
									<li><a href="#">Aires de jeux</a></li>
									<li><a href="#">Plans</a></li>
									<li><a href="#">Logements</a></li>
									<li><a href="#">Horeca</a></li>
									<li><a href="#">Statues-Sculptures</a></li>
									<li><a href="#">Marche en livres</a></li>
									<li><a href="#">Marchés locaux</a></li>
								</ul>
								<ul class="col-ls-6">
									<li><a href="#">Médiathèque</a></li>
									<li><a href="#">Mouvements de jeunesse</a></li>
									<li><a href="#">Musées</a></li>
									<li><a href="#">Noël à Marche</a></li>
									<li><a href="#">Wifi public</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!--calendar-->
			<div class="calendar">

				<!-- TODO : à brancher -->
				<a href="#">
					<i class="icon_nav i-clock"></i>
					<span>Horaires-Contacts</span>
				</a>
			</div>

			<!--more | TODO JF: à brancher-->
			<div class="more">
				<input type="checkbox" id="more" name="more" />
				<a href="#" for="more">
					<i class="icon_nav i-plus"></i>
				</a>

				<div class="bubble">
					<i class="graphicElement"></i>
					<div>
						<a href="#">E-Guichet</a>
						<a href="news.html">Actualités</a>
						<a href="events.html">Agenda</a>
					</div>
					<i class="graphicElement"></i>
				</div>
			</div>

			<!--visible from extralarge-->
			<!--e-ticket-->
			<div class="eticket">

				<!-- TODO : à brancher -->
				<a href="#">
					<span>E-Guichet</span>
				</a>
			</div>
			<!--news-->
			<div class="news">
				<a href="news.html">
					<span>Actualités</span>
				</a>
			</div>
			<!--agenda-->
			<div class="agenda">
				<a href="events.html">
					<span>Agenda</span>
				</a>
			</div>
		</nav>

		<!-- social networks -->
		<div>

			<!-- TODO : à brancher -->
			<a href="#">
				<i class="fab fa-facebook-f"></i>
			</a>

			<!-- TODO : à brancher -->
			<a href="#">
				<i class="fab fa-twitter"></i>
			</a>

			<!-- TODO : à brancher -->
			<a href="#">
				<i class="fab fa-instagram"></i>
			</a>

			<!-- TODO : à brancher -->
			<a href="#">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	</div>
</header>

<!--CONTENT-->
<section id="content" class="pt-42px pb-36px pl-ls-42px overflow-ls-hidden overflow-md-hidden pl-ls-lg-0 pt-xl-66px pb-lg-66px mw-1440px mx-xl-auto w-100">

	<!--DIRECTORY-->
	<div class="bg-white pt-24px px-24px position-relative d-md-flex px-xl-48px mx-xl-n30px justify-content-md-center flex-column">

		<!--back | TODO JF: lien dynamique vers la page précédente-->
		<a href="#" class="button lvl3 align-self-ls-md-start align-self-md-start position-relative right-0 right-hover-12px fs-short-2"><i class="fas fa-angle-left pr-8px d-ls-md-inline pr-md-12px fs-short-2 d-md-inline"></i>Retour à la recherche</a>

		<!--title-->
		<h2 class="text-ls-md-left pt-ls-md-8px text-md-left pt-md-8px">Académie des Beaux-Arts</h2>

		<!--search-->
		<div class="mw-550px position-relative m-auto w-100 mt-48px">
			<input type="search" placeholder="Que cherchez-vous ?" class="border-0 rounded-pill h-42px pl-16px pr-58px fs-short-3 bg-lighter">
			<button class="position-absolute top-0 bottom-0 right-0 w-42px d-flex justify-content-center align-items-center p-0 border-0 rounded-right-pill bg-transparent icon_custom">
				<!--<i class="fa fa-search text-dark-primary"></i>-->
				<i class="i-search i-dark-primary"></i>
			</button>
		</div>

		<!--searched-->
		<span class="pt-24px d-block text-center ff-semibold text-dark-primary fs-short-2">280 RÉSULTATS POUR "VILLE"</span>

		<!--results-->
		<div class="pt-24px">
			<ul class="d-flex mx-n12px flex-wrap">
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Parkings Centre Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Blason et logos de la Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Sortie en Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">La Ville recrute un brigadier H/F</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Ville Amie Démence</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Parkings Centre Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Disclaimer email Ville-CPAS</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Sortie en Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Opération Commune Ville propres</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Ville Amie Démence</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Marche-en-Famenne - Ville zone 30</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Disclaimer email Ville-CPAS</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Cartes et plans de la Ville</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
				<li class="pb-12px px-12px col-12 col-md-6">
					<a href="#" class="border border-default p-24px shadow-sm d-block">
						<h3 class="fs-short-2 ff-semibold text-dark-primary text-hover-primary transition-all ellipsis">Opération Commune Ville propres</h3>
						<span class="d-block pt-8px fs-short-3 ellipsis text-dark-primary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime consequatur aliquam, aut corporis officiis quos facere fugiat iste ducimus? Consequatur repudiandae, accusamus veritatis quisquam vitae earum eveniet nihil praesentium saepe.</span>
					</a>
				</li>
			</ul>

			<!-- TODO JF: à brancher -->
			<a href="#" class="button lvl3 mt-12px align-self-ls-md-center align-self-md-center position-relative left-0 d-flex justify-content-center">Charger plus d'éléments<i class="fas fa-angle-down d-ls-md-inline pl-8px pl-md-12px fs-basic d-md-inline"></i></a>
		</div>
	</div>
</section>

<!--OBJECT | FOOTER-->
<footer>
	<section class="px-0 d-md-flex flex-md-wrap mx-md-n15px px-md-15px d-ls-flex flex-ls-wrap mx-ls-n15px pl-ls-15px col-xl-9 order-xl-2">
		<div class="px-0 col-ls-6 col-ls-md-4 col-md-6 col-lg-4 border-xl-left border-white-25 pl-xl-14px">
			<h6>Découvrez</h6>
			<ul class="d-flex flex-wrap mx-n11px">
				<li class="col-6 col-ls-12 col-md-12">

					<!-- TODO : à brancher -->
					<a href="#">E-Guichet</a>
				</li>
				<li class="col-6 col-ls-12 order-ls-3 col-md-12 order-md-3">

					<!-- TODO : à brancher -->
					<a href="#">Horaires-Contact</a>
				</li>
				<li class="col-6 col-ls-12 order-ls-2 col-md-12 order-md-2">
					<a href="news.html">Actualités</a>
				</li>
				<li class="col-6 col-ls-12 order-ls-4 col-md-12 order-md-4">
					<a href="events.html">Agenda</a>
				</li>
			</ul>
		</div>
		<div class="pt-24px px-0 col-ls-6 pt-ls-0 col-ls-md-4 pt-md-0 pl-md-12px pl-ls-md-0 col-md-6 col-lg-4 border-xl-left border-white-25 pl-xl-14px">
			<h6>Raccourcis</h6>
			<ul class="d-flex flex-wrap mx-n11px">
				<li class="col-6">
					<a href="pool.html">Piscine</a>
				</li>
				<li class="col-6">
					<a href="#">Environnment : Déchet</a>
				</li>
				<li class="col-6">
					<a href="#">Travaux</a>
				</li>
				<li class="col-6">
					<a href="#">Enfant-Stage</a>
				</li>
				<li class="col-6">
					<a href="map.html">Plan de la ville</a>
				</li>
				<li class="col-6">
					<a href="#">CPAS</a>
				</li>
				<li class="col-6">
					<a href="#">Mon mail</a>
				</li>
			</ul>
		</div>
		<div class="pt-24px px-0 col-ls-12 col-ls-md-4 pt-ls-md-0 col-md-12 col-lg-4 pt-lg-0 border-xl-left border-white-25 pl-xl-14px">
			<h6>Contact</h6>
			<ul>
				<li>Hôtel de ville : <a href="tel:+3284327000">084 32 70 00</a></li>
				<li>Du lundi au jeudi : de 8h à 12h et de 13h à 17h</li>
				<li>Vendredi : de 8h à 12h et de 13h à 15h</li>
				<li class="d-flex">

					<!-- TODO : à brancher -->
					<a href="#" class="text-white border-0 pb-0">
						<i class="fab fa-facebook-f"></i>
					</a>

					<!-- TODO : à brancher -->
					<a href="#" class="ml-11px text-white border-0 pb-0">
						<i class="fab fa-twitter"></i>
					</a>

					<!-- TODO : à brancher -->
					<a href="#" class="ml-11px text-white border-0 pb-0">
						<i class="fab fa-instagram"></i>
					</a>

					<!-- TODO : à brancher -->
					<a href="#" class="ml-11px text-white border-0 pb-0">
						<i class="fab fa-youtube"></i>
					</a>
				</li>
			</ul>
		</div>
	</section>
	<section class="d-flex mt-24px w-100 px-0 col-xl-3 border-xl-0 mt-xl-0 position-xl-initial">
		<div class="col-6 pt-24px pl-0 pt-xl-12px">
			<a href="index.html" class="d-block">
				<img src="rsc/img/img_logo_white.png" alt="logo" class="w-88px">
			</a>
		</div>
		<div class="col-6 pt-24px pr-0 pl-md-0 position-xl-absolute xl-top-auto xl-bottom-0 xl-left-auto xl-right-70px pt-xl-16px pb-xl-16px pl-xl-0 d-xl-flex flex-xl-row w-xl-100 align-items-xl-center justify-content-xl-end">

			<!-- TODO : à brancher -->
			<a href="#" class="d-block pt-xl-4px pb-xl-3px mr-xl-8px border-xl-bottom border-white-25">Vie privée</a>

			<!-- TODO : à brancher -->
			<a href="#" class="d-block pt-8px pt-xl-4px pb-xl-3px ml-xl-8px border-xl-bottom border-white-25">Mentions légales</a>
			<small class="pt-xl-0"><span class="d-none d-xl-inline pl-xl-8px pr-xl-4px fs-short-3"> - </span>Copyright © 2020<span class="d-none d-ls-md-inline d-md-inline"> - </span><br class="d-ls-md-none d-md-none">Ville de Marche-en-Famenne<span class="d-none d-ls-md-inline d-md-inline">. </span><br class="d-ls-md-none d-md-none">Tous droits réservés</small>
		</div>
	</section>
</footer>
</body>
</html>
