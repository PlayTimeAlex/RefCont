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

        //spoiler
        $('.b-spoiler__header').click(function(){
            var container = $(this).parent();
            if(container.hasClass('open')){
                container.removeClass('open')
                $('.b-spoiler__content', container).stop().slideUp('fast');
            } else {
                container.addClass('open')
                $('.b-spoiler__content', container).stop().slideDown('fast');
            }
        });
    });

    $(window).load(function() {
        $('.b-saleslider').flexslider({
            animation: "slide",
            controlNav: false,
            pauseOnHover: true
        });
        $('.b-containers__catalog').carousel('#p', '#n', 110);
        /*$('.b-containers__catalog').flexslider({
            animation: "slide",
            controlNav: false,
            pauseOnHover: true,
            itemWidth: 100,
            itemMargin: 10,
            move: 1
        });
*/

    });
}(jQuery));