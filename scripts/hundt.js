// JavaScript Document
$(document).ready(function(){
	console.log('hello from hundt.js');
	/* Homepage move gallery to header */
	
	if (location.href.indexOf("#") != -1 && location.href.indexOf("recipes") != -1 ) {
    var recipeHandle = window.location.hash.substr(1);
		console.log(recipeHandle);
		var linkedRecipe = $('[data-article-handle="' + recipeHandle + '"]');
	}
	
	
	$('#collection-5692ee3f1115e0dc633ba4ad #banner-area-wrapper').hide();
	$('#collection-5692ee3f1115e0dc633ba4ad .main-content .sqs-grid-12 .sqs-block-gallery').first().addClass('home-hero-slideshow').insertBefore('#banner-area-wrapper');
	
	$('#collection-5c3b89a84fa51afb62cfa0e3 #banner-area-wrapper').hide();
  $('#collection-5c3b89a84fa51afb62cfa0e3 .main-content .sqs-grid-12 .sqs-block-gallery').first().insertBefore('#banner-area-wrapper');
  $('#collection-5c3b89a84fa51afb62cfa0e3 .main-content .sqs-grid-12 .sqs-block-gallery').first().addClass('subnav-gallery').insertBefore('#banner-area-wrapper');
	$('.subnav-gallery .sqs-gallery-design-grid-slide').each(function(i){
		var titleBlock = $(this).find($('.image-slide-title')).first();
		var subTitleBlock = '<p class="slide-subtitle"></p>';
		$(this).addClass('subnav-gallery-slide subnav-gallery-slide-' + i);
		$(this).append('<div class="slide-overlay overlay-half slide-overlay-' + i + '"></div>');
		$(this).append('<a class="slide-overlay overlay-full slide-overlay-' + i + '"></a>');
		$(this).append('<div class="slide-overlay overlay-title-holder"></div>');
		titleBlock.appendTo($(this).find('.overlay-title-holder').first());
		$(this).find('.overlay-title-holder').first().append(subTitleBlock);
	});
	$('.slide-subtitle').each(function(i){
		switch(i) {
			case 0:
				$(this).html('Lyme disease, Autoimmune, Stem Cells & Weight Loss');
				break;
			case 1:
				$(this).html('Delicious Gluten-free, Dairy-Free & Paleo');
				break;
			case 2:
				$(this).html('Over 28-days of meals, perfect compliment to the whole 30 diet');
				break;
			case 3:
				$(this).html('Read my story about how I was able to finally win my battle against lyme');
				break;
			default:
				break;
		}	
	});
	$('.slide-overlay-0').attr('href','/coaching');
	$('.slide-overlay-1').attr('href','/recipes');
	$('.slide-overlay-2').attr('href','/shop');
	$('.slide-overlay-3').attr('href','/myjourney');
	
	$('.summary-v2-block .summary-thumbnail-outer-container > .summary-thumbnail-container').each(function(){
		$(this).attr('target','_blank');
	});
	
	
	$('#collection-5bd9dacf575d1f8cef7be31d .image-slide-title, #collection-5c6211cc7817f7af6e7d62c3 .image-slide-title').each(function(){
		$(this).addClass('press-slide-title');
		$(this).html(function(index,html){
			return html.replace('**br**','<br/>');
		});
	});
	
	/* All Press */
	$('#collection-5ea79fd74959967123a5e4d8 .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
		var parentItemType = $(this).closest('.summary-item').attr('data-type');
		console.log(parentItemType);
		if (parentItemType == 'video') {
			$(this).addClass('video-slide-title');
		}
	});
	
	/* TV  Press */
	$('#collection-5ea7a13afe781a27da3db550 .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
	});
	
	/* Podcast & Radio  Press */
	$('#collection-5ea7a176c7557d34639c056e .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
	});
	
	/* Speaking Engagements & Events  Press */
	$('#collection-5ea7a1ab66448b66c7270b4a .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
	});
	
	/* Publications  Press */
	$('#collection-5ea7a1de86dbba7a8f47b826 .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
	});
	
	
	$('#collection-5e8fac64d61b45104195397f .summary-title-link').each(function(){
		$(this).addClass('press-slide-title');
		var existingHtml = $(this).html();
		//var processedHtml = existingHtml.replace('**br**','<br/>');
		var processedHtml = existingHtml.split('**br**').join('<br/>');
		$(this).html(processedHtml);
	});
	
	$('.video-slide-title').on('click',function(e){
		e.preventDefault();
		var parentItem = $(this).closest('.summary-item');
		var icon = parentItem.find('.sqs-video-icon');
		icon.addClass('found-play-icon');
		icon.click();
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
	
	$('#collection-5c3b89a84fa51afb62cfa0e3 #page-header .sqs-block-gallery:nth-child(2) .slide:first-child').attr('id','eventbrite-widget-modal-trigger-62798603313');
	$('#collection-5c3b89a84fa51afb62cfa0e3 #page-header .sqs-block-gallery:nth-child(2) .slide:first-child').addClass('first-home-slide');
	$('.first-home-slide .meta-description a').attr('id','eventbrite-widget-modal-trigger-62798603313');
	$('.first-home-slide .meta-description a').attr('href','#');
	
	$('#main-navigation > ul > li > a').each(function(){
		var linkContent = $(this).html();
		//console.log(linkContent);
		if (linkContent == 'Blog') {
			$(this).attr('href','/blog/');
			$(this).attr('onclick','');
		}
		if (linkContent == 'Travel') {
			$(this).attr('href','/travel/');
			$(this).attr('onclick','');
		}
		if (linkContent == 'Recipes') {
			$(this).attr('href','/recipes/');
			$(this).attr('onclick','');
		}
		if (linkContent == 'Shop') {
			$(this).attr('href','/shop-page/');
			$(this).attr('onclick','');
		}
		if (linkContent == 'Press') {
			$(this).attr('href','/press/');
			$(this).attr('onclick','');
		}
	});
	
	if ($('#collection-5e8fac64d61b45104195397f').length) {
		console.log('filtered press page');
		$('#page-body-header .sqs-block-content h2').html('');
		$('.main-content .html-block').each(function(){
			var titleText = $(this).find('h1');
			var nextEl = $(this).next();
			var nextNextEl = nextEl.next();
			var thisEl = $(this);
			var summaryJsonString = nextEl.attr('data-block-json');
			var summaryJson = jQuery.parseJSON(summaryJsonString);
			
			var categoryName = summaryJson.filter.category;
			console.log(categoryName);
			if (categoryName) {
				var categoryHandle = categoryName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '').replace(/^-/, '');
			} else {
				var categoryHandle = 'all';
				categoryName = "All";
			}
			console.log(categoryHandle);
			thisEl.add(nextEl).add(nextNextEl).wrapAll('<div id="' + categoryHandle + '" class="category-wrapper" />');
			var filterString = '<a href="#' + categoryHandle + '" class="press-filter-link">' + categoryName + '</a> | ';
			$('#page-body-header .sqs-block-content h2').append(filterString);
		});
		var allFiltersString = $('#page-body-header .sqs-block-content h2').html();
		allFiltersString = allFiltersString.substring(0, allFiltersString.length - 2);
		$('#page-body-header .sqs-block-content h2').html(allFiltersString);
		
		$('.press-filter-link').on('click',function(e){
			e.preventDefault();
			$('.category-wrapper').hide();
			var targetId = $(this).attr('href');
			console.log(targetId);
			var targetSection = $(targetId);
			targetSection.fadeIn();
			var targetWidth = targetSection.width() - 1;
			console.log(targetWidth);
			targetSection.width(targetWidth);
		});
		
	}
	
	if ($('#collection-5e84a602cb44b3644a90a8a1').length) {
		var contentHeader = $('#page-body-header');
		var filterContainer = contentHeader.find('.html-block h3');
		filterContainer.html('<a href="#all" class="brand-filter-link brand-filter-link-all">All</a>&nbsp;|&nbsp;');
		$('.main-content h2').each(function(){
			var tagLabel = $(this).html().toLowerCase().replace('la f','LA F');
			var titleHtmlBlock = $(this).closest('.html-block');
			var tagLine = titleHtmlBlock.prev('.horizontalrule-block');
			var tagSummary = titleHtmlBlock.next('.summary-v2-block');
			var thisSection = tagSummary.prevAll('.html-block').andSelf().wrapAll('<div class="tag-section-wrapper"/>');
			var newWrapper = tagSummary.parent();
			tagLine.prependTo(newWrapper);
			var tagJson = tagSummary.attr('data-block-json');
			var tagJsonParsed = $.parseJSON(tagJson);
			var tagString = tagJsonParsed['filter']['tag'];
			var tagHandle = tagString.toLowerCase().replace(/ /g,'-');
			var tagId = "#" + tagHandle;
			var tagLink = '<a href="' + tagId + '" class="brand-filter-link">' + tagLabel + '</a>';
			//console.log(tagHandle);
			newWrapper.attr('id',tagHandle);
			filterContainer.append(tagLink + ' | ');
		});
		$('.brand-filter-link').on('click',function(e){
			e.preventDefault();
			if ( $(this).hasClass('brand-filter-link-all') ) {
				$('.tag-section-wrapper').fadeIn();
			} else {
				$('.tag-section-wrapper').hide();
				var targetId = $(this).attr('href');
				console.log(targetId);
				var targetSection = $(targetId);
				targetSection.fadeIn();
			}
		});
	}
	$('.folder-collection .subnav a').each(function(){
		var theText = $(this).html();
		if ( theText.includes('All ') ) {
			$(this).addClass('all-posts-link');
		}
	});
});







