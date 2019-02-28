'use strict';

// Задача 1. Дан элемент #elem. Добавьте ему класс "www"

let newEle = document.createElement('div');
newEle.className = "www";
document.body.appendChild(newDiv);

// Задача 2. Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс

function removeClass(doc, tag) {
  let findedTags = doc.getElementsByTagName(tag);
  for (var i = 0; i < findedTags.length; i++) {
    if (findedTags[i].className == "www") {
      findedTags[i].className = ""; // вы удалили все классы, а не класс www
    }
  }
}
removeClass(document.body, "div")

// Задача 3. Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега,
// а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body

function recursiveSearchTags(doc, tag) {
  let result = doc.getElementsByTagName(tag);
  result = [].slice.call(result); // можно сразу возвращать результат
  return result
};
recursiveSearchTags(document.body, 'section');

// Задача 4. Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// Сделайте так, чтобы четные позиции имели красный фон.

let array = ["Love", "Hope", "Faith", "Glory", "Honor", "Kind", "Grace"];

function listFiller(arr) {
  let parent = document.body;
  let ul = document.createElement("ul");
  for (var i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    let text = document.createTextNode(arr[i]);
    if (i % 2) {
      li.setAttribute("style", "background-color: #f00; width: 100px");
    }
    li.appendChild(text);
    ul.appendChild(li);
    parent.appendChild(ul);
  }
}
listFiller(array);

// Задание 5. Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'

eleSearcher = document.querySelector(".task-five");
let eleUndoTarget = searchDiv.previousElementSibling; // странное название переменной
let contentDivUp = eleUndoTarget.innerHTML; // странное название переменной
let insertText = eleUndoTarget.appendChild(document.createTextNode("!"));
document.body.insertBefore(eleUndoTarget, searchDiv);

// Задача 6. Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды)
// внутри элемента div и оборачивает текст в параграф

function wrapInParagraph(doc, tagClass) {
  let para = document.createElement("p"); // странное название переменной
  let classSearcher = document.querySelector(tagClass);
  let nextTag = classSearcher.lastElementChild;
  let content = nextTag.innerHTML;
  let arr = []; // странное название переменной
  arr.push(content);
  for (var i = 0; i < arr.length; i++) {
    let text = document.createTextNode(arr[i]);
    para.appendChild(text);
    nextTag.appendChild(para);
    classSearcher.appendChild(nextTag);
    doc.appendChild(classSearcher);
  }
}
wrapInParagraph(document.body, ".task-six");

// Задача 7. Реализуйте функцию normalizeClassNames, которая нормализует имена классов для всех элементов на странице.
// В данном случае это означает что происходит преобразование всех классов написанных используя kebab нотацию в camelCase нотацию: text-center => textCenter

function normalizeClassNames() {
  let searchClass = document.body.getElementsByTagName("*");
  for (var i = 0; i < searchClass.length; i++) {
    let item = searchClass[i];
    if (item.classList.length > 0) {
      for (var j = 0; j < item.classList.length; j++) {
        let tempClass = item.classList[j];
        let arrClassName = tempClass.split("");
        for (var k = 0; k < arrClassName.length; k++) {
          if (arrClassName[k] == "-") {
            delete arrClassName[k];
            let tempStr = arrClassName[k + 1];
            let tempSrtUpper = String(tempStr.toUpperCase());
            arrClassName[k + 1] = tempSrtUpper;
          }
        }
        let strClass = arrClassName.join("");
        item.className = strClass;
      }
    }
  }
}
normalizeClassNames();
