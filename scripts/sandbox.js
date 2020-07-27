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
	console.log(allTitles);
	

	
	function fetchUrlData(theUrl) {
		console.log(theUrl);
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