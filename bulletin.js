$(document).ready(function(){
	$('.upperbox').hover(
		function(){	//鼠标停留
			$('.arrow').css({"display":"inline"});},
		function(){ //鼠标离开
			$('.arrow').css({"display":"none"});}
	);

	$('#leftarrow').click(function(){
		//$('.showbox').append($('.smallbox').css("left"));
		//alert($('.smallbox').css("left"));
		if (!($('.smallbox').css("left") == "0px"))
			$('.smallbox').animate({left:"+=500px"}, 500);
	});

	$('#rightarrow').click(function(){
		//$('.showbox').append($('.smallbox').css("left"));
		if (!($('.smallbox').css("left") == "-2000px"))
			$('.smallbox').animate({left:"-=500px"}, 500);
	});

});