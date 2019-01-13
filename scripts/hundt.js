// JavaScript Document
$(document).ready(function(){
	
	$('#collection-5c3b89a84fa51afb62cfa0e3 #banner-area-wrapper').hide();
  $('#collection-5c3b89a84fa51afb62cfa0e3 .main-content .sqs-grid-12 .sqs-block-gallery').first().insertBefore('#banner-area-wrapper');
  $('#collection-5c3b89a84fa51afb62cfa0e3 .main-content .sqs-grid-12 .sqs-block-gallery').first().addClass('subnav-gallery').insertBefore('#banner-area-wrapper');
	$('.subnav-gallery .sqs-gallery-design-grid-slide').each(function(i){
		$(this).addClass('subnav-gallery-slide subnav-gallery-slide-' + i);
		$(this).append('<div class="slide-overlay overlay-half slide-overlay-' + i + ''"></div>');
		$(this).append('<div class="slide-overlay overlay-full slide-overlay-' + i + ''"></div>');
	});
	
	
	
	
	
	$('#collection-5bd9dacf575d1f8cef7be31d .image-slide-title').each(function(){
		$(this).addClass('press-slide-title');
		$(this).html(function(index,html){
			return html.replace('**br**','<br/>');
		});
	});
	
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
	
	$('a[href*="amazon"]').each(function() {
		$(this).addClass('amazon-link');
		$(this).attr('rel','nofollow');
	});

	setTimeout(
		function() 
		{
			$('.sqs-popup-overlay h1').addClass('popup-h1-found').prepend('<img class="popup-logo" src="https://static1.squarespace.com/static/5692edc9df40f361d6f8b0a4/t/569b179a76d99c4f39160575/1537736298122/?format=1500w"/>');
		}, 5000);	
	
});







