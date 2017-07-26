//导航栏悬浮事件
window.onload = function(){
	
	var my_qlinks = $('.my_qlinks');
	
	$('#quick-links li').eq(0).mouseover(function(){
		$('.ibar_login_box').show();
	}).mouseout(function(){
		$('.ibar_login_box').hide();
	})
	$('.kf2').mouseover(function(){
		$('.sevice2').show();
	}).mouseout(function(){
		$('.sevice2').hide();
	})
	$('.Zc').mouseover(function(){
		$('.myzc').show()
		$('.myzc').stop(true).animate({
			left : -90
		},1000)
	}).mouseout(function(){
		$('.myzc').hide()
		$('.myzc').stop(true).animate({
			left : -122
		},1000)
	})
	$('.Ts').mouseover(function(){
		$('.complaint').show()
		$('.complaint').stop(true).animate({
			left : -90
		},1000)
	}).mouseout(function(){
		$('.complaint').hide()
		$('.complaint').stop(true).animate({
			left : -122
		},1000)
	})
	$('.Db').mouseover(function(){
		$('.fhdb').show()
		$('.fhdb').stop(true).animate({
			left : -90
		},1000)
	}).mouseout(function(){
		$('.fhdb').hide()
		$('.fhdb').stop(true).animate({
			left : -122
		},1000)
	})
	$('#myYp').mouseover(function(){
		$('.topShow').show()
	}).mouseout(function(){
		$('.topShow').hide()
	})
	
	
	$("#sevice").mousemove(function(){
		$('.sevice').show()
		$('.cusSevice p:nth-of-type(2)').css('color','#000')
		$('.tel p:nth-of-type(2)').css('color','#000')
	}).mouseout(function(){
		$('.sevice').hide();
	})
	
	
	//二级导航
	$('.bigList>li').mouseover(function(){
		$(this).css('background','#fff').find('.tx a').css('color','#7b7b7b')
		$(this).find('.smallList').show()
	}).mouseout(function(){
		$(this).css('background','#2D2D2D').find('.tx a').css('color','#fff')
		$(this).find('.smallList').hide()
	})
	
	
	//活动内容tab切换
	var hd = document.getElementsByClassName('hd')[0];
	var bd = document.getElementsByClassName('bd')[0];
	var hdlis = hd.getElementsByTagName('li');
	var bdlis = bd.getElementsByTagName('ul');
	
	for(var i=0;i<hdlis.length;i++){
		hdlis[i].index = i;
		hdlis[i].onmouseover = function(){
			for(var j=0;j<bdlis.length;j++){
				bdlis[j].style.display = 'none';
				hdlis[j].className = '';
			}
			bdlis[this.index].style.display = 'block';			
			hdlis[this.index].className = 'on';
		}
	}
	
	//鼠标悬浮图片，图片移动
//	var goPic = $('.go-pic');
//	var movePic = $('.move-pic');
//	
//	goPic.on('mouseover',function(){
//		$(this).find(movePic).animate({
//			'transition':'1s',
//			'webkitTransition':'1s',
//			'transform':'translateX(-5px)',
//			'webkitTransform':'translateX(-5px)'
//		})
//	})
}
