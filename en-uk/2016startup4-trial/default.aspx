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
    <title>Welcome to Act!</title>

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
					window.open("/support/getting-started-feature-tours");
				});
		
		});    
		</script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

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
    _kms('https://i.kissmetrics.com/i.js');
    _kms('https://scripts.kissmetrics.com/' + _kmk + '.2.js');
    </script>
    <!-- end Kissmetrics -->
  </head>
  <body>
		
    <div class="header">
    	<div id="logo"></div>
      <h1>Welcome to Act!</h1>
      <!-- social -->
      <ul class="social-media">
      	<li id="sm-facebook"><a href="//act.com/facebook" target="_blank"><span></span></a></li>
        <li id="sm-twitter"><a href="//act.com/twitter" target="_blank"><span></span></a></li>
        <li id="sm-linkedin"><a href="//act.com/linkedin" target="_blank"><span></span></a></li>
        <li id="sm-googleplus"><a href="//act.com/googleplus" target="_blank"><span></span></a></li>
        <li id="sm-youtube"><a href="//act.com/youtube" target="_blank"><span></span></a></li>
      </ul>
    </div>
    
    <div class="container">
    	<!-- left col --><div class="leftCol">
    	<div id="intro">
      	<h2>Thank you for trying Act!. Here are some resources to help you get started:</h2>
        <ul>
        	<li><span>Visit the <a href="/en-uk/premium-trial/quick-start-guide/" target="_blank">Act! Trial Quick Start Guide</a> for step-by-step videos to help you make the most of your Act! trial.</span></li>
        	<li><span>Drill down to the details with these in-depth <a href="http://training-act.com/act/act-lib-host/en-us/Launch.html" target="_blank">feature tour videos</a>.</span></li>
        	<li><span>Check out the <a href="https://kb.swiftpage.com/" target="_blank">Act! Knowledgebase</a> and <a href="http://community.act.com" target="_blank">Online Community</a> to connect with Act! users like you!</span></li>
        </ul>
      </div>

          <li id="aem" style="width:488px;display:block;margin:10px 1.5em!important;padding:20px;">
                  <div >
                    <img id="aemlogo" src="/2016startup4/img/aem-logo.png" class="img-responsive">
                    <h3>Did you know?</h3>
                    <p><strong>Act! emarketing is included</strong><br>in your version of Act!</p>
                    <a href="/en-uk/resources/act-emarketing-getting-started" target="_blank"><button style="display:inline-block; background-color: #ffffff; color: #308dc6;">Get started</button></a>
                  </div>
                </li>

      </div><!-- .end left col -->
      
      <!-- right col --><div class="rightCol">
          <div id="newsFeed">
          	<h2 style="margin-top:24px;">Getting started with Act! Premium Cloud</h2>
          	<p>In this demo, our Act! specialists walk you through all of the tips, tricks, and information you need to get up and running in Act! Premium Cloud. Plus, this demo is moderated live, so you can get answers to all your product questions!</p>

            <a href="https://e.act.com/uk-demo" target="_blank"><button style="margin: 40px auto;">Request a demo</button></a>

            <p>Don't want to wait for the live demo? You can view the <a href="http://www.act.com/apc/onboarding-demo-recorded" target="_blank">recorded version</a> of this demo today!</p>
            <h2 style="margin-top:40px;">Have data to migrate?</h2>
            <p>Watch the short video below for instructions on migrating existing data into your Act! Premium Cloud account.</p>
            <a href="https://www.youtube.com/watch?v=m9_nPfie8p0" target="_blank"><img src="/2016startup4-trial/img/video-migrating-a-database.png" class="img-responsive"  style="margin:40px 0;" /></a>
            
            <h2 style="margin-top:40px;">Ready to buy?</h2>
            <p><a href="https://buy.act.com/en-gb/account/completeregistration?returnUrl=" target="_blank">Buy now</a> by completing your account registration or please call us at 0845 268 0220 (UK) or +353 766 801 364 (other countries).</p>

          </div>
    </div><!-- .end right col -->
    
  </div><!-- .end container -->

  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="/2016startup4-trial/js/bootstrap.min.js"></script>
  </body>
</html>