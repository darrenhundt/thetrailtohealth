// JavaScript Document
console.log('hello from customboxhundt.js');


$(document).ready(function(){

	
	var categoryCount = 0;
	
	$('.category-cookbook').each(function(i){
		var currentRecipe = $(this);
		var newID = 'shopify-modal-launcher-' + i;
		currentRecipe.find('.modal-button').attr('id',newID);
		var imgURL = $(this).find('.popup-top img').first().attr('src');
		$(this).find('.popup-top').css('background-image','url("' + imgURL + '")');
		var newTriggerClass= 'modal-launcher-' + i;
		var newTargetClass = 'recipe-modal-' + i;
		var newTrigger = $(this).find('.content-wrapper').first();
		var newTarget = $(this).find('.popup-content').first();
		newTrigger.addClass(newTriggerClass);
		newTarget.addClass(newTargetClass);
		
		categoryCount++;
	});
	




	for(let i = 0; i < categoryCount; i++) {
		$('.modal-launcher-' + i).click( function(e){
			e.preventDefault();
			new Custombox.modal({
				content: {
					target: '.recipe-modal-' + i
				},
				overlay: {
					active: true,
					opacity: 0.65
				}
			}).open();
		});
		
	}	
	
	
	
});


