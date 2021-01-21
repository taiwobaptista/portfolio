function stabilize(){
	window.scrollBy(0, 0);
}
window.onscroll = function()
{
	scrollFunction();
}
function scrollFunction()
{
	if(document.body.scrollTop > 280 || document.documentElement.scrollTop > 280)
	{
		document.getElementById('back-to-top').style.bottom = '30px';
		document.getElementById('back-to-top').style.animation = 'updown 1s infinite';
	}
	else
	{
		document.getElementById('back-to-top').style.bottom = '-50px';
		document.getElementById('back-to-top').style.animation = 'none';
	}
}
function topFunction(){
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
}
function jump(){
	var element = document.getElementById('section1');
	var headerOffset = 65;
	var elementOffset = element.getBoundingClientRect().top;
	var total = elementOffset - headerOffset;
	window.scrollBy(0, total);
}
function reset()
{
	document.getElementsByClassName('e')[0].style.animation = 'none';
	document.getElementsByClassName('e')[1].style.animation = 'none';
	document.getElementsByClassName('e')[2].style.animation = 'none';
	document.getElementsByClassName('e-footer')[0].style.animation = 'none';
	document.getElementsByClassName('e-footer')[1].style.animation = 'none';
	document.getElementsByClassName('e-footer')[2].style.animation = 'none';
}
function display(x)
{
	if (x == 'logo-footer')
	{
		document.getElementsByClassName('e-footer')[0].style.animation = 'move1 0.5s ease-out';
		document.getElementsByClassName('e-footer')[1].style.animation = 'move2 0.6s ease-out';
		document.getElementsByClassName('e-footer')[2].style.animation = 'move3 0.7s ease-out';
		setTimeout(reset, 600);
	}
	else
	{
		document.getElementsByClassName('e')[0].style.animation = 'move1 0.5s ease-out';
		document.getElementsByClassName('e')[1].style.animation = 'move2 0.6s ease-out';
		document.getElementsByClassName('e')[2].style.animation = 'move3 0.7s ease-out';
		setTimeout(reset, 600);
	}	
}
function openNav()
{
	var sideNav = document.getElementById('vertical-nav');
	var hamBurger = document.getElementsByClassName('hamburger')[0];
	var overlay = document.getElementById('nav-overlay');
	var head = document.getElementsByClassName('header')[0];

	if(sideNav.style.left == '0%'){
		sideNav.style.left = '-60%';
		hamBurger.style.marginRight = '0';
		overlay.style.display = 'none';
		head.style.background = '#1b1e22';
	}
	else{
		sideNav.style.left = '0%';
		hamBurger.style.marginRight = '41.5%';
		overlay.style.display = 'block';
		head.style.background = '#0D0F11';
	}
}
function funcFocus(x, y)
{
	document.getElementById(y).style.cssText = "color:white;left:8px;top:0;font-size:10px;";
	document.getElementById(x).style.cssText = "color:white;border:1px white solid;";
}
function funcBlur(x, y, z)
{
	if(document.getElementById(x).value == ""){
		document.getElementById(y).style.cssText = "color:#8AB8B8;left:10px;top:20px;";
		document.getElementById(x).style.cssText = "color:#8AB8B8;border:1px #2A454E solid;";
	}
	else{
		if(z == 'email' || z =='textarea')
		{
			document.getElementById(y).style.cssText = "color:white;left:8px;top:0;font-size:10px;";
			document.getElementById(x).style.cssText = "color:white;border:1px white solid;";
		}
		else
		{
			document.getElementById(y).style.cssText = "color:white;left:8px;top:0;font-size:10px;";
			document.getElementById(x).style.cssText = "color:white;border:1px white solid;";
			document.getElementById(x).value = document.getElementById(x).value.toUpperCase();
		}
	}
}
