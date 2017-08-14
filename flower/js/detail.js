(function(){
var str = '';
var str2 = '';
for(var i = 0;i < data.text[3].info.imgB.length;i++){
	if(i == 0){
		var str = '<li class="show"><a href="javascript:;"><img src="'+data.text[3].info.imgB[i]+'"/></a></li>'
		var str2 = '<li class="active"><a href="javascript:;"><img src="'+data.text[3].info.imgS[i]+'"/></a></li>'
	}else{
		 str +='<li class="hide"><a href="javascript:;"><img src="'+data.text[3].info.imgB[i]+'"/></a></li>'
		 str2 += '<li ><a href="javascript:;"><img src="'+data.text[3].info.imgS[i]+'"/></a></li>'
	}
}
$(".detail_big_img").html(str)
$(".detail_small_img").html(str2)
var str3 = '';
str3 = `<h4>${data.text[3].name}</h4>
							<ul>
								<li>类 别：<span>${data.text[3].lb}</span></li>
								<li>材 料：<span>${data.text[3].cl}</span></li>
								<li>包 装：<span>${data.text[3].bz}</li>
								<li>花 语：<span>${data.text[3].hy}</span></li>
								<li>附 送：<span>${data.text[3].fs}</span></li>
								<li>配 送：<span>${data.text[3].ps}</span></li>
							</ul>
							<p class="detail_price"><a href="javascript">市场价：${data.text[3].scj}</a></p>
							<p><a href="javascript">花礼价：<span class="detail_new_price">${data.text[3].hlj}</span></a></p>
							<p class="detail_sales">促销信息：<img src="img/appzx_01.png"><span class="detail_new_price">￥280</span><a><span class="glyphicon glyphicon-qrcode">去APP购买</span></a><a><span class="glyphicon glyphicon-qrcode"></span>去微信购买</a></p>
							<a href="javascript" class="detail_purchase"><span class="glyphicon glyphicon-shopping-cart"></span>立即购买</a>
							<a href="javascript:;" class="detail_collect"><span class="glyphicon glyphicon-heart"></span>收藏</a>
							<dl class="clearfix">
								<dt>分享:</dt>
								<dd><i></i></dd>
								<dd><i></i></dd>
								<dd><i></i></dd>
								<dd><i></i></dd>
								<dd><i></i></dd>
								<dd><i></i></dd>
							</dl>`							
$(".detail_des_right").html(str3)


var recomend = '';
for(var i = 0;i <　data1.detail.length;i++){
	recomend += `<li>
				<a href="javascript:;">
					<img src="${data1.detail[i].rImg}"/>
					<span id="">${data1.detail[i].hz}</span>
				</a>
				<span class="detail_color">${data1.detail[i].jg}</span>
			</li>`
	
}
$(".detail_commend ul").html(recomend)
var show = '';
for(var i = 0;i <　data1.show.length;i++){
	show += `<img src="${data1.show[i]}"/>`
}
$("#detail_show").html(show)	

var coment= '';
for(var i = 0;i <　data1.coment.length;i++){
	coment += `<dl>
					<dt>
						<a href="javascript:;">
							<img class="img-thumbnail" src="${data1.coment[i].img}"/>
							<span>${data1.coment[i].rw}</span>				
						</a>
					</dt>
					<dd>
						<p>整体评分:<i></i><span>评价时间：${data1.coment[i].sj} IP:${data1.coment[i].ip}</span></p>
						<p class="inner">评价内容：<span>${data1.coment[i].nr}</span></p>
					</dd>
				</dl>`
}					
$("#detail_coment").html(coment)
var order = '';
for(var i = 0;i <　data1.list.length;i++){
	order+=`<li>
				<span>${data1.list[i].ddh} </span>
				<span>${data1.list[i].dz}</span>
				<a href="javascript:;"><img src="${data1.list[i].img}"/></a>
			</li>`
}
$("#detail_list ul").html(order)

var story = '';
for(var i = 0;i <　data1.story.length;i++){
	story+=`<li>
				<span>${data1.story[i].sj}</span>
				<a href="javascript:;">
					<img src="${data1.story[i].img}"/>
					<span>${data1.story[i].bt}</span>
					<span>${data1.story[i].nr}</span>
				</a>						
			</li>`
}
			
$("#detail_story ul").html(story)
var slide = '';
var slides = '';
for(var i = 0;i <　data1.brands.length;i++){
	if(i==0){
		slide=`<li class="active">
				<a href="javascript:;">
					<i></i>
					<span>${data1.brands[i]}</span>
				</a>
			</li>`
		slides=`<li class="show"><img src="${data1.img[i]}"/></li>`
	}else{
		slide+=`<li>
				<a href="javascript:;"+v>
					<i></i>
					<span>${data1.brands[i]}</span>
				</a>
			</li>`
		slides+=`<li><img src="${data1.img[i]}"/></li>`
	}
	
}	
$(".detail_slide").html(slide)
$(".detail_server_img").html(slides)
})()
/*大图小图切换*/
function tab() {
	var num = 0;
	$(".detail_small_img li").mouseover(function() {
		$(this).addClass("active").siblings(".detail_small_img li").removeClass("active")
		$(".detail_big_img li").eq($(this).index()).addClass("show").siblings().removeClass("show");
		num = $(this).index()
	})

	$(".detail_des_left span").mouseover(function() {
		$(this).css("opacity", "1").siblings(".detail_des_left span").css("opacity", "0");
	}).mouseout(function() {
		$(this).css("opacity", "0")
	})

	$(".detail_next").click(function() {
		num++;
		setBor()
	})
	$(".detail_prev").click(function() {
		num--;
		setBor()
	})
	function setBor(){
		num = num % $(".detail_big_img li").length;
		$(".detail_small_img li").eq(num).addClass("active").siblings(".detail_small_img li").removeClass("active")
		$(".detail_big_img li").eq(num).addClass("show").siblings(".detail_big_img li").removeClass("show");
	}
}
tab();
/*滚轮事件，锚点*/
function scroll(){
	
	$("#datail_nav li").click(function() {
		$("#datail_nav li").removeClass("detail_active")
		$(this).addClass("detail_active")
		$("body").animate({
			scrollTop : $(".detail_slide_nav>div").eq($(this).index()).offset().top
		},500)
			
		
	})

	$(document).scroll(function() {
		if(document.body.scrollTop > 900) {
			$(".detail_info").css("display", "block")
		} else {
			$(".detail_info").css("display", "none")
		}
		$(".detail_slide_nav>div").each(function(i) {
		
			if($("body").scrollTop() > Math.abs($(".detail_slide_nav>div").eq($(this).index()).offset().top)-50) {
				$("#datail_nav li").eq($(this).index()).addClass("detail_active").siblings("#datail_nav li").removeClass("detail_active")
				
		}
		})
	})
}
scroll();
/*server*/
function server(){
	$(".detail_slide li i").each(function(index){
		if(index==0){
			$(".detail_slide li i").eq(index).css("backgroundPosition",index*-60+"px -60px")
		}else{
			$(".detail_slide li i").eq(index).css("backgroundPosition",index*-60+"px 0")
		}
		$(".detail_slide li").mouseover(function(){
			$(".detail_slide li i").eq(index).css("backgroundPosition",index*-60+"px 0")
			$(".detail_slide li i").eq($(this).index()).css("backgroundPosition",$(this).index()*-60+"px -60px")
			$(".detail_server_img li").eq($(this).index()).addClass("show").siblings(".detail_server_img li").removeClass("show")	
		})
	})

}
server()
