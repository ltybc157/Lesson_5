let Menu = document.querySelectorAll('.menu');
let btn = document.querySelectorAll('.menu-item');
Menu[0].insertBefore(btn[2], btn[1]);
//------------------------------------------------------------
let li = document.createElement('li');
li.classList.add('menu-item');
Menu[0].appendChild(li);
//------------------------------------------------------------
let kio = document.getElementById('title');
li.textContent = 'Пятый пункт';
title.textContent = '"Мы продаем только подлинную технику Apple"';
console.log(title);
//------------------------------------------------------------
let Body = document.getElementsByTagName('body');
Body[0].style.background = 'url(./img/apple_true.jpg) center no-repeat';
//------------------------------------------------------------
let column = document.getElementsByClassName('column');
let adv = document.getElementsByClassName('adv');
column[1].removeChild(adv[0]);
//-----------------------------------------------------------
let items = document.getElementById('prompt');
items = prompt('Какое у вас к технике Apple? )', '');
console.log(items);
console.log(Body[0]);











