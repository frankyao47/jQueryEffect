$(document).ready(function(){
	var onMouseIn = function(){	//鼠标停留
			$(".arrow").css({"display":"inline"});
		};
	var onMouseOut = function(){ //鼠标离开
			$(".arrow").css({"display":"none"});
		};

	var onLeftArrowClick = function(){
		//$(".showbox").append($(".smallbox").css("left"));
		//alert($(".smallbox").css("left"));
		if (!($(".smallbox").css("left") == "0px")){
			$("#leftarrow").unbind("click");
			$(".smallbox").animate({left:"+=500px"}, 500, 
			function(){$("#leftarrow").bind("click", onLeftArrowClick)});
		}
	};

	var onRightArrowClick = function(){
		//$(".showbox").append($(".smallbox").css("left"));
		if (!($(".smallbox").css("left") == "-2000px")){ //-2000px：视图片个数确定
			$("#rightarrow").unbind("click"); //避免在转换中继续点击
			$(".smallbox").animate({left:"-=500px"}, 500,
			function(){$("#rightarrow").bind("click", onRightArrowClick)});
		}
	};

	$(".upperbox").hover(onMouseIn,	onMouseOut);

	$("#leftarrow").click(onLeftArrowClick);

	$("#rightarrow").click(onRightArrowClick);

});