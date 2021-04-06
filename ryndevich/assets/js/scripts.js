/*
Author       : themes_mountain.
Template Name: Kaviya - Portfolio Template
Version      : 1.0
*/
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
		
		/*START MENU JS*/
        $(".mainmenu-icons").on('click', function () {
            $(".off-canvas-menu").addClass("active");
            $(".offcanves-menu-overlay").addClass("active");
        });
        $(".menu-close i.fa, .offcanves-menu-overlay, .menu-item-inner li a").on('click', function () {
            $(".off-canvas-menu").removeClass("active");
            $(".offcanves-menu-overlay").removeClass("active");
        });	
        
		$('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		
		/*END MENU JS*/ 		
        
        /*START CHANGE MENU BACKGROUND JS*/
			var headertopoption = $(window);
			var headTop = $('.header-top-area');

			headertopoption.on('scroll', function () {
				if (headertopoption.scrollTop() > 200) {
					headTop.addClass('menu-bg');
				} else {
					headTop.removeClass('menu-bg');
				}
			});
		 /*END CHANGE MENU BACKGROUND JS*/

		/*START VIDEO JS*/
			$('.video-play').magnificPopup({
				type: 'iframe'
			});
			$("a[class^='prettyPhoto']").prettyPhoto();
		/*END VIDEO JS*/

		/*START PORTFOLIO JS*/	
		$("#portfolio-slider").owlCarousel({
		    items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,3],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END PORTFOLIO JS*/
		
		/*START TESTIMONIAL JS*/	
		$("#testimonial-slider").owlCarousel({
		    items:1,
			itemsDesktop:[1000,1],
			itemsDesktopSmall:[980,1],
			itemsTablet:[768,1],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END TESTIMONIAL JS*/
		
		/*START BLOG JS*/	
		$("#blog-slider").owlCarousel({
		    items:3,
			itemsDesktop:[1000,3],
			itemsDesktopSmall:[980,2],
			itemsTablet:[768,2],
			itemsMobile:[650,1],
			pagination:true,
			navigation:false,
			slideSpeed:1000,
			autoPlay:false
		});
		/*END BLOG JS*/		
		
	}); 			

	
	/* START PARALLAX JS */
	(function () {

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		 
		} else {
			$(window).stellar({
				horizontalScrolling: false,
				responsive: true
			});
		}

	}());
	/* END PARALLAX JS  */		
		
	/* START WOW JS */		
		new WOW().init();
	/* END WOW JS */	
			
})(jQuery);


  

