$('.video-open').click(function(){
  var vid = $(this).attr('id');
  var lib = $(this).attr('data-source');  
  if (lib == "youtube"){
    var vpath = "https://www.youtube.com/embed/"+ vid +"";
    $('.videoPlayer').html('<div class="vWrap"><iframe src="'+ vpath + '" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen" msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe></div>');
  }
  else{
    var vpath = "http://www.act.com/videos/default-source/"+ lib +"/"+ vid +".mp4";
    $('.videoPlayer').html('<video controls="true"></video>');
    $('.videoPlayer video').attr('src', vpath);
  }
  $('.overlay').css('display','block');
  $('.videoWrapper').css('display','block');
});
$('.closeBtn').click(function(){
  $('.overlay').css('display','none');
  $('.videoWrapper').css('display','none');
  $('video').get(0).pause();
});
$('.overlay').click(function(){
  $('.overlay').css('display','none');
  $('.videoWrapper').css('display','none');
  $('video').get(0).pause();
});