

var loginBtn = document.getElementById('login-btn');
			var userName = document.getElementById('userName');
			var passWord = document.getElementById('password');
			var loginInfo = document.getElementsByClassName('login-info')[0];
			loginBtn.onclick = function(){
				var onoff = false;
				var val = userName.value;
				var psw = passWord.value;
				//验证手机号
				var reg = /^1[3|4|5|7|8][0-9]{9}$/g;
				var result = reg.test(val);
				if(!result) {
					loginInfo.style.display = 'block';
					flag = false;
				}
				
				//验证用户名
				reg = /^[\w-_]{4,20}$/g;
				result = reg.test(val);
				if(!result) {
					loginInfo.style.display = 'block';
					flag = false;
				}
				
				//验证邮箱
				reg =  /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
				result = reg.test(val);
				if(!result) {
					loginInfo.style.display = 'block';
					flag = false;
				}
				
				//验证密码
				reg = /\w\w{6,20}/g;
				result = reg.test(val);
				if(!result) {
					loginInfo.style.display = 'block';
					flag = false;
				}
				
				if(flag) {
					alert('登录成功');
				}
			}