<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <title>Bienvenue sur Act!</title>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>

    <link rel="stylesheet" href="/2016startup4-trial/css/bootstrap.min.css">
    <link rel="stylesheet" href="/2016startup4-trial/css/welcomepage_2016.css">

		<script type="text/javascript">
		// Sliders
		$(document).ready(function () {
		
				setInterval(function () {
						moveRight();
				}, 15000);
			
			var slideCount = $('#slider ul#slideContainer li.slide').length;
			var slideWidth = $('#slider ul#slideContainer li.slide').width();
			var slideHeight = $('#slider ul#slideContainer li.slide').height();
			var sliderUlWidth = slideCount * slideWidth;
			
			$('#slider').css({ width: slideWidth, height: slideHeight });
			
			$('#slider ul#slideContainer').css({ width: sliderUlWidth, marginLeft: - slideWidth });
			
				$('#slider ul#slideContainer li.slide:last-child').prependTo('#slider ul#slideContainer');
		
				function moveLeft() {
						$('#slider ul#slideContainer').animate({
								left: + slideWidth
						}, 200, function () {
								$('#slider ul#slideContainer li.slide:last-child').prependTo('#slider ul#slideContainer');
								$('#slider ul#slideContainer').css('left', '');
						});
				};
		
				function moveRight() {
						$('#slider ul#slideContainer').animate({
								left: - slideWidth
						}, 200, function () {
								$('#slider ul#slideContainer li.slide:first-child').appendTo('#slider ul#slideContainer');
								$('#slider ul#slideContainer').css('left', '');
						});
				};
		
				$('a.control_prev').click(function () {
						moveLeft();
				});
		
				$('a.control_next').click(function () {
						moveRight();
				});
				
				// Video Control
				$('#video').click(function(){
					window.open("http://www.act.com/support/getting-started-feature-tours");
				});
		
		});    
		</script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

      ga('create', 'UA-40741589-3', 'act.com');
      ga('send', 'pageview');

    </script>
    <!-- Kissmetrics -->
    <script type="text/javascript">var _kmq = _kmq || [];
    var _kmk = _kmk || 'fb3b6dd55e5635b7f5eb80ac69d927bd54d760b6';
    function _kms(u){
      setTimeout(function(){
        var d = document, f = d.getElementsByTagName('script')[0],
        s = d.createElement('script');
        s.type = 'text/javascript'; s.async = true; s.src = u;
        f.parentNode.insertBefore(s, f);
      }, 1);
    }
    _kms('//i.kissmetrics.com/i.js');
    _kms('//scripts.kissmetrics.com/' + _kmk + '.2.js');
    </script>
    <!-- end Kissmetrics -->
  </head>
  <body>
		
    <div class="header">
    	<div id="logo"></div>
      <h1>Bienvenue sur Act!</h1>
      <!-- social -->
      <ul class="social-media">
      	<li id="sm-facebook"><a href="http://act.com/facebook" target="_blank"><span></span></a></li>
        <li id="sm-twitter"><a href="http://act.com/twitter" target="_blank"><span></span></a></li>
        <li id="sm-linkedin"><a href="http://act.com/linkedin" target="_blank"><span></span></a></li>
        <li id="sm-googleplus"><a href="http://act.com/googleplus" target="_blank"><span></span></a></li>
        <li id="sm-youtube"><a href="http://act.com/youtube" target="_blank"><span></span></a></li>
      </ul>
    </div>
    
    <div class="container">
    	<!-- left col --><div class="leftCol">
    	<div id="intro">
      	<h2>Merci d&rsquo;essayer Act!. Voici des ressources pour vous aider &agrave; bien d&eacute;marrer :</h2>
        <ul>
        	<li><span>Visitez le <a href="http://www.act.com/fr-fr/ressources" target="_blank">centre de ressources Act!</a> afin de tirer le meilleur parti de votre version d&rsquo;essai.</span></li>
        	<li><span>Consultez la <a href="http://kb-fr.swiftpage.com/" target="_blank">base de connaissances Act!</a> pour des r&eacute;ponses et articles techniques sur divers sujets.</span></li>
        	<li><span>Profitez de notre r&eacute;seau de <a href="http://www.act.com/fr-fr/partenaires" target="_blank">Consultants Certifi&eacute;s Act!</a> pour un service d&rsquo;assistance personnalis&eacute;, des offres de formation, des solutions d&rsquo;h&eacute;bergement, ou du conseil.</span></li>
        </ul>
      </div>

          <li id="aem" style="width:488px;display:block;margin:10px 1.5em!important;padding:20px;">
                  <div >
                    <img id="aemlogo" src="https://www.act.com/2016startup4/img/aem-logo.png" class="img-responsive">
                    <h3>Le saviez-vous ?</h3>
                    <p><strong>Act! emarketing est inclus</strong><br>dans votre version</p>
                    <a href="http://www.act.com/fr-fr/produits/act-emarketing" target="_blank"><button style="display:inline-block; background-color: #ffffff; color: #308dc6;">En savoir plus</button></a>
                  </div>
                </li>

      </div><!-- .end left col -->
      
      <!-- right col --><div class="rightCol">
          <div id="newsFeed">
          	<h2 style="margin-top:24px;">D&eacute;mo personnalis&eacute;e</h2>
          	<p>Demandez une d&eacute;monstration personnalis&eacute;e de Act!, assur&eacute;e par nos experts CRM qui vous montreront comment Act! peut transformer votre entreprise.</p>
            <a href="http://e.act.com/fr-demo" target="_blank"><button style="margin: 40px auto;">Demande de d&eacute;mo</button></a>
            
            <h2 style="margin-top:40px;">Pr&ecirc;t &agrave; acheter Act! ?</h2>
            <p><a href="https://buy.act.com/fr-fr/account/completeregistration?returnUrl=" target="_blank">Compl&eacute;tez votre inscription</a> ou appelez nous au 09 75 18 23 09 (France), 078 483 840 (Belgique) pour acheter Act!.</p>

          </div>
    </div><!-- .end right col -->
    
  </div><!-- .end container -->

  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="http://act.com/2016startup4-trial/js/bootstrap.min.js"></script>
  </body>
</html>