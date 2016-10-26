$(document).ready(function(){
  $('body').addClass('ShowChat');
  // Tiles
  $('.tile').hover(
    function() {
      $(this).removeClass('bg_blue');
      $(this).addClass('bg_dark-grey');
    },
    function() {
      $(this).removeClass('bg_dark-grey');
      $(this).addClass('bg_blue');
    }
  );
  // Search
  $('#ipsearchbtn2').click(function(){
    var searchterm = $('#ipsearch2').val();
    window.open('?q='+ searchterm +'','_parent');
  });
  $('#ipsearch2').keypress(function(event) {
    var searchterm = $('#ipsearch2').val();
    if (event.which == 13) {
        event.preventDefault();
        window.open('?q='+ searchterm +'','_parent');
    }    
  }); 
  var query = getParameterByName('q');
  if(query != ""){
    $('.results').removeClass('hidden');
  }
});