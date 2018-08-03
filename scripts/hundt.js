// JavaScript Document
$(document).ready(function(){
	$( "#toggleCommentsLink" ).click(function() {
	  $( "#comments-section" ).slideToggle( "slow", function() {
		// Animation complete.
	  });
	});
});