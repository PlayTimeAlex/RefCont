/**
 * @author Stéphane Roucheray 
 * @extends jquery
 */


jQuery.fn.carousel = function(previous, next, width, options){
    jQuery(this).each(function(){
        var sliderList = jQuery(this).children()[0];
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        if(msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
            jQuery(this).addClass('ie');
        }
        if (sliderList) {
            jQuery(sliderList).wrap('<div class="viewport"></div>');
            var increment = width,
                elmnts = jQuery(sliderList).children(),
                numElmts = elmnts.length,
                sizeFirstElmnt = increment,
                shownInViewport = Math.round(jQuery(this).width() / sizeFirstElmnt),
                firstElementOnViewPort = 1,
                isAnimating = false;
            for (i = 0; i < shownInViewport; i++) {
                jQuery(sliderList).css('width',(numElmts+shownInViewport)*increment + increment + "px");
                jQuery(sliderList).append(jQuery(elmnts[i]).clone());
            }
            jQuery(sliderList).children().css('display', 'block');
            jQuery(this).append('<button class="prev"></button><button class="next"></button>')


            jQuery('.prev',this).click(function(event){
                if (!isAnimating) {
                    if (firstElementOnViewPort == 1) {
                        jQuery(sliderList).css('left', "-" + numElmts * sizeFirstElmnt + "px");
                        firstElementOnViewPort = numElmts;
                    }
                    else {
                        firstElementOnViewPort--;
                    }

                    jQuery(sliderList).animate({
                        left: "+=" + increment,
                        y: 0,
                        queue: true
                    }, "swing", function(){isAnimating = false;});
                    isAnimating = true;
                }

            });

            jQuery('.next',this).click(function(event){
                if (!isAnimating) {
                    if (firstElementOnViewPort > numElmts) {
                        firstElementOnViewPort = 2;
                        jQuery(sliderList).css('left', "0px");
                    }
                    else {
                        firstElementOnViewPort++;
                    }
                    jQuery(sliderList).animate({
                        left: "-=" + increment,
                        y: 0,
                        queue: true
                    }, "swing", function(){isAnimating = false;});
                    isAnimating = true;
                }
            });
        }
    });
};
