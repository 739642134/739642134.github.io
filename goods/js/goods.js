window.onload=function(){
	function f () {
	  var Div=document.getElementById('main1').getElementsByClassName('pic');
	return Div.length;
	}
	f();
	function imgDisplay() {
		var Div = document.getElementById('main1').getElementsByClassName('pic');
		
		var divHeight1 = 400;
		var divHeight2 = 340;
		for (var i = 0; i < Div.length; i++) {
			Div[i].onmouseover = showMeg;
			Div[i].onmouseout = hideMeg;
		}
		function showMeg() {
			this.getElementsByTagName('a')[0].style.top = divHeight2 + 'px';
		}

		function hideMeg() {
			this.getElementsByTagName('a')[0].style.top = divHeight1 + 'px';
		}

	}

	imgDisplay();
	
};
