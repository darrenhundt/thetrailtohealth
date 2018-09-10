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
	var productTitle = $('.amazon-block .productDetails .product-title').html();
	var shortTitle = $.trim(productTitle).substring(0, 30).split(" ").slice(0, -1).join(" ") + "...";
	$('.amazon-block .productDetails .product-title').html(shortTitle);
	$('.amazon-block .productDetails .product-title').matchHeight();
	
	
});