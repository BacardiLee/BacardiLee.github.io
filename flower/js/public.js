/*search*/
$(".searchKey").css({ "border": "1px solid #ff6a00", "border-radius": "5px", "width": "300px" })
$(".input").css({ "border": "none", "outline": "none" })

/*input*/
var lists = id("keyList")
var txt = id("txt")
var btn = id("btn")
txt.oninput = function(){
	lists.style.display="block"
	console.log()
	jsonp({
		url: "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su", //地址
		opaction: {
			wd: txt.value, //关键字
		},
		fnName: "fn", //函数名
		callback: "cb", //
		success: function(date) {
			lists.innerHTML = '';
			var arr = date.s;
			for(var i = 0; i < arr.length; i++) {
				lists.innerHTML += '<li><a href="https://www.baidu.com/s?ie=utf-8&f=3&rsv_bp=1&rsv_idx=1&tn=baidu&wd=' + arr[i] + '">' + arr[i] + '</a></li>'
			}
		}
	})
}

txt.onblur = function(){
	lists.style.display="none"
}

$(".aside-nav li:last-of-type").css("display","none")
$(window).scroll(function(){
	if($(window).scrollTop()>300){
		$(".aside-nav li:last-of-type").css("display","block")
		
	}else{
		$(".aside-nav li:last-of-type").css("display","none")
	}
})
$(".aside-nav li:last-of-type").click(function(){
				$("body").animate({
					scrollTop:0
				},500)
		})
		
$(".aside-nav li:last-of-type>div").click(function(){
				$("body").animate({
					scrollTop:0
				},500)
		})