// JavaScript Document
$(document).ready(function(){
	if ($('body').hasClass('collection-type-blog')) {
		$( "#toggleCommentsLink, .article-meta .comments a" ).click(function() {
		  $( "#comments-section" ).slideToggle( "slow", function() {
			if ($("#toggleCommentsLink").html() == 'Open Comments') {
				$("#toggleCommentsLink").html('Close Comments');
			}
			else {
				$("#toggleCommentsLink").html('Open Comments');
			}
		  });
		});
		var socialWrapper = $('.ss-social-list-wrapper').first();
		var mainImage = $('.entry-content .image-block').first();
		mainImage.addClass('main-image-block');
		socialWrapper.addClass('my-socialWrapper-block');
		socialWrapper.clone().insertAfter(mainImage).show();
	}
	$('#sqs-slash-page-header').addClass('found-popup-header');
	
	
	$('.amazon-block .image-container').matchHeight();
	$('.amazon-block .productDetails .product-title').each(function(){
		var productTitle = $(this).html();
		var shortTitle = $.trim(productTitle).substring(0, 40).split(" ").slice(0, -1).join(" ") + "...";
		$(this).html(shortTitle);
	});

	$('.amazon-block .productDetails .product-title').matchHeight();
	
	
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
				Custombox.open({
						target: '.recipe-modal-0',
						effect: 'fadein',
					overlay:false
				});
				e.preventDefault();
		});
  });
});







