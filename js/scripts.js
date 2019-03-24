/* My Scripts */

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
}

