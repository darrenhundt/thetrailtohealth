// JavaScript Document
$(document).ready(function(){
	
	var allTitles = [];
	var firstRecipeUrl = "/recipes?format=json";
	var currentRecipeUrl = firstRecipeUrl;
	var fetchMore = true;
	
	fetchUrlData(currentRecipeUrl);
	
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	if (fetchMore) {
		fetchUrlData(currentRecipeUrl);
	}
	
	var myContent = '<div class="recipes-wrapper">';
	
	allTitles.forEach((recipe, index) => {
		var tagClasses = " ";
		if ( Array.isArray(recipe.tags) && recipe.tags.length ) {
			recipe.tags.forEach((tag,index) => {
				tagClasses += " " + tag;
			});
		}
		
		
		myContent += '<h2 class="' + tagClasses + '">' + recipe.title + '</h2>';
	});
	
	myContent += '</div>';

	$('#contentContainer').html(myContent);
	
	function fetchUrlData(theUrl) {
		$.ajax({
			url: theUrl,
			dataType: 'json',
			async: false,
			success: function(data) {
				$.each( data.items, function( key, val ) {
					var obj = {};
					obj["assetUrl"] = val.assetUrl;
					obj["body"] = val.body;
					obj["categories"] = val.categories;
					obj["customContent"] = val.customContent;
					obj["excerpt"] = val.excerpt;
					obj["fullUrl"] = val.fullUrl;
					obj["tags"] = val.tags;
					obj["title"] = val.title;
					obj["mediaFocalPoint"] = val.mediaFocalPoint;
					allTitles.push(obj);
				});
				fetchMore = data.pagination.nextPage;
				currentRecipeUrl = data.pagination.nextPageUrl + "&format=json";
			}
		});
	}
	
});