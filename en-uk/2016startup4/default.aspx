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
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>

    <link rel="stylesheet" href="http://act.com/2016startup4-trial/css/bootstrap.min.css">
    <link rel="stylesheet" href="http://act.com/2016startup4-trial/css/welcomepage_2016.css">

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
      <h1>Welcome to Act!</h1>
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
      	<h2>Become an Act! Expert</h2>
        <ul>
          <li><span>Visit the <a href="http://www.act.com/en-uk/resources/getting-started" target="_blank">Getting Started Resource Center</a></span></li>
          <li><span>View the <a href="http://www.act.com/en-uk/resources/feature-tours" target="_blank">Act! Feature Tours</a></span></li>
          <li><span>Discover <a href="http://www.act.com/en-uk/resources/training-opportunities" target="_blank">training opportunities</a></span></li>
          <li><span>Check out the <a href="http://kb.swiftpage.com/" target="_blank">Act! Knowledgebase</a> and <a href="http://community.act.com" target="_blank">Online Community</a></span></li>
        </ul>
      </div>

          <div id="slider">

        <ul id="slideContainer">
        <li id="whatsnew" class="slide">
            <div class="slideDiv">
              <h3>What's New in v18</h3>
              <ul>
                <li>New, modern look</li>
                <li>Act! emarketing enhancements</li>
                <li>All-new Web API platforn</li>
                <li>And more!</li>
              </ul>
              <div style="text-align: center;"><a href="http://www.act.com/en-uk/products/whats-new" target="_blank"><button style="display:inline-block; background-color: #ffffff; color: #308dc6;">See what's new</button></a></div>
            </div>
          </li>
          <li id="aem" class="slide">
            <div class="slideDiv">
              <img id="aemlogo" src="http://act.com/2016startup4/img/aem-logo.png" class="img-responsive" />
              <h3>Did you know?</h3>
              <p><strong>Act! emarketing is included</strong><br/>in your version of Act!</p>
              <a href="http://www.act.com/en-uk/products/act-emarketing" target="_blank"><button style="display:inline-block; background-color: #ffffff; color: #308dc6;">Get started</button></a>
            </div>
          </li>
          <li id="training" class="slide">
            <div class="slideDiv">
              <h3>Act! Premium Subscription Library</h3>
              <p>Take advantage of online Act! training courses - ready whenever you are!</p>
              <div style="text-align: center"><a href="http://training-act.com/act/act-lib-prem/en-us/Launch.html" target="_blank"><button style="display:inline-block; background-color: #ffffff; color: #308dc6;">sign up today!</button></a></div>
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
          	<h2>News &amp; Resources</h2>
            <div id="feedList">
              <div id="feed">
                <div class="desc">
                  <p><a href="http://loyalty360.org/loyalty-today/article/how-to-maximize-your-email-marketing-success" target="_blank">How to Maximize Your Email Marketing Success</a></p>
                  <p>&nbsp;</p>
                  <p><a href="http://www.business2community.com/social-media/stop-selling-on-social-media-start-generating-leads-instead-01351303#kM16KaAKf1TWDrQ9.97" target="_blank">Stop Selling on Social Media. Start Generating Leads Instead.</a></p>
                  <p>&nbsp;</p>
                  <p><a href="http://www.huffingtonpost.com/jonha-revesencio/the-7-biggest-b2b-lead-ge_b_8265076.html" target="_blank">The 7 Biggest B2B Lead Generation Mistakes You Can Easily Avoid</a></p>
                  <p>&nbsp;</p>
                  <p><a href="http://www.entrepreneur.com/article/248912" target="_blank">4 Low-Cost Moves Startups Use to Build Company Culture</a></p>
                  <p>&nbsp;</p>
                </div>
              </div>
          </div>
           <!-- video -->
           <div id="video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/wGNHBaPQtJE" frameborder="0" allowfullscreen></iframe>
              </div>
              
    </div><!-- .end right col -->
    
  </div><!-- .end container -->

  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="http://act.com/2016startup4-trial/js/bootstrap.min.js"></script>
  </body>
</html>