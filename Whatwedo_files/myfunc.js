$(window).load(function(){

    // 캘린더 레이어 닫기
    $('div, p, table').click(function(){
        
        if($('.tooltip_box').length > 0){
            if($('.tooltip_box').css('display', 'block') && !$(this).parents('div').hasClass('tooltip_box')){
                $('.tooltip_box').remove();
            }
        }
    });

	// header depth
		var wH = $("#wrap").height();
		$(".m-depth01").css("height", wH);
		$(".m-right-bg").css("height", wH);

		$(".depth01 > li > a").mouseenter(function(){
			$(".depth01 > li > a").removeClass("on");
			$(this).addClass("on");
			$(".depth02").stop().slideUp();
			$(this).next(".depth02").stop().slideDown();
		});

		$(".depth01 > li").mouseleave(function(){
			$(this).find(">a").removeClass("on");
			$(this).find(">.depth02").stop().slideUp();
		});

		$(".m-head-con .left a").click(function(){
			$(".m-depth").stop().animate({
				"left" : 0
			},500);
		});

		$(".m-depth-close").click(function(){
			$(".m-depth").stop().animate({
				"left" : "-100%"
			},500);
		});

		$(".m-depth01 > li > a").click(function(){
			if ( $(this).hasClass("on") == false )
			{
				$(".m-depth01 > li .m-depth02").hide();
				$(this).next(".m-depth02").fadeIn();
				$(".m-depth01 > li > a").removeClass("on");
				$(this).addClass("on");
			} 
		});

		$(".video-click ul li a").click(function(){
			var idx = $(this).parent().index();

			$(".media-bg").fadeIn();
			$(".media").fadeIn();
			$(".media-box").hide();
			$(".media-box").eq(idx).fadeIn();
			$("html,body").css("overflow","hidden");
		});

		$(".media-bg").click(function(){
			var idx = $(this).parent().index();

			$(".media-bg").fadeOut();
			$(".media").fadeOut();
			$(".media-box").fadeOut();
			$("html,body").css("overflow","auto");
		});
		
	// header depth
});