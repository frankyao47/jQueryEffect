$(document).ready(function(){
	var onMouseIn = function(){
		//alert("Hello");
		$(this).children().stop(true, true);

		$(".imgBackground").fadeOut(300, function(){
			$(".discover").animate({left: "0px", opacity: "1"},100);
			$(".price").animate({width: "50px", height: "21px", opacity: "1"},100);
		});
	};

	var onMouseOut = function(){
		$(this).children().stop(true, true);

		$(".price").animate({width: "0px", height: "0px", opacity: "0"},100);
		$(".discover").animate({left: "-100%", opacity: "0"},300, function(){
			$(".imgBackground").fadeIn(100);
		});
	};

	$(".bigBox").hover(onMouseIn, onMouseOut);
});