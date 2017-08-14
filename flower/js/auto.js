var bannerImg = document.getElementById('banner_img');
var bannerPoint = document.getElementById('banner_point');
var bannerPic = document.getElementById('bannerPic');
var imgLi = bannerImg.getElementsByTagName('li');
var pointLi = bannerPoint.getElementsByTagName('li');
var pre = bannerPic.getElementsByClassName('pre')[0];
var next = bannerPic.getElementsByClassName('next')[0];
index = 0;
var t = null;

for(var i = 0; i < pointLi.length; i++) {
	pointLi[i].index = i; //对象.属性
	pointLi[i].onclick = function() {
		index = this.index;
	for(var j = 0; j < pointLi.length; j++) {
		pointLi[j].className = '';
		imgLi[j].style.opacity = '0';
	}
	pointLi[index].className = 'active';
	imgLi[index].style.opacity = '1';
	}
}
t = setInterval(function(){
	slider(index++,5,0)
	}, 1000)
pre.onclick = function() {
	slider(index--,-1,4)
}
next.onclick = function() {
	slider(index++,5,0)
}
bannerPic.onmouseover = function() {
	clearInterval(t);
}
bannerPic.onmouseout = function() {
	clearInterval(t);
	t = setInterval(function(){
		slider(index++,5,0)
	}, 1000)
}


function slider(bl,bc,csz){
	bl;
	if(index == bc){
		index = csz;
	}
	for(var j = 0; j < pointLi.length; j++) {
		pointLi[j].className = '';
		imgLi[j].style.opacity = '0';
	}
	pointLi[index].className = 'active';
	imgLi[index].style.opacity = '1';
}
