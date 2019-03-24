/* My Scripts */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
		$(".navigation").css("height", "70px");
		$(".nav-phantom").css("height", "70px");
		$(".nav-link").css("padding-top", "20px");
		$(".nav-link").css("padding-bottom", "18px");
		$(".nav-logo").css("width","32px");
		$(".nav-logo").css("height","32px");
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
		// document.getElementById("navigation").style.height = "70px";
		$(".navigation").css("background-color", "rgba(40,40,50,0.9)");
	}
	else {
		$(".navigation").css("background-color", "rgba(40,40,50,1)");
	};
}