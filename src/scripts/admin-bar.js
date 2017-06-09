jQuery(document).ready(function($){

	$("#wp-admin-bar-custom-font").click(function(){
		$('body').addClass('cf-selector');
	});
	$('body').on('click','.cf-parent-element',function() {
		var index = $(this).data('index');
		$(this).remove();
		$('.cf-separator[data-index="'+index).remove();
	});
	$('body').on('click','.cf-save-selector',function() {
		var selector = $('.cf-selected-single-element').text();
		$('.cf-seleceted-elements-holder').val(selector);
		$('<li>'+selector+'</li>').appendTo('.cf-selected-elements-list');
		$('.cf-selected').remove();
	});
	$('html').on('click','.cf-selector *',function(e) {
		e.preventDefault();
		e.stopPropagation();
		if (!$(this).hasClass('cf-parent-element') && $(this).parents('.cf-selected').length < 1 && !$(this).hasClass('cf-selected-elements-container') && $(this).parents('.cf-selected-elements-container').length < 1) {
			var element = $(e.target);
			var parents = element.parents();
			var child = getElement(element);
			element.css('position','relative');
			$('.cf-selected').remove();
			parentElements = '';
			for (var i = parents.length - 1; i >= 0; i--) {
				var parentElement = getElement($(parents[i]));
				var parentElements = parentElements+'<span data-index="'+i+'" class="cf-parent-element">'+parentElement+'</span> <span data-index="'+i+'" class="cf-separator">></span> ';
			}
			$('<div class="cf-selected"><div class="cf-selected-single-element">'+parentElements+child+'</div><button class="cf-save-selector">Save selector</button></div>').appendTo(element);
			var height = $('.cf-selected').height();
			$('.cf-selected').css('bottom',-height);
		}
	});

	function getElement(element) {
		var tagName = element.prop("tagName");
		var id = element.attr('id');
		if (id !== undefined && id.length > 0) {
			var id = '#'+id;
		}
		else {
			id = '';
		}
		var classes = element.attr('class');
		if (classes !== undefined && classes.length > 0) {
			var classes = '.'+classes;
			var classes = classes.replace(/\ /g, '.');
		}
		else {
			var classes = '';
		}
		var element = tagName+classes+id;
		return element;
	}
});