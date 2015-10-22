//https://github.com/xuqingkai/jquery.lable.js
; (function ($) {
	$.fn.extend({
		label: function () {
			return $(this).each(function(){
				var $label = $(this);
				var className=$label.attr('data-label') || 'hover';
				$label.find(':radio').hide().click(function(){
					$label.addClass(className).siblings().removeClass(className);
				}).filter(':checked').click();
				$label.find(':checkbox').hide().click(function(){
					if($label.hasClass(className)){
						$label.removeClass(className);
					} else {
						$label.addClass(className);
					}
				}).filter(':checked').click();
				if(!$label.is('label')){
					$label.click(function(){
						$(this).find('input').first().click();
					});
				}
			});
		}
	});
})(window.jQuery);
