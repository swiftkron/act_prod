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

});