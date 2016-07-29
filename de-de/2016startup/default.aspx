<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="cache-control" content="max-age=0" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="expires" content="0" />
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT" />
    <meta http-equiv="pragma" content="no-cache" />
    <title>Willkommen bei Act!</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="js/html5shiv.js"></script>
      <script src="js/respond.min.js"></script>
    <![endif]-->
    
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>

    <link href="css/welcome.css" rel="stylesheet">

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
      <h1>Willkommen bei Act!</h1>
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
      	<h2>Werden Sie Act! Experte</h2>
        <ul>
          <li><span>Besuchen Sie unser <a href="http://www.act.com/de-de/hilfsmittel" target="_blank">Act! Ressourcen Center</a></span></li>
          <li><span>Sehen Sie sich unsere <a href="http://www.act.com/de-de/hilfsmittel/dokumentation" target="_blank">Act! Guides und Dokumentationen</a> an</span></li>
          <li><span>Endecken Sie unsere <a href="http://kb-de.swiftpage.com/" target="_blank">Act! Knowledgebase</a></span></li>
        </ul>
      </div>

          <div id="slider">

        <ul id="slideContainer">
        <li id="whatsnew" class="slide">
            <div class="slideDiv">
              <h3>Was ist neu in v18?</h3>
              <ul>
                <li>Neuer, moderner und frischer Look</li>
                <li>Act! emarketing Verbesserungen</li>
                <li>Neue Web-API Plattform</li>
                <li>Und vieles mehr!</li>
              </ul>
              <div style="text-align: center;"><a href="http://www.act.com/de-de/produkte/was-ist-neu" target="_blank"><button>Erfahren Sie mehr</button></a></div>
            </div>
          </li>
          <li id="aem" class="slide">
            <div class="slideDiv">
              <img id="aemlogo" src="http://act.com/2016startup4/img/aem-logo.png" class="img-responsive" />
              <h3>Wussten Sie das?</h3>
              <p style="font-family:Arial;"><strong>Act! emarketing ist in Ihrer<br/>Act! Version inklusive</strong></p>
              <a href="http://www.act.com/de-de/produkte/act-emarketing" target="_blank"><button>Erfahren Sie mehr</button></a>
            </div>
          </li>
        </ul>  
        <div id="controls">
        <a class="control_prev">&laquo;</a>
        <a class="control_next">&raquo;</a>
        </div>


      </div>

      </div><!-- .end left col -->
      
      <!-- right col --><div class="rightCol">
          <div id="newsFeed">
          	<h2>Wissenswertes</h2>
            <div id="feedList">
              <div id="feed">
                <div class="desc">
                  <p>N&uuml;tzliche <a href="http://www.social-startups.de/nuetzliche-mobile-marketing-apps-fuer-startups/" target="_blank">Tipps f&uuml;r Start-Ups</a> und <a href="http://www.deutsche-startups.de/2015/01/27/blogs-fuer-gruender/" target="_blank">Blogs f&uuml;r Gr&uuml;nder</a></p>
                  <p>&nbsp;</p>
                  <p><a href="http://gruender.wiwo.de/" target="_blank">Gr&uuml;nder-Blog der Wirtschaftswoche</a></p>
                  <p>&nbsp;</p>
                  <p><a href="http://excitingcommerce.de/" target="_blank">Denkanst&ouml;&szlig;e f&uuml;r den Handel von morgen</a></p>
                  <p>&nbsp;</p>
                </div>
              </div>
          </div>
            
    </div><!-- .end right col -->
    
  </div><!-- .end container -->

  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="/2016startup4-trial/js/bootstrap.min.js"></script>
  </body>
</html>