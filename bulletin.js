$(document).ready(function(){
	var onMouseIn = function(){	//鼠标停留
			$('.arrow').css({"display":"inline"});
		};
	var onMouseOut = function(){ //鼠标离开
			$('.arrow').css({"display":"none"});
		};

	var onLeftArrowClick = function(){
		//$('.showbox').append($('.smallbox').css("left"));
		//alert($('.smallbox').css("left"));
		if (!($('.smallbox').css("left") == "0px")){
			$('.smallbox').animate({left:"+=500px"}, 500);
		}
	}

	var onRightArrowClick = function(){
		//$('.showbox').append($('.smallbox').css("left"));
		if (!($('.smallbox').css("left") == "-2000px")){
			$('.smallbox').animate({left:"-=500px"}, 500);
		}
	}

	$('.upperbox').hover(onMouseIn,	onMouseOut);

	$('#leftarrow').click(onLeftArrowClick);

	$('#rightarrow').click(onRightArrowClick);

});