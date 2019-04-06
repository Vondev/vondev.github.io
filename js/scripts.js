/* My Scripts */




// Smooth scrolling for anchor links

$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

	    // Make sure this.hash has a value before overriding default behavior
	    if (this.hash !== "") {
	      // Prevent default anchor click behavior
	      event.preventDefault();

	      // Store hash
	      var hash = this.hash;

	      // Using jQuery's animate() method to add smooth page scroll
	      // The optional number specifies the number of milliseconds it takes to scroll to the specified area
	      $('html, body').animate({
	      	scrollTop: $(hash).offset().top
	      }, 350, function(){
	        // Add hash (#) to URL when done scrolling (default click behavior)
	        window.location.hash = hash;
	    });
	    } // End if
	});
});





// Minimize navbar and add back to top button, when not at top of page

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$(".navigation").css("height", "50px");
		$(".nav-phantom").css("height", "50px");
		$(".nav-link").css("padding-top", "10px");
		$(".nav-link").css("padding-bottom", "8px");
		$(".nav-logo").css("width","24px");
		$(".nav-logo").css("height","24px");
	}
	else {
		$(".navigation").css("height", "100px");
		$(".nav-phantom").css("height", "100px");
		$(".nav-link").css("padding-top", "35px");
		$(".nav-link").css("padding-bottom", "33px");
		$(".nav-logo").css("width","40px");
		$(".nav-logo").css("height","40px");
	};

	if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
		$(".navigation").css("background-color", "rgba(40,40,50,0.9)");
	}
	else {
		$(".navigation").css("background-color", "rgba(40,40,50,1)");
	};



	if (document.getElementById("back-to-top")) {
		var backToTopButton = $("#back-to-top");
		var showButtonThreshold = $("#table-of-contents-top").position().top + 100;
		// console.log(showButtonThreshold);

		if (document.body.scrollTop > showButtonThreshold || document.documentElement.scrollTop > showButtonThreshold) {
			backToTopButton.css("bottom", "20px");
			backToTopButton.css("visibility", "visible");
			backToTopButton.css("opacity", "1");
		}
		else {
			backToTopButton.css("bottom", "0px");
			backToTopButton.css("visibility", "hidden");
			backToTopButton.css("opacity", "0");
		};
	};
}




