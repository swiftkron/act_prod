//SLIDERS
$(document).ready(function(){
// _featured slider_
$('.sliderF .slider-next').attr('id','sliderF-next');
$('.sliderF .slider-prev').attr('id','sliderF-prev');
$('.sliderF .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#sliderF-next',
  prevSelector: '#sliderF-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.sliderF .slider-next').click(function(){
  $('.sliderF .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider1_
$('.slider1 .slider-next').attr('id','slider1-next');
$('.slider1 .slider-prev').attr('id','slider1-prev');
$('.slider1 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider1-next',
  prevSelector: '#slider1-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider1 .slider-next').click(function(){
  $('.slider1 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider2_
$('.slider2 .slider-next').attr('id','slider2-next');
$('.slider2 .slider-prev').attr('id','slider2-prev');
$('.slider2 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider2-next',
  prevSelector: '#slider2-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider2 .slider-next').click(function(){
  $('.slider2 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider3_
$('.slider3 .slider-next').attr('id','slider3-next');
$('.slider3 .slider-prev').attr('id','slider3-prev');
$('.slider3 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider3-next',
  prevSelector: '#slider3-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider3 .slider-next').click(function(){
  $('.slider3 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider4_
$('.slider4 .slider-next').attr('id','slider4-next');
$('.slider4 .slider-prev').attr('id','slider4-prev');
$('.slider4 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider4-next',
  prevSelector: '#slider4-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider4 .slider-next').click(function(){
  $('.slider4 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider5_
$('.slider5 .slider-next').attr('id','slider5-next');
$('.slider5 .slider-prev').attr('id','slider5-prev');
$('.slider5 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider5-next',
  prevSelector: '#slider5-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider5 .slider-next').click(function(){
  $('.slider5 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});
// _slider6_
$('.slider6 .slider-next').attr('id','slider6-next');
$('.slider6 .slider-prev').attr('id','slider6-prev');
$('.slider6 .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 3,
  slideWidth: 290,
  slideMargin: 12,
  nextSelector: '#slider6-next',
  prevSelector: '#slider6-prev',
  nextText: '❯',
  prevText: '❮',
  infiniteLoop: false
});
$('.slider6 .slider-next').click(function(){
  $('.slider6 .bxslider').css('transform','translate3d(-610px, 0px, 0px)');
});

});
// Box Animation
$('#salesGroup').hover(
  function(){
    $('#salesBox').attr('fill','#FFF');
    $('#salesBox').attr('stroke','#FFF');
    $('#salesBox').attr('stroke-width','8');
  },
  function(){
    $('#salesBox').attr('fill','#EFEFEF');
    $('#salesBox').attr('stroke','#EFEFEF');
    $('#salesBox').attr('stroke-width','0');
  }
);
$('#salesGroup').click(function(){
  location.href="#salesCons";
});
$('#socialGroup').hover(
  function(){
    $('#socialBox').attr('fill','#FFF');
    $('#socialBox').attr('stroke','#FFF');
    $('#socialBox').attr('stroke-width','8');
  },
  function(){
    $('#socialBox').attr('fill','#EFEFEF');
    $('#socialBox').attr('stroke','#EFEFEF');
    $('#socialBox').attr('stroke-width','0');
  }
);
$('#socialGroup').click(function(){
  location.href="#socialCons";
});
$('#custGroup').hover(
  function(){
    $('#custBox').attr('fill','#FFF');
    $('#custBox').attr('stroke','#FFF');
    $('#custBox').attr('stroke-width','8');
  },
  function(){
    $('#custBox').attr('fill','#EFEFEF');
    $('#custBox').attr('stroke','#EFEFEF');
    $('#custBox').attr('stroke-width','0');
  }
);
$('#custGroup').click(function(){
  location.href="#custCons";
});
$('#backGroup').hover(
  function(){
    $('#backBox').attr('fill','#FFF');
    $('#backBox').attr('stroke','#FFF');
    $('#backBox').attr('stroke-width','8');
  },
  function(){
    $('#backBox').attr('fill','#EFEFEF');
    $('#backBox').attr('stroke','#EFEFEF');
    $('#backBox').attr('stroke-width','0');
  }
);
$('#backGroup').click(function(){
  location.href="#backCons";
});
$('#ecommGroup').hover(
  function(){
    $('#ecommBox').attr('fill','#FFF');
    $('#ecommBox').attr('stroke','#FFF');
    $('#ecommBox').attr('stroke-width','8');
  },
  function(){
    $('#ecommBox').attr('fill','#EFEFEF');
    $('#ecommBox').attr('stroke','#EFEFEF');
    $('#ecommBox').attr('stroke-width','0');
  }
);
$('#ecommGroup').click(function(){
  location.href="#ecommCons";
});
$('#bizGroup').hover(
  function(){
    $('#bizBox').attr('fill','#FFF');
    $('#bizBox').attr('stroke','#FFF');
    $('#bizBox').attr('stroke-width','8');
  },
  function(){
    $('#bizBox').attr('fill','#EFEFEF');
    $('#bizBox').attr('stroke','#EFEFEF');
    $('#bizBox').attr('stroke-width','0');
  }
);
$('#bizGroup').click(function(){
  location.href="#bizCons";
});