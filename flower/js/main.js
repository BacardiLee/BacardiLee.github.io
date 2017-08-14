

var love = id("love");
var family = id("family");
var forever = id("forever");
var cake = id("cake");
var gift = id("gift");
var listLove = love.getElementsByClassName("list")[0]; 
var listFamily = family.getElementsByClassName("list")[0];
var listForever = forever.getElementsByClassName("list")[0];
var listCake = cake.getElementsByClassName("list")[0];
var listGift = gift.getElementsByClassName("list")[0];
var content = document.getElementsByClassName("content");
for(var i = 3;i < 11;i++){
	listLove.innerHTML+=`<li>
							<a href="detail.html">
								<img src="${data.text[i].img}"/>
								<span>${data.text[i].des}</span>
								<span class="price">${data.text[i].hlj}</span>
							</a>
						</li>`
}
for(var i = 11;i < 19;i++){
	listFamily.innerHTML+=`<li>
							<a href="javascript:;">
								<img src="${data.text[i].img}"/>
								<span>${data.text[i].des}</span>
								<span class="price">${data.text[i].hlj}</span>
							</a>
						</li>`
}
for(var i = 19;i < 27;i++){
	listForever.innerHTML+=`<li>
							<a href="javascript:;">
								<img src="${data.text[i].img}"/>
								<span>${data.text[i].des}</span>
								<span class="price">${data.text[i].hlj}</span>
							</a>
						</li>`
}
for(var i = 27;i < 35;i++){
	listCake.innerHTML+=`<li>
							<a href="javascript:;">
								<img src="${data.text[i].img}"/>
								<span>${data.text[i].des}</span>
								<span class="price">${data.text[i].hlj}</span>
							</a>
						</li>`
}
for(var i = 35;i < 43;i++){
	listGift.innerHTML+=`<li>
							<a href="javascript:;">
								<img src="${data.text[i].img}"/>
								<span>${data.text[i].des}</span>
								<span class="price">${data.text[i].hlj}</span>
							</a>
						</li>`
}
