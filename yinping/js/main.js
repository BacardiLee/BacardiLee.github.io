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
	$('.sys').mouseover(function(){
		$('.QRcode').show();
	}).mouseout(function(){
		$('.QRcode').hide();
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
	
	/*轮播图开始*/
	
	var banner = $('.banner');
	var bannerList = $('.bannerList');
	var siteWidth = $('.siteWidth');
	var banLis = $('.bannerList>li');
	var bannerNav = $('.bannerNav');
	var navLis = $('.bannerNav>li');
	var timer = null;
	var num = 0;
	var arr = ['#b316e6','#9d43fc','#f83259','#ffa258','#01b6c9','#000000'];
	banLis[0].style.background = arr[0];
	
	banner.on('mouseover',function(){
		clearInterval(timer);
	})
	banner.on('mouseout',function(){
		timer = setInterval(play,2000)
	})
	
	timer = setInterval(play,2000)
	
	function play(){
		num++;
		if(num == banLis.length){
			num = 0;
		}		
		playPic();
	}
	
	function playPic(){
		for(var i=0;i<siteWidth.length;i++){
			banLis[i].style.opacity= '0';
			navLis[i].className = '';
		}
		banLis[num].style.opacity= '1';
		banLis[num].style.background = arr[num];
		navLis[num].className = 'banCor';
	}
	
	navLis.on('click',function(){
		num = $(this).index();
		playPic();
	})
	
	/*轮播图结束*/
	
	
	/*猜你喜欢开始*/
	var youLike = document.getElementsByClassName('youlike')[0];
	var uLike = oData.ulike;
	var oUl = document.getElementsByClassName('changelist')[0];
	var changed = document.getElementsByClassName('changed')[0];
	var oNum = 0;
	
	createLi(0);
	function createLi(index){
		oUl.innerHTML = '';
		for(var i=index;i<index+5;i++){
			oUl.innerHTML += '<li>'+
				'<div class="likebox go-pic">'+
					'<div>'+
						'<a href="'+uLike[i].href+'" target="_blank">'+
							'<img src='+uLike[i].prosrc+' class="move-pic"/>'+
							'<p>'+uLike[i].oP+'</p>'+
						'</a>'+
					'</div>'+
					'<span>&yen;<strong>'+uLike[i].price+'</strong></span>'+
				'</div>	'+						
			'</li>'
		}
	}
	
	changed.onclick = function(){
		oNum++;
		if(oNum%2==1){
			createLi(5);
		}else if(oNum%2==0){
			createLi(0);
		}
	}
	/*猜你喜欢结束*/
	/*各楼层信息开始*/
	var arr1 = ['first','second','three','four','five','six'];
	var arr2 = ['one','two','three','four','five','six'];
//	var firstF = document.getElementsByClassName('firstF');
	var firstF = $('.firstF');
	for(var i=0;i<firstF.length;i++){
		var info = floor[arr1[i]];
		firstF.eq(i).html('');
		var html = `
		<div class="fHeading">
			<h2 class="h1"><i class="icon01">${info.fName}</i><strong>${info.title}</strong></h2>
			<div class="more">`;
			for(var j=0;j<info.nav.length;j++){
				html+=`<a href="${info.href[j]}" target="_blank" title="${info.nav[j]}">${info.nav[j]}</a><i class="pipe">/</i>`;
			}
				
			html+=`</div>
		</div>
		<div class="firstCon clearfix">
			<div class="firstLeft">
				<a href="${info.bigH}" target="_blank"><img src="${info.bigPic}"/></a>				
			</div>
			<div class="firstRight clearfix">
				<div class="Rlist1 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].one[0]}</p>
							<p class="f-18" title="${info.content[0].one[1]}">${info.content[0].one[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].one[2]}</strong></p>
						</div>
						<img src="${info.content[0].one[3]}" class="item-pic move-pic"/>
					</a>
				</div>
				<div class="Rlist2 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].two[0]}</p>
							<p class="f-16" title="${info.content[0].two[1]}">${info.content[0].two[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].two[2]}</strong></p>
						</div>
						<img src="${info.content[0].two[3]}" class="item-pic move-pic"/>
					</a>
				</div>
				<div class="Rlist3 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].three[0]}</p>
							<p class="f-16" title="${info.content[0].three[1]}">${info.content[0].three[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].three[2]}</strong></p>
						</div>
						<img src="${info.content[0].three[3]}" class="item-pic move-pic"/>
					</a>
				</div>
				<div class="Rlist4 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].four[0]}</p>
							<p class="f-18" title="${info.content[0].four[1]}">${info.content[0].four[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].four[2]}</strong></p>
						</div>
						<img src="${info.content[0].four[3]}" class="item-pic move-pic"/>
					</a>
				</div>
				<div class="Rlist5 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].five[0]}</p>
							<p class="f-16" title="${info.content[0].five[1]}">${info.content[0].five[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].five[2]}</strong></p>
						</div>
						<img src="${info.content[0].five[3]}" class="item-pic move-pic"/>
					</a>
				</div>
				<div class="Rlist6 go-pic">
					<a href="javascript:;">
						<div class="sellinfo">
							<p class="c-999">${info.content[0].six[0]}</p>
							<p class="f-16" title="${info.content[0].six[1]}">${info.content[0].six[1]}</p>
							<p class="item-price">&yen;<strong>${info.content[0].six[2]}</strong></p>
						</div>
						<img src="${info.content[0].six[3]}" class="item-pic move-pic"/>
					</a>
				</div>
			</div>
		</div>
		<div class="brand1">
			<ul>`;
			for(var k=0;k<info.brand[0].bSrc.length;k++){
		html+=`<li><a href="javascript:;" title="${info.brand[0].title[k]}"><img src="${info.brand[0].bSrc[k]}"/></a></li>`;		
			}
		html+=`</ul></div>`;	
		
		firstF.eq(i).append(html);
	}

	
	/*各楼层信息结束*/
	
	
	/*侧边导航栏开始*/
	var sideLi = $("#sNav").find('.side2');
	sideLi.on('click',function(){
//		$(this).addClass('sideActive').siblings().removeClass('sideActive')
		$("body").animate({			
//			+$(this).index()*30
			scrollTop : $('.firstF').height()*$(this).index()+1170
		},500)
	})
	
	$(window).scroll(function(){
		var body = $('body');
		var top = $(document).scrollTop();
		var sideNav = $('.sideNav');	
		var side = $('.side1');
		var sA = $('#sNav').find('.sA');
		var topFixdiv = $('.topFixdiv');
//		if(body.scrollTop()>=500){
//			sideNav.css({
//				opacity : 1,
//			})
//		}else{
//			sideNav.css({
//				opacity : 0,
//			})
//		}
		if(body.scrollTop()>=500){
			sideNav.show()
		}else{
			sideNav.hide()
		}
		
		if(body.scrollTop()>=780){
			topFixdiv.slideDown()
		}
		
		if(body.scrollTop()<780){
			topFixdiv.slideUp()
		}
		side.each(function(i){
       		var m = $(this);
       		if (top > m.offset().top - 300) {
				$('.side2').eq(i).addClass('sideActive').siblings().removeClass('sideActive');
            } else {
                return false;
            }
       })
       
        
       if(top<=1400){
       	 $('.side2').eq(0).removeClass('sideActive');
       }
//     console.log(top)
	})

	
	/*侧边导航栏结束*/
	
	var inp = $('#inp');
	inp.on('focus',function(){
		$(this).attr('placeholder','')
	})
	inp.on('blur',function(){
		$(this).attr('placeholder','网络K歌爆款套装享优惠')
	})
	
	
	
	/*返回顶部*/
	var returnTop = $('.return_top');
	var getTop = $('.getTop');
	 returnTop.click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    getTop.click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
    
}
