(function () {

    "use strict";

    document.addEventListener("deviceready", function () {
        FastClick.attach(document.body);
        StatusBar.overlaysWebView(false);
    }, false);


    // Show/hide menu toggle
    $('#menu-button-left').click(function () {
        if ($('#container').hasClass('offset-left')) {
            $('#container').removeClass('offset-left');
        } else {
            $('#container').addClass('offset-left');
        }
        return false;
    });

    $('#menu-button-right').click(function () {
        if ($('#container').hasClass('offset-right')) {
            $('#container').removeClass('offset-right');
        } else {
            $('#container').addClass('offset-right');
        }
        return false;
    });

    dashboard1.render();

}());