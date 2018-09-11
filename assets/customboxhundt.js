// JavaScript Document
console.log('hello from customboxhundt.js');


$(document).ready(function(){

	
	var categoryCount = 0;
	
	$('.category-cookbook').each(function(i){
		var currentRecipe = $(this);
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
	
//	$(function() {
//		$('.modal-launcher-0').on('click', function( e ) {
//				e.preventDefault();
//				Custombox.modal({
//						target: '.recipe-modal-0',
//						effect: 'fadein',
//					overlay:false
//				}).open();
//		});
//  });
	
//  $(document).on('click', '.modal-launcher-0', function(e) {
//		e.preventDefault();
//		//alert('1');
//    new Custombox.modal({
//      content: {
//        target: '.recipe-modal-0'
//      },
//      overlay: {
//        active: true,
//				opacity: 0.65
//      }
//    }).open();
//  });
	


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


