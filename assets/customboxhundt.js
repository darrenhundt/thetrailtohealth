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
	
	$(function() {
		$('.modal-launcher-0').on('click', function( e ) {
				e.preventDefault();
				Custombox.modal({
						target: '.recipe-modal-0',
						effect: 'fadein',
					overlay:false
				}).open();;
				e.preventDefault();
		});
  });
	
	
	
	
});


//  $(document).on('click', '#open-multiple', function() {
//    new Custombox.modal({
//      content: {
//        effect: effects[Math.floor(Math.random() * effects.length)],
//        target: '#demo-modal-multiple-1',
//        animateFrom: animate[Math.floor(Math.random() * animate.length)],
//        animateTo: animate[Math.floor(Math.random() * animate.length)],
//        positionX: positionX[Math.floor(Math.random() * positionX.length)],
//        positionY: positionY[Math.floor(Math.random() * positionY.length)],
//      },
//      overlay: {
//        active: Math.random() < 0.5
//      }
//    }).open();
//  });