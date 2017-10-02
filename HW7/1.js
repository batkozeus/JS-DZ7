// Task 1

var wrapper1 = document.getElementById('wrapper1');
var form1 = document.getElementById('form1');
var plus = document.getElementsByClassName('plus')[0];
var count1 = 1;
plus.onclick = function () {
	if (count1 < 6) {
		count1++;
		var form2 = form1.cloneNode(true);
		form2.querySelector('input').value = '';
		form2.querySelector('button').className = 'minus';
		form2.querySelector('button').innerHTML = '-';
		form2.id = 'form'+count1;
		wrapper1.appendChild(form2);
	}

	var minus = document.getElementsByClassName('minus');
		
	for (var i=0; i<minus.length; i++) {
		minus[i].onclick = f1;
	} 

	function f1 () {
		count1--;
		var classDel = 'form'+ (count1+1);
		console.log(classDel);
		var formDel = document.getElementById(classDel);
		formDel.parentNode.removeChild(formDel);
	}
}

var texter = document.getElementsByClassName('texter');
var area1 = document.getElementById('area1');
document.getElementById('collect').onclick = collect;
function collect () {
	area1.value = '';
	for (var i = 0; i < texter.length; i++) {
		if (chosenRadio == 'chetko') {
			if (i%2==1) {
				area1.value += texter[i].value + ' ';
			}
		}
		else if (chosenRadio == 'nechetko') {
			if (i%2==0) {
				area1.value += texter[i].value + ' ';
			}
		}
		else {
			area1.value += texter[i].value + ' ';
		}
	}
}


// Task 2

var wrapper2 = document.getElementById('wrapper2');
var myRadio = document.getElementsByName('myRadio');
var chosenRadio = '';

for (var i = 0; i < myRadio.length; i++) {
	myRadio[i].onclick = checkRadio;
}

function checkRadio () {
	chosenRadio = this.value;
}


// Task 3


document.getElementById('redCheck').onclick = function () {
	for (var i = 0; i < texter.length; i++) {
		var spaner = document.getElementsByClassName('spaner');
		if (texter[i].value == '') {
			texter[i].style.background = 'red';
			spaner[i].style.display = 'inline-block';
		}
		else {
			texter[i].style.background = null;
			spaner[i].style.display = 'none';
		}
	}
}


// Task 4

var option = document.querySelector('.option');
var ourWindow = document.querySelector('#window');

document.getElementById('vsplivOkno').onclick = function () {
	ourWindow.style.display = 'block';
}

var left = document.getElementById('left');
left.onclick = function () {
	option.innerHTML = left.innerHTML;
	ourWindow.style.display = 'none';
}

var right = document.getElementById('right');
right.onclick = function () {
	option.innerHTML = right.innerHTML;
	ourWindow.style.display = 'none';
}


// Task 5

var lister = document.querySelector('#lister');
var namer = document.querySelector('#namer');


document.getElementById('turtle').onclick = function () {
	var newLi = document.createElement('li');
	newLi.innerHTML = namer.value;
	newLi.className = 'member';
	lister.appendChild(newLi);
	newLi.onclick = redTurtle;

}

var lier = document.getElementsByTagName('li');
for (var i=0; i<lier.length; i++) {
		lier[i].onclick = redTurtle;
		} 
	function redTurtle() {
		console.log(this);
		if (this.classList.contains('member')) {
			this.classList.remove('member');
			this.classList.add('memberRed');
		}
		else if (this.classList.contains('memberRed')) {
			this.classList.remove('memberRed');
			this.classList.add('member');
		}
	}


// Task 6

var six = document.querySelector('.six');
var mrBin = document.querySelector('.mrBin');
var blacker = document.querySelector('.blacker');

blacker.onmouseenter = function () {
	this.style.animation = 'opaciter1 2s linear forwards';
}

blacker.onmouseleave = function () {
	this.style.background = 'linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 100%)';
	this.style.animation = 'opaciter2 2s 2s linear forwards';
}


// Task 7

var myHero = document.getElementById('myHero');
var heroImg = document.getElementsByClassName('heroImg');
var heroLink = document.getElementsByClassName('heroLink');

for (var i = 0; i < heroLink.length; i++) {
	heroLink[i].onmouseenter = function () {
		myHero.style.display = 'block';
		myHero.style.color = 'pink'; 
		myHero.innerHTML = 'Адрес ссылки: ' + this.href + '<br>' + 'Название ссылки: ' + this.title + '<br>' + 'Направление ссылки: ' + this.target;
		if ((this.href == '') || (this.title == '') | (this.target == '')) {
			myHero.innerHTML = 'Очень плохая ссылка, я думал лучше будет';
			myHero.style.color = 'red'; 
		}
	}
	heroLink[i].onmouseleave = function () {
		myHero.style.display = 'none';
		myHero.innerHTML = '';
	}
}


// Task 8

for (var i = 0; i < heroImg.length; i++) {
	heroImg[i].onmouseenter = function () {
		myHero.style.display = 'block';
		myHero.style.color = 'pink'; 
		myHero.innerHTML = 'Адрес изображения: ' + this.src + '<br>' + 'Описание изображения: ' + this.alt;
		if (this.alt == '') {
			this.style.boxShadow = '0px 2px 8px 10px rgba(224,27,27,0.78)'; 
		}
		if ((this.src == '') || (this.alt == '')) {
			myHero.innerHTML = 'Очень плохое изображение, я думал лучше будет';
			myHero.style.color = 'red'; 
		}
	}
	heroImg[i].onmouseleave = function () {
		myHero.style.display = 'none';
		myHero.innerHTML = '';
		this.style.boxShadow = '';
	}
}


// Task 9

var zaglav = document.getElementById('zaglav');
var myH1 = document.getElementsByTagName('h1').length;
var myH2 = document.getElementsByTagName('h2').length;
var myH3 = document.getElementsByTagName('h3').length;
var myH4 = document.getElementsByTagName('h4').length;
var myH5 = document.getElementsByTagName('h5').length;
var myH6 = document.getElementsByTagName('h6').length;

document.getElementById('glavar').onclick = function () {
	zaglav.innerHTML = 'Общее количество заголовков: ' + (myH1 + myH2 + myH3 + myH4 + myH5 + myH6) + '.';

	if (myH1 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h1 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h1 - ' + myH1;
	}
	if (myH2 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h2 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h2 - ' + myH2;
	}
	if (myH3 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h3 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h3 - ' + myH3;
	}
	if (myH4 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h4 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h4 - ' + myH4;
	}
	if (myH5 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h5 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h5 - ' + myH5;
	}
	if (myH6 == 0) {
		zaglav.innerHTML += '<br>' + 'Элемент h6 - отсутствует';
	}
	else {
		zaglav.innerHTML += '<br>' + 'Количество элементов h6 - ' + myH6;
	}
}


// Task 10

var metaTeg = document.getElementById('metaTeg');
metaTeg.innerHTML = '';
var alerter = document.getElementById('alerter');
alerter.innerHTML = '';
alerter.style.color = 'red';
var metaer = document.getElementsByTagName('meta');

document.getElementById('metaCheck').onclick = function () {
	if (document.title) {
		metaTeg.innerHTML += 'Метатег title присутствует' + '<br>' + 'Длина метатега title - ' + document.title.length + ' символов' + '<br>';
	}
	else {
		alerter.innerHTML += 'Метатег title отсутствует' + '<br>';
	}

	if (metaer.description) {
		metaTeg.innerHTML += 'Метатег description присутствует' + '<br>' + 'Длина метатега description - ' + metaer.description.content.length + ' символов' + '<br>';
	}
	else {
		alerter.innerHTML += 'Метатег description отсутствует' + '<br>';
	}

	if (metaer.keywords) {
		metaTeg.innerHTML += 'Метатег keywords присутствует' + '<br>';
	}
	else {
		alerter.innerHTML += 'Метатег keywords отсутствует' + '<br>';
	}
}