// JavaScript Document
$(document).ready(function(){
	
	var allTitles = [];
	var firstRecipeUrl = "/recipes?format=json";
	var currentRecipeUrl = firstRecipeUrl;
	var fetchMore = true;
	
	console.log(currentRecipeUrl);
	
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
					//console.log(val.title);
					allTitles.push(val);
				});
				fetchMore = data.pagination.nextPage;
				currentRecipeUrl = data.pagination.nextPageUrl + "&format=json";
			}
		});
	}
	
});