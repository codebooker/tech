(function ($) {
    $(function () {
        $('.button-collapse').sideNav({
            draggable: true
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
(function () {
    $('#status').fadeOut();
    $('#preloader').delay(200).fadeOut('slow');
}());
$(document).ready(function () {
    $('ul.tabs').tabs();
});