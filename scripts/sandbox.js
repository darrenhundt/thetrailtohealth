// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	
	$.getJSON( "/recipes?format=json", function( data ) {
		$.each( data.items, function( key, val ) {
			console.log(key)
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
});