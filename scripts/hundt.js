// JavaScript Document
$(document).ready(function(){
	$( "#toggleCommentsLink" ).click(function() {
	  $( "#comments-section" ).slideToggle( "slow", function() {
		if ($("#toggleCommentsLink").html() == 'Open Comments') {
			$("#toggleCommentsLink").html('Close Comments');
		}
		else {
			$("#toggleCommentsLink").html('Open Comments');
		}
	  });
	});
});