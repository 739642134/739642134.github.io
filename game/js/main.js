window.onload = function() {
	var Lis = document.getElementById("topmenu").getElementsByTagName("li");
	//alert(Lis.length);
	for ( i = 0; i < Lis.length; i++) {
		Lis[i].i = i;
		Lis[i].onmouseover = function() {
			this.className = "lihover";

			var h0 = (this.i - 1) * 54 + 95;
			var y = this.getElementsByTagName("div")[0].offsetHeight;
			var h = this.getElementsByTagName("div")[0].style.top + y;
			if (this.i > 3) {
				h0 = (this.i - 1) * 54 + 150;
			}
			if (this.i > 5) {
				h0 = (this.i - 1) * 54 + 70;
			}
			if (h < h0) {
				this.getElementsByTagName("div")[0].style.top = h0 + "px";
			}

			if (y > 550) {
				this.getElementsByTagName("div")[0].style.top = "3px";
			}
		};

		Lis[i].onmouseout = function() {
			this.className = "";
		};
	}
	/*
	 * 轮播图
	 */
	var container = document.getElementById('container1');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var len = 7;
	var animated = false;
	var interval = 3000;
	var timer;

	function animate(offset) {
		if (offset == 0) {
			return;
		}
		animated = true;
		var time = 300;
		var inteval = 10;
		var speed = offset / (time / inteval);
		var left = parseInt(list.style.left) + offset;

		var go = function() {
			if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
				list.style.left = parseInt(list.style.left) + speed + 'px';
				setTimeout(go, inteval);
			} else {
				list.style.left = left + 'px';
				if (left > -200) {
					list.style.left = -916 * len + 'px';
				}
				if (left < (-916 * len)) {
					list.style.left = '-916px';
				}
				animated = false;
			};
		};
		go();
	};

	function showButton() {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className == 'on') {
				buttons[i].className = '';
				break;
			}
		}
		buttons[index - 1].className = 'on';
	}

	function play() {
		timer = setTimeout(function() {
			next.onclick();
			play();
		}, interval);
	}

	function stop() {
		clearTimeout(timer);
	}


	next.onclick = function() {
		if (animated) {
			return;
		}
		if (index == 7) {
			index = 1;
		} else {
			index += 1;
		};
		animate(-916);
		showButton();
	};
	prev.onclick = function() {
		if (animated) {
			return;
		};
		if (index == 1) {
			index = 7;
		} else {
			index -= 1;
		}
		animate(916);
		showButton();
	};

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick = function() {
			if (animated) {
				return;
			}
			if (this.className == 'on') {
				return;
			}
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = -916 * (myIndex - index);

			animate(offset);
			index = myIndex;
			showButton();
		};
	};

	container.onmouseover = stop;
	container.onmouseout = play;

	play();
	/*
	 * food
	 */
	function imgDisplay() {
		var Div = document.getElementById('picList').getElementsByTagName('div');
		var divHeight = 160;
		for (var i = 0; i < Div.length; i++) {
			Div[i].onmouseover = showMeg;
			Div[i].onmouseout = hideMeg;
		}
		function showMeg() {
			this.getElementsByTagName('a')[0].style.top = 0;
		}

		function hideMeg() {
			this.getElementsByTagName('a')[0].style.top = divHeight + 'px';
		}

	}

	imgDisplay();

};

