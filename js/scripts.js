$(document).ready(function(){

	// smooth auto-scrolling
	var $root = $('html, body');
	$('a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 250, function () {
	        window.location.hash = href;
	    });
	    return false;
	});

	// royal slider
    $(".royalSlider").royalSlider({
        // options go here
        // as an example, enable keyboard arrows nav
        keyboardNavEnabled: true
    });  
});