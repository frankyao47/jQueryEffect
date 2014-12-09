$(document).ready(function(){
	var picNum = 4;

	var onMouseIn = function(){
		var index = parseInt($(this).attr("data-index")); 
		$(".as-panel").each(function(){
			var curIndex = parseInt($(this).attr("data-index"));
			var leftOrIn = 64 * curIndex;
			var right = 960 - (picNum - curIndex) * 64;

			//alert("leftOrIn");
			if(curIndex <= index)
				$(this).animate({left:leftOrIn+"px"}, 300);
			else
				$(this).animate({left:right+"px"}, 300);

		});

		//alert(index) //查看类型:typeof()
	};

	var onMouseOut = function(){
		$(".as-panel").each(function(){
			var curIndex = parseInt($(this).attr("data-index"));
			var left = 240*curIndex;
			$(this).animate({left:left+"px"}, 300);

		});
	};

	$(".as-panel").hover(onMouseIn, onMouseOut);
});