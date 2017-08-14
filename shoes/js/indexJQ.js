$(function(){
	$(".tab-ul li").click(function(){
		$(this).css({"background-color":"#6d84b4","color":"#fff"}).siblings().css({"background-color":"","color":""});
		$(".tab-content div").eq($(this).index()).show().siblings().hide();
	});
	$(".nav-ul li a").mouseover(function(){
		$(this).next().show().parent().siblings().find("div").hide();
	})
})

$(function(){
	//通过修改样式来显示不同的星级
    $("ul.rating li a").click(function(){
	     var title = $(this).attr("title");
	     alert("您给此商品的评分是："+title);
		 var cl = $(this).parent().attr("class");
		 $(this).parent().parent().removeClass().addClass("rating "+cl+"star");
		 $(this).blur();//去掉超链接的虚线框
		 return false;
	})
    
})

$(function(){
	$(".smallWrap").eq(2).mousemove(function(ev){
		var l = 0;
		var t = 0;
		
		//水平方向左侧(当鼠标位置的X值大于放大镜宽度的一半+图片的margin-left时)
		if(ev.clientX > $(".cover").width()/2+$(".pic").offset().left){
			l = ev.clientX-$(".cover").width()/2-$(".pic").offset().left;
		}
		//水平方向右侧(当鼠标位置的X值大于鼠标到图片左边距离+图片的margin-left时)
		if(ev.clientX > $(".smallWrap").width()-$(".cover").width()/2+$(".pic").offset().left){
			l = $(".smallWrap").width()-$(".cover").width();
		}
		
		console.log($(".pic").offset().top);
		//垂直方向上方(当鼠标位置的Y值大于放大镜宽度的一半+图片的margin-top时)
		if(ev.clientY > $(".cover").height()/2+$(".pic").offset().top){
			t = ev.clientY-$(".cover").height()/2-$(".pic").offset().top;
		}
		//垂直方向下方(当鼠标位置的Y值大于鼠标到图片左边距离+图片的margin-top时)
		if(ev.clientY > $(".smallWrap").height()-$(".cover").height()/2+$(".pic").offset().top){
			t = $(".smallWrap").width()-$(".cover").height();
		}
		
		$(".cover").css({display:"block",left:l,top:t});
		$(".bigpic").css({display:"block"}).children().css({display:"block",left:-2*l,top:-2*t});		
	})
	$(".smallWrap").eq(2).mouseout(function(){
		$(".cover").css({display:"none"});
		$(".bigpic").css({display:"none"});
	})

	$(".yellowImg").mousemove(function(ev){
		var l = 0;
		var t = 0;
		
		//水平方向左侧(当鼠标位置的X值大于放大镜宽度的一半+图片的margin-left时)
		if(ev.clientX > $(".cover").width()/2+$(".pic").offset().left){
			l = ev.clientX-$(".cover").width()/2-$(".pic").offset().left;
		}
		//水平方向右侧(当鼠标位置的X值大于鼠标到图片左边距离+图片的margin-left时)
		if(ev.clientX > $(".yellowImg").width()-$(".cover").width()/2+$(".pic").offset().left){
			l = $(".yellowImg").width()-$(".cover").width();
		}
		
		console.log($(".pic").offset().top);
		//垂直方向上方(当鼠标位置的Y值大于放大镜宽度的一半+图片的margin-top时)
		if(ev.clientY > $(".cover").height()/2+$(".pic").offset().top){
			t = ev.clientY-$(".cover").height()/2-$(".pic").offset().top;
		}
		//垂直方向下方(当鼠标位置的Y值大于鼠标到图片左边距离+图片的margin-top时)
		if(ev.clientY > $(".yellowImg").height()-$(".cover").height()/2+$(".pic").offset().top){
			t = $(".yellowImg").width()-$(".cover").height();
		}
		
		$(".cover").css({display:"block",left:l,top:t});
		$(".bigpic").css({display:"block"}).children().css({display:"block",left:-2*l,top:-2*t});		
	})
	$(".yellowImg").eq(2).mouseout(function(){
		$(".cover").css({display:"none"});
		$(".bigpic").css({display:"none"});
	})


	$(".greenImg").mousemove(function(ev){
		var l = 0;
		var t = 0;
		
		//水平方向左侧(当鼠标位置的X值大于放大镜宽度的一半+图片的margin-left时)
		if(ev.clientX > $(".cover").width()/2+$(".pic").offset().left){
			l = ev.clientX-$(".cover").width()/2-$(".pic").offset().left;
		}
		//水平方向右侧(当鼠标位置的X值大于鼠标到图片左边距离+图片的margin-left时)
		if(ev.clientX > $(".greenImg").width()-$(".cover").width()/2+$(".pic").offset().left){
			l = $(".greenImg").width()-$(".cover").width();
		}
		
		console.log($(".pic").offset().top);
		//垂直方向上方(当鼠标位置的Y值大于放大镜宽度的一半+图片的margin-top时)
		if(ev.clientY > $(".cover").height()/2+$(".pic").offset().top){
			t = ev.clientY-$(".cover").height()/2-$(".pic").offset().top;
		}
		//垂直方向下方(当鼠标位置的Y值大于鼠标到图片左边距离+图片的margin-top时)
		if(ev.clientY > $(".greenImg").height()-$(".cover").height()/2+$(".pic").offset().top){
			t = $(".greenImg").width()-$(".cover").height();
		}
		
		$(".cover").css({display:"block",left:l,top:t});
		$(".bigpic").css({display:"block"}).children().css({display:"block",left:-2*l,top:-2*t});		
	})
	$(".greenImg").eq(1).mouseout(function(){
		$(".cover").css({display:"none"});
		$(".bigpic").css({display:"none"});
	})


})
