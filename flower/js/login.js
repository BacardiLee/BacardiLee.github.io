var arr = ['欢迎登陆','欢迎注册']
$(".top_import li").mouseover(function(){
	$(".left-logo>p").html(arr[$(this).index()])
	$(this).addClass("active").siblings(".top_import li").removeClass("active");
	$(".import>div").addClass("hide")
	$(".import>div").eq($(this).index()).addClass("show").siblings(".import>div").removeClass("show");
}).mouseout(function(){
	$(".import>div").eq($(this).index()).addClass("hide")
})
$("#btn_login").click(function(){
	$(".login input[type='text']").each(function(item,index){
		console.log(item)
		if($(".login input[type='text']").eq(item).val()){
			console.log($(".login input[type='text']").eq(item).val())
			
		}else{
			$(".tips").html("请输入用户名或密码")
			$(".tips").css({"color":"red","fontStyle":"normal"})
		}

})
})

	