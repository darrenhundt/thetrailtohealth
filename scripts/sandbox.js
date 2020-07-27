// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	
	$.getJSON( "/recipes?format=json", function( data ) {
		$.each( data.items, function( key, val ) {
			console.log(val)
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
});