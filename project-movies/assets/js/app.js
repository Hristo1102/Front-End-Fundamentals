;(function (doc, win, $) {

	var $doc = $(document),
		$win = $(window);

	$doc.ready(function() {
		var $slider = $(".slider");
		$slider.owlCarousel({
			items: 1,
			loop: true,
			autoplay: true,
			autoplayTimeout: 4000,
			smartSpeed: 2000,
		});

		var $smallSlider = $(".slider1");
		$smallSlider.owlCarousel({
			items: 6,
			loop: true,
			autoplay: true,
			autoplayTimeout: 8000,
			smartSpeed: 2000,
		});
	});


})(document, window, jQuery);