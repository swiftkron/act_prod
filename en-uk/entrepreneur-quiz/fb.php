<?php
	
	$result = $_GET['result'];

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
	<head>
        
        <!--CHANGE THIS URL -->
        <script>location.href = 'http://act.com/en-uk/entrepreneur-quiz'; </script>
		<link href='http://fonts.googleapis.com/css?family=Righteous' rel='stylesheet' type='text/css'>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
	    <title>What type of entrepreneur are you?</title>
	    <link rel="stylesheet" href="css/main.css" />
	    <script src="js/vendor/modernizr.js"></script>
		<script type="text/javascript" src="js/jquery-1.7.2.min.js"></script>

		<meta property="fb:app_id" content="498128290344067" />
		<meta property="og:site_name" content="What type of entrepreneur are you?" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="What type of entrepreneur are you?" />
		<meta property="og:description" content="I am <?php echo $result ?>" />
		<meta property="og:image" content="http://act.com/en-uk/entrepreneur-quiz/img/section/section--intro/facebook-logo.jpg" />
        
        <meta name="twitter:card" content="summary" />

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

	</body>
</html>
