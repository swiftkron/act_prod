$('#popout').click(function(){
  window.open('#','_blank','width=1024,height=590,scrollbars=no,resizeable=no,titlebar=no,menubar=no,toolbar=no');
});
$('#ipsearchbtn').click(function(){
  var searchterm = $('#ipsearch').val();
  window.open('/resources?q='+ searchterm +'');
});
  $('#ipsearch').keypress(function(event) {
    var searchterm = $('#ipsearch').val();
    if (event.which == 13) {
        event.preventDefault();
        window.open('/resources?q='+ searchterm +'','_blank');
    }    
  }); 