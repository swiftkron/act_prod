$(document).ready(function(){
$('body').addClass('ShowChat');
//Direct nav
var tab = getParameterByName('tab');
  if(tab == '1'){
    $('.overviewTab').css('display','none');
    $('#overview').css('display','block');
    $('.tab1').parent().addClass('active');
    $('.content1').css('display','block');
  }
  if(tab == '2'){
    $('.overviewTab').css('display','none');
    $('#overview').css('display','block');
    $('.tab2').parent().addClass('active');
    $('.content2').css('display','block');
  }
  if(tab == '3'){
    $('.overviewTab').css('display','none');
    $('#overview').css('display','block');
    $('.tab3').parent().addClass('active');
    $('.content3').css('display','block');
  }
  if(tab == '4'){
    $('.overviewTab').css('display','none');
    $('#overview').css('display','block');
    $('.tab4').parent().addClass('active');
    $('.content4').css('display','block');
  }
//In page nav
$('.tab').click(function(){
  $('.overviewTab').css('display','none');
  $('#overview').css('display','block');
  $('.contentTab').css('display','none');
  $('.tabs .col-3').removeClass('active');
  $('.tabs .col-4').removeClass('active');
  $('.tabs .col-6').removeClass('active');
  $('.tabs p').css('display','none');
});
$('.tab1').click(function(){
  $('.tab1').parent().addClass('active');
  $('.content1').css('display','block');
});
$('.tab2').click(function(){
  $('.tab2').parent().addClass('active');
  $('.content2').css('display','block');
});
$('.tab3').click(function(){
  $('.tab3').parent().addClass('active');
  $('.content3').css('display','block');
});
$('.tab4').click(function(){
  $('.tab4').parent().addClass('active');
  $('.content4').css('display','block');
});
$('#overview').click(function(){
  $('.overviewTab').css('display','block');
  $('#overview').css('display','none');  
  $('.contentTab').css('display','none');
  $('.tabs .col-3').removeClass('active');
  $('.tabs .col-4').removeClass('active');
  $('.tabs .col-6').removeClass('active');
  $('.tabs p').css('display','block');
});
});