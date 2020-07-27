// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	var offsetDynamic;
	
	$.getJSON( "/recipes?format=json", function( data ) {
		if (data.pagination.nextPage) {
				console.log(data.pagination.nextPageUrl);
				}
		console.log(data.pagination);
		$.each( data.items, function( key, val ) {
			console.log(val.addedOn);
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
	
	//var newUrl = "/recipes?format=json&offset=" + offsetDynamic;
	
	//console.log(newUrl);
	/*
	$.getJSON( newUrl, function( data ) {
		$.each( data.items, function( key, val ) {
			console.log(val.addedOn);
		});
	});
	*/
});