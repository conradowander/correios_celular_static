(function($){
    $(".lazy").lazyload();

    if($.fn.jquery != '1.6.2'){

        $('.banner-home-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-prev"><path d="M170.965,363.918l330.214,330.214c3.814,3.961,8.948,5.868,13.937,5.868c4.987,0,10.122-2.054,13.936-5.868c7.775-7.774,7.775-20.244,0-28.019L212.92,349.981L529.051,33.85c7.775-7.775,7.775-20.244,0-28.019 c-7.774-7.775-20.244-7.775-28.019,0L170.819,336.045C163.19,343.674,163.19,356.289,170.965,363.918z"/></svg>',
            nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="165.116 0 369.767 700" width="50" height="50" class="slick-arrow arrow-next"><path d="M529.18,336.045L198.966,5.831c-7.774-7.775-20.244-7.775-28.019,0c-7.775,7.775-7.775,20.244,0,28.019l316.131,316.131L170.948,666.113c-7.775,7.774-7.775,20.244,0,28.019c3.813,3.814,8.948,5.868,13.936,5.868c4.988,0,10.122-1.907,13.937-5.868l330.214-330.214C536.809,356.289,536.809,343.674,529.18,336.045z"/></svg>',

            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }]
        });
    }
})(jQuery);

// DEFAULT
(function($){

    // open and close filters of smartfilter in catalog and search pages
    $('.open-filters').click(function() {
        $('.filters-list').slideToggle();
    });

    jQuery(document).ready(function(){

        jQuery('.showMenu').click(function() {
            jQuery('html').toggleClass('menu-open');
        });

       jQuery('.menu-mobile .item-level1').click(function(){

            if(jQuery(this).find(jQuery('.level2')) && !jQuery('.back-category').hasClass('back-level1')){
                jQuery('.level1').css('transform', 'translateX(-100%)');
                jQuery(this).find(jQuery('.level2')).show();
                jQuery('.back-category').show();
                jQuery('.back-category').addClass('back-level1');
            }

        });

        jQuery('.menu-mobile .item-level2').click(function(){

            if(jQuery(this).find(jQuery('.level3')) && jQuery('.back-category').hasClass('back-level1')){
                jQuery('.level1').css('transform', 'translateX(-200%)');
                jQuery(this).find(jQuery('.level3')).show();
                jQuery('.back-category').addClass('back-level2');
            }

        });


        jQuery('.back-category').click(function() {

            if(jQuery(this).hasClass('back-level1') && !jQuery(this).hasClass('back-level2')){
                jQuery('.level1').css('transform', 'translateX(0)');
                jQuery(this).removeClass('back-level1');
                jQuery('.level2').hide();
                jQuery(this).hide();
            }

            if(jQuery(this).hasClass('back-level1') && jQuery(this).hasClass('back-level2')){
                jQuery('.level1').css('transform', 'translateX(-100%)');
                jQuery(this).removeClass('back-level2');
                jQuery('.level3').hide();
            }
        });

        jQuery('.close-menu-mobile').click(function() {
           jQuery('html').removeClass('menu-open');
        });

        // modal login
        jQuery('.modal-login').click(function(event) {
           event.preventDefault();
           jQuery('tray-login').show();
        });

    });

})(jQuery);


