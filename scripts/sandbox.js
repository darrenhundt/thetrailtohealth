// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	
	var firstRecipeUrl = "/recipes?format=json";
	var currentRecipeUrl = firstRecipeUrl;
	var fetchMore = true;
	
	console.log(currentRecipeUrl);
	$.ajax({
		url: currentRecipeUrl,
		dataType: 'json',
		async: false,
		success: function(data) {
			//console.log(data.items);
			$.each( data.items, function( key, val ) {
				console.log(val.title);
				/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
			});
			fetchMore = data.pagination.nextPage;
			currentRecipeUrl = data.pagination.nextPageUrl + "&format=json";
		}
	});
	
	
	$.ajax({
		url: currentRecipeUrl,
		dataType: 'json',
		async: false,
		success: function(data) {
			//console.log(data.items);
			$.each( data.items, function( key, val ) {
				console.log(val.title);
				/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
			});
		}
	});
	
	
	
});