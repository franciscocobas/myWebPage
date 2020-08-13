$(document).ready(function() {
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 1) {
            $("#sp-header").addClass("menu-fixed");
        } else {
            $("#sp-header").removeClass("menu-fixed");
        }
    });
});