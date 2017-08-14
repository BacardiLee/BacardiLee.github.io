//换肤
window.onload = function() {
	var oSkin = document.getElementsByClassName('skin')[0];
	var oLi = oSkin.getElementsByTagName('li');
	var oNav = document.getElementsByClassName('nav')[0];
	var li2 = document.getElementsByClassName('li2')[0];
	//给每个小方块添加点击事件

	for(var i = 0; i < oLi.length; i++) {
		oLi[i].style.backgroundPositionX = i * -20 + 'px';
	}
	oLi[0].style.backgroundPositionY = -15 + 'px';
	//oNav.style.backgroundColor="#4a4a4a";
	//
	//
	//for(var i=0;i<oLi.length;i++){
	//	oLi[i].index=i;
	//	oLi[i].onclick=function(){
	//		for(var i=0;i<oLi.length;i++){
	//			oLi[i].style.backgroundPositionY = 0+'px';
	//		}
	//		this.style.backgroundPositionY = -15+'px';
	//		oNav.style.backgroundColor=this.title;
	//	}
	//}

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
	/*图片的tab切换效果*/
	var oPic = document.getElementsByClassName('pic');
	var content = document.getElementsByClassName("content")[0];
	var small = document.getElementsByClassName('smallWrap');
	var cover = document.getElementsByClassName('cover');
	var bluep = document.getElementsByClassName('bluep')[0];
	var bigPic = document.getElementsByClassName('bimg')[0];
	var big = document.getElementsByClassName('bigpic')[0];
	var lis = bluep.getElementsByTagName('li');
	var float_box = document.getElementsByClassName("float_box")[0];

	//放大镜效果
	small[2].onclick=function(){
		alert(2);
	}
//	for(var i=0;i<small.length;i++){
//		small[i].onmousemove = function(ev) {
//			for(var j=0;j<cover.length;j++){
//				var ev = ev || window.event;
//				//获取鼠标的坐标
//				var disX = ev.clientX + document.body.scrollLeft;
//				var disY = ev.clientY + document.body.scrollTop;
//		
//				var oPic_left = oPic[0].offsetLeft+180; //获取box的左外边距
//				var oPic_top = oPic[0].offsetTop+100; //获取box的顶外边距
//				var cover_width = cover[j].offsetWidth; //获取span的宽度
//				var cover_height = cover[j].offsetHeight;
//				var smallW = small[0].offsetWidth; //
//				var smallH = small[0].offsetHeight;	
//				cover[j].style.display="block";
//				big.style.display = "block";
//				document.title = oPic_top+"|"+cover_height+"|"+smallH ;
//				if((disX - oPic_left) <= cover_width / 2) {
//					cover[j].style.left = 0;
//					bigPic.style.left = 0;
//				} else if((disX - oPic_left) >= (smallW - cover_width / 2)) {
//					cover[j].style.left = (smallW - cover_width) + 'px';
//					bigPic.style.left = -2*(smallW - cover_width) + 'px';
//				} else {
//					cover[j].style.left = (disX - oPic_left - cover_width / 2) + 'px';
//					bigPic.style.left = -2*(disX - oPic_left - cover_width / 2) + 'px';
//				}
//				
//				if((disY - oPic_top) <= cover_height/2) {
//					cover[j].style.top = 0;
//					bigPic.style.top = 0;
//				}else if((disY - oPic_top) >=(smallH - cover_height/2)){
//					cover[j].style.top =(smallH - cover_height) + 'px';
//					bigPic.style.top =-2*(smallH - cover_height) + 'px';
//				}else{
//					cover[j].style.top = (disY - oPic_top - cover_height / 2) + 'px';
//					bigPic.style.top = -2*(disY - oPic_top - cover_height / 2) + 'px';
//				}			
//			}
//		}
//
//	}	
	











	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onclick = function() {
			for(var i = 0; i < lis.length; i++) {
				small[i].style.opacity = 0;
			}
			small[this.index].style.opacity = 1;
		}
	}
	//黄色衣服切换
	var yellowImg = document.getElementsByClassName('yellowImg');
	var yellowp = document.getElementsByClassName('yellowp')[0];
	var yelis = yellowp.getElementsByTagName('li');
	for(var i = 0; i < yelis.length; i++) {
		yelis[i].index = i;
		yelis[i].onclick = function() {
			for(var i = 0; i < yelis.length; i++) {
				yellowImg[i].style.opacity = 0;
			}
			yellowImg[this.index].style.opacity = 1;
		}
	}

	//绿色衣服切换
	var greenImg = document.getElementsByClassName('greenImg');
	var greenp = document.getElementsByClassName('greenp')[0];
	var grlis = greenp.getElementsByTagName('li');
	for(var i = 0; i < grlis.length; i++) {
		grlis[i].index = i;
		grlis[i].onclick = function() {
			for(var i = 0; i < grlis.length; i++) {
				greenImg[i].style.opacity = 0;
			}
			greenImg[this.index].style.opacity = 1;
		}
	}

	//大的tab切换效果
	var bigTab = document.getElementsByClassName('big-tab')[0];
	var btlis = bigTab.getElementsByTagName('li');

	for(var i = 0; i < btlis.length; i++) {
		btlis[i].index = i;
		btlis[i].onclick = function() {
			for(var i = 0; i < btlis.length; i++) {
				oPic[i].style.display = 'none';
				btlis[i].style.borderColor = "#898989";
			}
			btlis[this.index].style.borderColor = "red";
			oPic[this.index].style.display = 'block';
		}
	}

	//尺码区域
	var proSize = document.getElementsByClassName('pro_size')[0];
	var proSt = proSize.getElementsByTagName('strong')[0];
	var proLi = proSize.getElementsByTagName('li');

	for(var i = 0; i < proLi.length; i++) {
		proLi[i].onclick = function() {
			for(var i = 0; i < proLi.length; i++) {
				proLi[i].style.backgroundColor = "";
			}
			proSt.innerText = this.innerText;
			this.style.backgroundColor = "#ff6600";
			//		console.log(this.innerText)
		}
	}

	//价格区域  级联变动
	var pro_price = document.getElementsByClassName("pro_price")[0];
	var pro_strong = pro_price.getElementsByTagName("strong")[0];
	var num_sort = document.getElementById("num_sort");

	var price = pro_strong.innerText;

	num_sort.onclick = function() {
		var num_val = parseInt(this.value);
		var num_result = num_val * price;
		pro_strong.innerText = num_result;
	}

}