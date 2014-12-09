$(document).ready(function(){
	var point = 0;
	var pictureNum = 5;
	var onMouseIn = function(){	//鼠标停留
			$(".arrow").css({"display":"inline"});
		};
	var onMouseOut = function(){ //鼠标离开
			$(".arrow").css({"display":"none"});
		};

	var onLeftArrowClick = function(){
		//$("#showbox").append($(".smallbox").css("left"));
		//alert($(".smallbox").css("left"));
		if (point > 0){
			$(".smallbox").animate({left:"+=500px"}, 300);
			point--;
			$("#showbox").children().each(function(){
				$(this).css({"opacity":"0.3"});
			});
			$("#showbox").children().eq(point).css({"opacity":"1"}); //强调
		}
	};

	var onRightArrowClick = function(){
		//$("#showbox").append($(".smallbox").css("left"));
		if (point < pictureNum - 1){ 
			$(".smallbox").animate({left:"-=500px"}, 300);
			point++;
			$("#showbox").children().each(function(){
				$(this).css({"opacity":"0.3"});
			});
			$("#showbox").children().eq(point).css({"opacity":"1"}); //强调
		}
	};

	$(".upperbox").hover(onMouseIn,	onMouseOut);

	$("#leftarrow").click(onLeftArrowClick);

	$("#rightarrow").click(onRightArrowClick);

});