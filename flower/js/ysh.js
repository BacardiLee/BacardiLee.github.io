

var wrap = document.getElementsByClassName("wrap")[0];
for(var i = 0; i < data.text.length; i++) {
	wrap.innerHTML += `
	<div class="ysh_list">
			<div class="ysh_top_list">
				<h4>${data.text[i].xl}</h4>
				<p>${data.text[i].ms}
					<a>More+</a>
				</p>
			</div>
			<div class="ysh_list_all clearfix">
				<div class="ysh_left_list">
					<a href="javascript:;"><img src="${data.text[i].lImg}"></a>
				</div>
				<div class="ysh_right_list">
					<div class="ysh_slide">
						<ul class="list"></ul>
						<span class="ysh_next glyphicon glyphicon-menu-right"></span>
						<span class="ysh_prev glyphicon glyphicon-menu-left"></span>
					</div>

				</div>
			</div>
		</div>`
}
for(var i = 0; i < data.text.length; i++) {
	var list = document.getElementsByClassName("list");
	for(var j = 0; j < data.text[i].detail.length; j++) {
		list[i].innerHTML += `
							<li>
								<a href="javascript:;">
									<img class="img-thumbnail" src="${data.text[i].detail[j].rImg}" />
									<span>${data.text[i].detail[j].hz} <span>${data.text[i].detail[j].tj}</span></span>
									<span class="price">${data.text[i].detail[j].jg}</span>
								</a>
							</li>
						
					`
	}
}
function move(){
	var num = 0;
	function slide(index) {
		$(".ysh_next").eq(index).click(function() {
			num++;
			num = num % 6;
			$(".list").eq(index).animate({
				left: -285 * num
			}, 500)
		})
		$(".ysh_prev").eq(index).click(function() {
			num--;
			if(num<0){
				num = 0;
			}
			num = num % 6;
			$(".list").eq(index).animate({
				left: -285 * num
			}, 500)
		})
	}
	slide(0)
	slide(1)
	slide(2)
	slide(3)
	slide(4)
}
move()