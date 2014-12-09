$(document).ready(function(){
	var onMouseIn = function(){
		//alert("Hello");
		$(this).children().stop(true, true);
		$(".imgBackground").fadeOut(300, function(){
			$(".discover").animate({left: "0px"},100);
		});
	};

	var onMouseOut = function(){
		$(this).children().stop(true, true);
		$(".discover").animate({left: "-100%"},300, function(){
			$(".imgBackground").fadeIn(100);
		});
	};

	$(".bigBox").hover(onMouseIn, onMouseOut);
});