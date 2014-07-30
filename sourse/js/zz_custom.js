(function($) {
    $(document).ready(function(){
        $('.b-filter__select, .pr-select').styler({
            selectSearch: false
        });

        $('select.pr-select_link').change(function() {
            window.location = $("option:selected", this).val();
        });

        //gallery popup
        $('.galimg').colorbox({
            close: ""
        });

        //top nav
        $('.parent', '.b-header__nav').hover(function(){
           $('.sub-menu',this).css('display', 'block').stop().animate({
               opacity:1
           }, 300);
        }, function(){
            $('.sub-menu',this).stop().animate({
                opacity:0
            }, 300, function(){
                $(this).css('display', 'none');
            });
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