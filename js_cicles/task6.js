var x = 0;
var y = 1;
console.log(x);
console.log(y);
for (var i = 3; i <= 15; i++) {
    var z = x + y;
    x = y;
    y = z;
    console.log(z);
}

// объявления переменных лучше группировать
// задача не выполнена, выведется не 15 чисел
