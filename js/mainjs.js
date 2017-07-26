window.onload = function(){
	
	var newsPic = document.querySelector('.news-pic');
	var newsLis = newsPic.getElementsByTagName('li');
	var newsImg = newsPic.getElementsByTagName('img');
	
	var arr = ['2222','3333'];
	
	setInterval(function(){
		
		arr.push(arr.shift());
		for(var i=0;i<newsLis.length;i++){
			newsImg[i].src = 'img/'+arr[i]+'.jpg';
		}
		
	},1000)
	
}
