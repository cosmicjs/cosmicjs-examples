<?php
include("config.php");
include("cosmicjs-php/cosmicjs.php");

?><!DOCTYPE HTML>
<!--
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
-->
<html>
	<head>
		<title><?php echo $cosmic['header-footer']->metafield['site-title']; ?> - <?php echo $cosmic['header-footer']->metafield['site-tag']; ?></title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<!--[if lte IE 8]><script src="assets/js/ie/html5shiv.js"></script><![endif]-->
		<link rel="stylesheet" href="assets/css/main.css" />
		<!--[if lte IE 8]><link rel="stylesheet" href="assets/css/ie8.css" /><![endif]-->
		<!--[if lte IE 9]><link rel="stylesheet" href="assets/css/ie9.css" /><![endif]-->
	</head>
	<body class="landing">

		<!-- Page Wrapper -->
			<div id="page-wrapper">

				<!-- Header -->
					<header id="header" class="alt">
						<h1><a href="index.html"><?php echo $cosmic['hero-unit']->metafield['headline']; ?></a></h1>
						<nav id="nav">
							<ul>
								<li class="special">
									<a href="#menu" class="menuToggle"><span><?php echo $cosmic['menu']->title; ?></span></a>
									<div id="menu">
										<ul>
											<?php
											foreach($cosmic['menu']->metafields as $menu_item){
												?>
												<li><a href="#"><?php echo $menu_item->title; ?></a></li>
												<?php
											}
											?>
										</ul>
									</div>
								</li>
							</ul>
						</nav>
					</header>

				<!-- Banner -->
					<section id="banner" style="background-position: center; background-size: cover; background-repeat: no-repeat; background-image: url('<?php echo $config->file_url . "/" . $cosmic['hero-unit']->metafield['hero']; ?>');">
						<div class="inner">
							<h2><?php echo $cosmic['hero-unit']->metafield['headline']; ?></h2>
							<p><?php echo nl2br($cosmic['hero-unit']->metafield['tag']); ?></p>
							<ul class="actions">
								<li><a href="https://cosmicjs.com" class="button special"><?php echo $cosmic['hero-unit']->metafield['button-text']; ?></a></li>
							</ul>
						</div>
						<a href="#one" class="more scrolly"><?php echo $cosmic['hero-unit']->metafield['arrow-text']; ?></a>
					</section>

				<!-- One -->
					<section id="one" class="wrapper style1 special">
						<div class="inner">
							<header class="major">
								<h2><?php echo $cosmic['section-1']->metafield['headline']; ?></h2>
								<?php echo $cosmic['section-1']->metafield['subheadline']; ?>
							</header>
							<ul class="icons major">
								<li><span class="icon fa-diamond major style1"><span class="label">Lorem</span></span></li>
								<li><span class="icon fa-heart-o major style2"><span class="label">Ipsum</span></span></li>
								<li><span class="icon fa-code major style3"><span class="label">Dolor</span></span></li>
							</ul>
						</div>
					</section>

				<!-- Two -->
					<section id="two" class="wrapper alt style2">
						<?php 
						foreach($cosmic['section-2']->metafields as $loop_row){
							?>
							<section class="spotlight">
								<div class="image"><img src="https://cosmicjs.com/uploads/<?php echo $loop_row->children[1]->value; ?>?dim=800" alt="" /></div><div class="content">
									<h2><?php echo $loop_row->value; ?></h2>
									<p><?php echo $loop_row->children[0]->value; ?></p>
								</div>
							</section>
							<?php
						}
						?>
					</section>

				<!-- Three -->
					<section id="three" class="wrapper style3 special">
						<div class="inner">
							<header class="major">
								<h2><?php echo $cosmic['section-3']->metafield['headline']; ?></h2>
								<p><?php echo $cosmic['section-3']->metafield['subheadline']; ?></p>
							</header>
							<ul class="features">
								<?php 
								foreach($cosmic['section-3']->metafields[2]->children as $block){
									?>
									<li class="icon <?php echo $block->children[1]->value; ?>">
										<h3><?php echo $block->value; ?></h3>
										<p><?php echo $block->children[0]->value; ?></p>
									</li>
								<?php
								}
								?>
							</ul>
						</div>
					</section>

				<!-- CTA -->
					<section id="cta" class="wrapper style4">
						<div class="inner">
							<header>
								<h2><?php echo $cosmic['section-4']->metafield['headline']; ?></h2>
								<p><?php echo $cosmic['section-4']->metafield['subheadline']; ?></p>
							</header>
							<ul class="actions vertical">
								<li><a href="https://cosmicjs.com" class="button fit special"><?php echo $cosmic['section-4']->metafield['primary-btn']; ?></a></li>
								<li><a href="https://cosmicjs.com" class="button fit"><?php echo $cosmic['section-4']->metafield['secondary-btn']; ?></a></li>
							</ul>
						</div>
					</section>

				<!-- Footer -->
					<footer id="footer">
						<ul class="icons">
							<li><a href="<?php echo $cosmic['social']->metafield['github']; ?>" class="icon fa-github"><span class="label">Github</span></a></li>
							<li><a href="<?php echo $cosmic['social']->metafield['twitter']; ?>" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
							<li><a href="mailto:<?php echo $cosmic['social']->metafield['email']; ?>" class="icon fa-envelope-o"><span class="label">Email</span></a></li>
						</ul>
						<ul class="copyright">
							<li>&copy; <?php echo date("Y"); ?> <a href="https://cosmicjs.com"><?php echo $cosmic['header-footer']->metafield['copyright']; ?></a></li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
						</ul>
					</footer>

			</div>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/skel.min.js"></script>
			<script src="assets/js/util.js"></script>
			<!--[if lte IE 8]><script src="assets/js/ie/respond.min.js"></script><![endif]-->
			<script src="assets/js/main.js"></script>

	</body>
</html>