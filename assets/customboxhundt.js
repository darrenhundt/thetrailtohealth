// JavaScript Document
console.log('hello from customboxhundt.js');


$(document).ready(function(){


	
	$('.category-cookbook').each(function(i){
		var imgURL = $(this).find('.popup-top img').first().attr('src');
		$(this).find('.popup-top').css('background-image','url("' + imgURL + '")');
		var newTriggerClass= 'modal-launcher-' + i;
		var newTargetClass = 'recipe-modal-' + i;
		$(this).find('.content-wrapper').addClass(newTriggerClass);
		$(this).find('.popup-content').addClass(newTargetClass);

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
	
  $(document).on('click', '.modal-launcher-0', function(e) {
		e.preventDefault();
		//alert('1');
    new Custombox.modal({
      content: {
        target: '.recipe-modal-0'
      },
      overlay: {
        active: true,
				opacity: 0.65
      }
    }).open();
  });
	
	
});


