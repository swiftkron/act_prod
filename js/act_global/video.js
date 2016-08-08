$('.video-open').click(function(){
  var vid = $(this).attr('id');
  var lib = $(this).attr('data-source');
  //alert(vid);
  $('.overlay').css('display','block');
  $('.videoWrapper').css('display','block');
  $('.videoContainer video').attr('src','http://www.act.com/videos/default-source/'+ lib +'/'+ vid +'.mp4');
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