$(function(){
	/* 레이어팝업 */
	$('body').prepend('<iframe name="ajaxTarget" id="ajaxTarget" frameborder="0"></iframe><div id="blackWrap"></div><div id="layerPopupWrap"><div id="layerPopup"></div></div>');

	/* 레이어팝업 기본 설정 */
	$('#layerPopup, .sboard_layerPopup').draggable({
		//containment: 'parent',
		//handle:'.handle',
		cancel:'.dragCancel, input, select, textarea',
		cursor:'move'
	});
	$('#blackWrap').on('dblclick',function(){
		layerHide();
	});

	/* 레이어팝업 on/off */
	$(document).on('click','.a_layerPopup',function(){
		var src = $(this).attr('href'); //불러올 링크주소
		layerShow(src);
	}).on('click','.btn_popclose',function(){
		layerHide();
	});

	/* 이미지 프리로드 스왑 */
	/* 예: <img class="swap" src="기본이미지" src-on="스왑이미지" swap-on="on이벤트" swap-off="off이벤트"> */
	/* swap-on과 swap-off 생략시 mouseover/mouseout으로 동작함. */
	var preA = new Array();
	var preB = new Array();
	var i = 0;
	$('img.swap').each(function(){
		var srcA = $(this).attr('src');
		$(this).attr('src-off',srcA);
		var srcB = $(this).attr('src-on');
		var triA = $(this).attr('swap-on');
		var triB = $(this).attr('swap-off');
		if(!srcB) srcB = srcA; //src-on이 없을시
		if(!triA) triA = 'mouseover'; //swap-on이 없을시
		if(!triB) triB = 'mouseout'; //swap-off가 없을시
		preA[i] = new Image;
		preA[i].src = srcA;
		preB[i] = new Image;
		preB[i].src = srcB;
		$(this).on(triA,function(){
			this.src = $(this).attr('src-on');
		}).on(triB,function(){
			this.src = $(this).attr('src-off');
		});
		i++;
	});
});

/* 레이어팝업 함수 */
function layerShow(src){
	$('#layerPopup').load(src,function(){
		$('#blackWrap').css({
			'width':'100%',
			'height':'100%'
		}).show();
		var leftTo = $('body').width()/2 + $(window).scrollLeft() - $('#layerPopup').width()/2;
		var topTo = $(window).height()/2 + $(window).scrollTop() - $('#layerPopup').height()/2;
		$('#layerPopup').css({
			'left':leftTo+'px',
			'top':topTo+'px'
		});
		$('#layerPopup').slideDown();
	});
}
function layerHide(){
	$('#layerPopup').slideUp(function(){
		$('#layerPopup').html('');
	});
	$('#blackWrap').hide();
}
