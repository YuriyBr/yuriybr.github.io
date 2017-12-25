// Modal window - start


function modalWin (){	
	win.style.display = 'block';
	over.style.display = 'block';
	}

function modalWinClose (){
	win.style.display = 'none';
	over.style.display = 'none';
	}
var win = document.querySelector('.box-modal');	
var btnLog = document.querySelector('.pull-right');
var over = document.querySelector('.overlay');
var btnClose = document.querySelector('.box-modal_close');
btnLog.addEventListener('click', modalWin);
btnClose.addEventListener('click', modalWinClose);
over.addEventListener('click', modalWinClose);

// Modal window -- end


// Change style of items of navigation -- start

var header = document.querySelector('.nav-container');
var headerMain = document.querySelector('.header');
var benef = document.querySelector('.benefits');
var heightTTL = headerMain.clientHeight + benef.clientHeight - header.clientHeight*1.5;
var height22 = heightTTL+document.querySelector('.page-block').clientHeight;
var height33 = height22 + document.querySelector('.page-block').clientHeight - header.clientHeight*0.7;
var slogan = document.querySelector('.slogan');
var btn = document.querySelector('.btn');
var nav__item__1 = document.querySelector('.nav').children[0];
var nav__item__2 = document.querySelector('.nav').children[1];
var nav__item__3 = document.querySelector('.nav').children[2];
var nav__item__4 = document.querySelector('.nav').children[3];
var nav__item__5 = document.querySelector('.nav').children[4];

console.log(nav__item__1);

window.onscroll = function() {
var scrolled = window.pageYOffset || document.documentElement.scrollTop;
console.log(scrolled);
if(scrolled>header.clientHeight){
	header.classList.add('fix');
	header.style.background = 'rgba(255, 255, 255, .3)';
} else {
	header.classList.remove('fix');
	header.style.background = 'transparent';
}
if(scrolled>heightTTL && scrolled<height22 ||scrolled > height33){
	slogan.style.color = 'red';
	$('.nav__item').css({'color':'red'});	
	btn.style.color = 'red';
} else{
	slogan.style.color = '#fff';
	$('.nav__item').css({'color':'#fff'});
	btn.style.color = '#fff';
}
if (scrolled<headerMain.clientHeight){
	nav__item__1.style.background = 'white';
	nav__item__1.style.color = '#000';
}
else{
	nav__item__1.style.background = 'transparent';
}

if (scrolled>headerMain.clientHeight && scrolled<680){
	nav__item__2.style.background = 'white';
	nav__item__2.style.color = '#000';
}
else{
	nav__item__2.style.background = 'transparent';
}

if (scrolled>=680 && scrolled<1212){
	nav__item__3.style.background = 'white';
	nav__item__3.style.color = '#000';
}
else{
	nav__item__3.style.background = 'transparent';
}

if (scrolled>=1212 && scrolled<3252){
	nav__item__4.style.background = 'white';
	nav__item__4.style.color = '#000';
}
else{
	nav__item__4.style.background = 'transparent';
}

if (scrolled>=3253){
	nav__item__5.style.background = 'white';
	nav__item__5.style.color = '#000';
}
else{
	nav__item__5.style.background = 'transparent';
}

}

// Change style of items of navigation --- end

$(document).ready(function(){
  $('.testimonials-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  button: true,
  });
});


