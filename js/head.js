

$(function(){				
		// 二级栏目显示隐藏
	if(document.body.clientWidth<=1200){
		$(".head-bottom .nav .li1").click(function(){
			if($(this).find(".ul2").css("display")=="none"){
				$(".head-bottom .nav .li1").find(".ul2").slideUp();
				$(this).find(".ul2").slideDown();
				event.stopPropagation();
				
			}else{
				$(this).find(".ul2").slideUp();
				event.stopPropagation();
			}
		});
	}
	$("#menu").click(function(){
		if($(".head-bottom").css("display")=="none"){
			$(".head-bottom").slideDown();
		}else{
			$(".head-bottom").slideUp();
		}
	});
});