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
			currentRecipeUrl = data.pagination.nextPageUrl + "&format=json";
		}
	});
	
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
		}
	});
	
	/*
	$.getJSON( firstRecipeUrl, function( data ) {
		if (data.pagination.nextPage) {
			console.log(data.pagination.nextPageUrl);
		}
		$.each( data.items, function( key, val ) {
			console.log(val.addedOn);
		});
	});
	*/
	
	
});