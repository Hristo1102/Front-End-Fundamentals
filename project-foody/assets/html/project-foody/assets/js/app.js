;(function (doc, win, $) {

	var $doc = $(document);
	var $win = $(window);
	
	var createModal = function() {

		var template = '<div class="modal screen">';
			template +=		'<div class="modal-shell">';
			template += 		'<button class="close">';
			template += 			'<span></span>';
			template += 			'<span></span>';
			template += 		'</button>';
			template +=			'<div class="head">';
			template +=				'<h4>Hello my Title</h4>';
			template +=			'</div>';
			template +=			'<div class="content">';
			template +=				'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod'
            template +=       		'tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,'
            template +=        		'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo'
            template +=        		'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
            template +=        		'cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non'
            template +=        		'proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>';
			template += 		'</div>';
			template +=			'<div class="footer">';
			template += 			'<button class="btn_blue close"><span>Close</span></button>';
			template += 			'<button class="btn_green" ><span>OK</span></button>';
			template +=			'</div>;'
			template +=		'</div>';
			template +='</div>';

		var $template = $(template);

		return {
			$template: $template,
			open: function(){
				$("body").append(this.$template);

				var closeBtn = $template.find(".close");
				var self = this;

				closeBtn.on("click",function(){
					self.close();
				});

				$template.on("click",function(event) {
					if($(event.target).hasClass('screen')) {
						self.close();
					}
				});
			},
			close: function(){
				$template.remove();
			}
		}
		};

	$doc.ready(function() {

		var $btn_open = $("a");

		$btn_open.on("click",function(event){
			var modal = new createModal();
			event.preventDefault();
			modal.open();
		});
	});

})(document, window, jQuery);