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

        //more parameters
        $('.more', '.b-itemin__tech').click(function(){
            var item = $(this).siblings('.b-itemin__techmore');
            if(item.hasClass('open')){
                $(this).removeClass('open').find('.text').html($(this).data('close'));
                item.stop().slideUp('fast').removeClass('open');
            } else {
                $(this).addClass('open').find('.text').html($(this).data('open'));
                item.stop().slideDown('fast').addClass('open');
            }
        });

        //Маска для полей ввода телефона
        $(".b-form__text_tel").mask("(999) 999-9999");
    });

    $(window).load(function() {
        $('.b-saleslider').flexslider({
            animation: "slide",
            controlNav: false,
            pauseOnHover: true
        });

        $('.b-itemin__slidernav').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 80,
            itemMargin: 0,
            asNavFor: '.b-itemin__slider',
            minItems: 4,
            maxItems: 4
        });

        $('.b-itemin__slider').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            slideshow: false,
            animationLoop: false,
            sync: ".b-itemin__slidernav"
        });

        $('.b-containers__catalog').carousel('#p', '#n', 110);

        $('.b-containers__catalog').each(function(){
            var els = $('.contgal',this);
            var group = $(this).data('group');
            console.log('test')
            els.colorbox({
                close: "",
                rel: group,
                previous: "",
                next: "",
                className: "b-containers__popup"
            });
        });

    });
}(jQuery));