'use strict';


//Task 1. Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.

function cloneInput(){
	var input = document.getElementById('clone');
	var button = document.getElementById('button');

	button.addEventListener('click', function(e){
		var cloneInput = input.cloneNode();
		document.body.appendChild(cloneInput);
	});
}
cloneInput();



//Task 2. Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице добавьте ей класс bordered,
//при втором клике удалите класс bordered и добавьте класс striped,
//при третьем клике удалите класс striped и добавьте класс highlight.

function changeClass(){
	var table = document.getElementById('table');

	function change(e){
		if (table.className == 'bordered') table.className = 'striped';
		else if (table.className == 'striped') table.className = 'highlight';
		else table.className = 'bordered';
	}
	table.addEventListener('click', change);
}
changeClass();



//Task 3.  Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered,
//при выборе второго отключается bordered и включается striped, при выборе третьего включается highlight и отключается striped.

function changeClass(){
	var table = document.getElementById('table');
  var form = document.getElementById('form');
	var radioOne = document.getElementById('radioOne');
	var radioTwo = document.getElementById('radioTwo');
	var radioThree = document.getElementById('radioThree');

  form.addEventListener('click', function(e){
		if (radioOne.checked == true) table.className = 'bordered'; // проверка на тру излишня
    else if (radioTwo.checked == true) table.className = 'striped';
    else if (radioThree.checked == true) table.className = 'highlight';
  });
  }
changeClass();


//Task 4. Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст.
//Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.

function alertButtons(){
	var button = document.getElementById('alert');
	var cancel = document.getElementById('cancel');

	button.addEventListener('click', function(e){
		alert(this.value);
	});

	cancel.addEventListener('click', function(e){
		button.disabled = true; // нужно было отключить событие, а не выключить кнопку
	});
}
alertButtons();

//Task 5. Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.


//Task 6.  Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия:
//при наведении мыши на картинку, изображение будет заменяться другим изображением.
//При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.

function mouseover(){
	var img = document.getElementById('img');

	img.addEventListener('mouseover', function(e){
		img.src = 'https://zabavnik.club/kartinki/271-kartinki-png';
	});
	img.addEventListener('mouseout', function(e){
		img.src = 'https://zabavnik.club/wp-content/uploads/2018/02/kartinki_png_4_01075119-1024x1024.jpg'; // забавник, говорите)
	});
}
mouseover(); // так хорошо решали, почему 5 и 7 не сделали?

//Task 7. Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах
//и всплывает над контентом. Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
