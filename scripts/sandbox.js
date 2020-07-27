// JavaScript Document
$(document).ready(function(){
	console.log('hello from sandbox');
	$.ajax({
		method: "POST",
		url: "some.php",
		dataType: "json",
		data: {}
	}).done(json => console.log(json));
	
	$.getJSON( "/recipes?format=json", function( data ) {
		$.each( data, function( key, val ) {
			console.log(key)
			/* items.push( "<li id='" + key + "'>" + val + "</li>" ); */
		});
	});
});