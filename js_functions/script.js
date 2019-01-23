// Задание 1
function numbers (a,b,c) {
var x = Math.min(a, b, c);
console.log(x);
}
// Задание 2
function secondsSum() {
  x = +prompt("Количество дней","");
  y = +prompt("Количество часов","");
  z = +prompt("Число минут","");
  a = x * 86400;
  b = y * 3600;
  c = z * 60;
  n = a + b + c;
  return(n);
}
// Задание 3
function factorial(n) {
if (n == 1) {
   return 1;
}
   return factorial(n - 1) * n;
}
// Задание 4
function reverseNumber(n) {
if (n < 10) {
            return String(n);
        }
        else {
            return String(n % 10 + reverseNumber((n - (n % 10)) / 10));
        }
    }
    console.log(reverseNumber(1234));
