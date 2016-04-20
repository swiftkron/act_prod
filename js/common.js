$(document).ready(function () {


    // Hide the drop down by default
    $('.uDropdown').hide();

    $('.uIntl').click(function () {
        $('.uDropdown').slideToggle(400);
    })


    // Get the window width when the page loads to calculate what glyphicon to use below
    var window_width = $(window).width();

    if (window_width <= 701) {
        $('span.glyphicon').removeClass('glyphicon-globe');
        $('span.glyphicon').addClass('glyphicon-chevron-down');
    }

    if (window_width > 701) {
        $('span.glyphicon').addClass('glyphicon-globe');
    }


    // For responsive, we want to track the users window size when they stretch or shrink it
    $(window).resize(function () {
        var window_width = $(window).width();

        if (window_width <= 701) {
            $('span.glyphicon').removeClass('glyphicon-globe');
            $('span.glyphicon').addClass('glyphicon-chevron-down');
        }

        if (window_width > 701) {
            $('span.glyphicon').addClass('glyphicon-globe');
        }
    });

    // For the page navigation

    // Set the first tab to active as the default
    $('#nav_contact_manage').addClass('active');

    // If a link is clicked take away the active class from the existing and make the new one active
    $('.rounded_page_nav a').click(function () {
        $('.rounded_page_nav a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.rounded_page_nav a').click(function() {
        hideContentDivs();
        var tmp_div = $(this).parent().index();
        $('.tab_content').eq(tmp_div).show();
    });

    function hideContentDivs(){
        $('.tab_content').each(function() {
            $(this).hide();
        });
    }
    hideContentDivs();
    $('.tab_content').first().show();




    // enewsletter (footer)
    $('#enews_button').click(function () {
        $('input[name=elqFormName]').attr('value', 'emailsubscribehome')
        $('input[name=LeadSource]').attr('value', 'LCRMAA0001WQ')
        $('#form1').attr('action', 'https://s1966950654.t.eloqua.com/e/f2');
        $('#form1').attr('method', 'post');
        $('#form1').submit();
    });

});

// Get URL Parameters
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Define UTM Variables
var utm_source = getParameterByName('utm_source');
var utm_medium = getParameterByName('utm_medium');
var utm_content = getParameterByName('utm_content');
var utm_campaign = getParameterByName('utm_campaign');
var utm_name = getParameterByName('utm_name');
var utm_term = getParameterByName('utm_term');
// Preload UTM Data for Elq Forms
$(document).ready(function () {
    $('input[name="elq_utm_source"]').attr('value', utm_source);
    $('input[name="elq_utm_medium"]').attr('value', utm_medium);
    $('input[name="elq_utm_content"]').attr('value', utm_content);
    $('input[name="elq_utm_campaign"]').attr('value', utm_campaign);
    $('input[name="elq_utm_name"]').attr('value', utm_name);
    $('input[name="elq_utm_term"]').attr('value', utm_term);
});