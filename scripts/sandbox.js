// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	var offsetDynamic;
	
	$.getJSON( "/recipes?format=json", function( data ) {
		$.each( data.items, function( key, val ) {
			console.log(val.addedOn)
			offsetDynamic = val.addedOn;
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
	
	var newUrl = "/recipes?format=json&offset=" + offsetDynamic;
	
	$.getJSON( newUrl, function( data ) {
		$.each( data.items, function( key, val ) {
			console.log(val.addedOn)
			offsetDynamic = val.addedOn;
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
	
});