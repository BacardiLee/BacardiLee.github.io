function jsonp(obj){
		var arr = [];
		obj.opaction[obj.callback] = obj.fnName;
		for(var attr in obj.opaction){
			arr.push(attr+"="+obj.opaction[attr])
		}
		var oS = document.createElement("script");
		oS.src = obj.url+'?'+arr.join("&");
		document.body.appendChild(oS)
		window[obj.fnName] = function(date){
			obj.success(date)
		}
	}