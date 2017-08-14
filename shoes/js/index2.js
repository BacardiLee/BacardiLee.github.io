//换肤
window.onload=function(){
	var oSkin = document.getElementsByClassName('skin')[0];
	var oLi = oSkin.getElementsByTagName('li');
	var oNav = document.getElementsByClassName('nav')[0];
	var li2 = document.getElementsByClassName('li2')[0];
	//给每个小方块添加点击事件
	
	for(var i=0;i<oLi.length;i++){
		oLi[i].style.backgroundPositionX = i*-20+'px';
	}
	oLi[0].style.backgroundPositionY = -15+'px';
//	oNav.style.backgroundColor="#4a4a4a";
//	
//	
//	for(var i=0;i<oLi.length;i++){
//		oLi[i].index=i;
//		oLi[i].onclick=function(){
//			for(var i=0;i<oLi.length;i++){
//				oLi[i].style.backgroundPositionY = 0+'px';
//			}
//			this.style.backgroundPositionY = -15+'px';
//			oNav.style.backgroundColor=this.title;
//		}
//	}
	//永久换肤
	if(localStorage.getItem("bgcolor")) {
		oNav.style.backgroundColor = localStorage.getItem("bgcolor");
		for(var i = 0; i < oLi.length; i++) {
			oLi[i].onclick = function() {
				this.style.backgroundPositionY = localStorage.getItem("bgbutton");
			}
		}
	} else {
		oNav.style.backgroundColor = "#4a4a4a";
	}

	for(var i = 0; i < oLi.length; i++) {
		oLi[i].onclick = function() {
			for(var i = 0; i < oLi.length; i++) {
				oLi[i].style.backgroundPositionY = 0 + 'px';
			}
			this.style.backgroundPositionY = -15 + 'px';
			oNav.style.backgroundColor = this.title;
			localStorage.setItem("bgcolor", this.title);
			localStorage.setItem("bgbutton", -15 + 'px');

		}
	}	
	//banner区域
	var banner = document.getElementsByClassName('banner')[0];
	var bannerPic = document.getElementsByClassName('banner-pic')[0];
	var bannerUl = bannerPic.getElementsByTagName('ul')[0];
	var bannerLi = bannerPic.getElementsByTagName('li');
	var banner_li = document.getElementsByClassName('banner-li')[0];
	var lis = banner_li.getElementsByTagName('li');
	var lisa = banner_li.getElementsByTagName('a');
	var a = 0;
	var timer = null;
	function play(index,length,csz){
		a = a + index;
		if(a == length){
			a = csz;
		}
		for(var i=0;i<bannerLi.length;i++){
			lis[i].style.backgroundColor = "#4d4c49";
			lisa[i].style.color = "#cecfcb";
			bannerLi[i].style.opacity = "0";
		}
		lis[a].style.backgroundColor = "#37a7d7";
		lisa[a].style.color = "#fff";
		bannerLi[a].style.opacity = "1";
	}
	
	for(var i=0;i<lisa.length;i++){
		lisa[i].index=i;
		lisa[i].onmouseover=function(){
			a = this.index;
			for(var i=0;i<bannerLi.length;i++){
				lis[i].style.backgroundColor = "#4d4c49";
				lisa[i].style.color = "#cecfcb";
				bannerLi[i].style.opacity = "0";
			}
			lis[a].style.backgroundColor = "#37a7d7";
			lisa[a].style.color = "#fff";
			bannerLi[a].style.opacity = "1";			
		}
	}
	timer = setInterval(function(){
		play(1,5,0)
	},3000);
	
	
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	banner.onmouseout=function(){
		timer = setInterval(function(){
		play(1,5,0)
		},3000);
	}
	
	var brandTab = document.getElementsByClassName('brandTab')[0];
	var tabLi = brandTab.getElementsByTagName('li');
	var tabA = brandTab.getElementsByTagName('a');
	var brandList = document.getElementsByClassName('brandList')[0];
	var tabUl = brandList.getElementsByTagName('ul')[0];
	
	for(var i=0;i<tabLi.length;i++){
		tabLi[i].index = i;
		tabLi[i].onclick=function(){
			for(var i=0;i<tabLi.length;i++){
				tabLi[i].style.backgroundColor="#e4e4e4";
				tabA[i].style.color = "";
			}
			tabA[this.index].style.color = "#fff";
			tabLi[this.index].style.backgroundColor="#fa5889";
			tabUl.style.left = (this.index)*-790 + 'px';
		}
	}
	
	
	
}
