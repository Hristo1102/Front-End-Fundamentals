;(function ( d, w, $){

	var $doc = $(d);

	$doc.ready(function(){
		
		var $slider = $('.slider');
		$slider.owlCarousel({
			items: 1,
			loop: true

		});

	})

	$doc.ready(function() {
			var $canvasMobileOpen = $('#mobile-open');
			var $canvasMobileClose = $('#mobile-close');
			var $canvasMobileMenu = $('#main-menu');
			var mobileHandler = function() {
				if($canvasMobileMenu.hasClass('mobile-open')){
				$canvasMobileMenu.removeClass('mobile-open');
				return;
				}
				$canvasMobileMenu.addClass('mobile-open');
			}
			$canvasMobileOpen.on('click', mobileHandler);
			$canvasMobileClose.on('click', mobileHandler);
		});

})( document, window, jQuery);