(function($) {
    $(document).ready(function(){
        $('.b-filter__select').styler({
            selectSearch: false
        });
    });

    $(window).load(function() {
        $('.b-saleslider').flexslider({
            animation: "slide",
            controlNav: false,
            pauseOnHover: true
        });
    });
}(jQuery));