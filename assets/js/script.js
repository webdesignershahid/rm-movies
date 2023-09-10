(function ($) {
    "use strict";

    function mobile_menu(selector, actionSelector) {
        var mobile_menu = $(selector);
        mobile_menu.on("click", function() {
            $(selector).toggleClass('is-menu-open');
        });
        
        var hamburgerbtn = $(selector);
        hamburgerbtn.on("click", function() {
            $(actionSelector).toggleClass('is-menu-open');
        });

        $(document).on('click', function(e) {
            var selectorType = $(actionSelector).add(mobile_menu);
            if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                $(actionSelector).removeClass("is-menu-open");
                $(selector).removeClass("is-menu-open");
            }          
        });
    
    };
    mobile_menu('.hambarger', '.mobile-menu');


    // Background Image and Color set by data attribute
    $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
        var $this = $(this);

        if( $this.attr("data-bg-image") !== undefined ){
            $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
            $this.css("background-size", $this.attr("data-bg-size"));
            $this.css("background-repeat", $this.attr("data-bg-repeat"));
            $this.css("background-position", $this.attr("data-bg-position"));
            $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
        }
        // Background Color    
        if( $("[data-bg-color]") ){
            $this.css("background-color", $this.attr("data-bg-color") );
        }
        // Background Color   
        if( $("[data-color]") ){
            $this.css("color", $this.attr("data-color") );
        }
    });

    var swiperSlider = $('.swiper');
    if (swiperSlider.length) {

        // Hero Slider
        var hero_slider = new Swiper('.hero-carousel', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            speed: 1000,
            // autoplay: {
            //     delay: 5000,
            // },
        });
    };

})(jQuery);