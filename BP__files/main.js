$(window).load(function(){
	// mv
		var mv = $(".mv").bxSlider({
			auto : true,
			controls : false,
			pause : 5000,
			onSlideAfter : function(){
				mv.startAuto();	
			}
		});
	// mv
});