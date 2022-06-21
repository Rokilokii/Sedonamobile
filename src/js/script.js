$(document).ready(function() {
    $(".burger-icon").on("click", function() {
        $(".burger-icon").addClass("hidden-element");
        $(".header-logo-link").addClass("hidden-element");
        $(".mobile-main-link").addClass("show-element");
        $(".user-nav-wrapper").addClass("set-height-auto");
        $(".main-nav").animate({
            height: "toggle"
        }, 400);

    });

    $(".close-icon").on("click", function() {
        $(".burger-icon").removeClass("hidden-element");
        $(".header-logo-link").removeClass("hidden-element");
        $(".mobile-main-link").removeClass("show-element");
        $(".user-nav-wrapper").removeClass("set-height-auto");
        $(".main-nav").animate({
            height: "toggle"
        }, 0);
    });
});