$(document).ready(function(){
	var onMouseIn = function(){	//鼠标停留
			$(".arrow").css({"display":"inline"});
		};
	var onMouseOut = function(){ //鼠标离开
			$(".arrow").css({"display":"none"});
		};

	var onLeftArrowClick = function(){
		//$("#showbox").append($(".smallbox").css("left"));
		//alert($(".smallbox").css("left"));
		if (!($(".smallbox").css("left") == "0px")){
			$("#leftarrow").unbind("click");
			$(".smallbox").animate({left:"+=500px"}, 300, 
			function(){$("#leftarrow").bind("click", onLeftArrowClick)});

			$("#showbox").children().each(function(){//恢复到初始状态
				$(this).css({"opacity":"0.3"});
			});
			$("#showbox").children().eq(1).css({"opacity":"1"}); //强调
		}
	};

	var onRightArrowClick = function(){
		//$("#showbox").append($(".smallbox").css("left"));
		if (!($(".smallbox").css("left") == "-2000px")){ //-2000px：视图片个数确定
			$("#rightarrow").unbind("click"); //避免在转换中继续点击
			$(".smallbox").animate({left:"-=500px"}, 300,
			function(){$("#rightarrow").bind("click", onRightArrowClick)});

			$("#showbox").children().each(function(){
				$(this).css({"opacity":"0.3"});
			});

			//var str = $(".smallbox").css("left");
			//var count(str.substr(0, str.length - 2)));
			$("#showbox").children().eq(1).css({"opacity":"1"});
		}
	};

	$(".upperbox").hover(onMouseIn,	onMouseOut);

	$("#leftarrow").click(onLeftArrowClick);

	$("#rightarrow").click(onRightArrowClick);

});