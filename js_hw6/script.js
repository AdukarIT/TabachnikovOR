//task 1
//function numbers(len) { // раскомментируйте код
//  var array = [];
//  for (i = 0; i < len; i++) {
//   array[i] = ((Math.random() * 10) + 1).toFixed(3);
//   console.log(array);
// }
//   var newArray = [];
//   for (i = 0; i < len; i++) {
//      newArray[i] = {};
//      newArray.initial = array[i];
//      newArray.sqrt = Math.sqrt(array[i]);
//      newArray.floor = function() {
//        if (array[i] % array[i] < 5)  {
//          return true;
//        } floor.function();
//      };
//      newArray.ceil = function() {
//        if (array[i] % array[i] >= 5)  {
//          return true;
//        } else {
//          return false;
//        };  ceil.function();
//    }
//  }
//}
//task 3
//function palio() {
//  var a = prompt("something", "");
//  var n = a.toString();
//  var array = [];
//  for (i = 0; i < n.length; i++) {
//   array[i] = n.charAt(i);
// }
//  var newArray = array.slice();
//  newArray.reverse();
//  console.log(array);
//  console.log(newArray);
//  for (i = 0; i < n.length; i++) {
//   if (array[i] == newArray[i]) {
//   console.log('true');
// } else {
//   console.log('false');
//  }
// }
//}
//task 6
//function upperCaseStr() {
//  var str = prompt("something" , "");
//  var array = str.split(" ");
//  var answer = "";
//  console.log(array);
//  console.log(array.length);
//   for (i = 0; i < array.length; i++) {
//    var a = array[i];
//    var first = a.substring(0,1).toUpperCase();
//    var others = a.substring(1, a.length);
//    answer += first + others + " ";
//  }
//  console.log(answer);
//}
//upperCaseStr();
//task 7
function letters(str) {
  var str = prompt("something" , "");

}
//task 8
//function ruDay() {
//  var now = new Date();
//  console.log(now.getDay());
//  if (now.getDay() == 0) {
//    return "Воскресенье";
//  } else if (now.getDay() == 1) {
//    return "Понедельник";
//  } else if (now.getDay() == 2) {
//    return "Вторник";
//  } else if (now.getDay() == 3) {
//    return "Среда";
//  } else if (now.getDay() == 4) {
//    return "Четверг";
//  } else if (now.getDay() == 5) {
//    return "Пятница";
//  } else {
//    return "Суббота";
//  }
//}
//task 9
//function typeDate() {
//  var a = +prompt("YYYY" , "");
//  var b = +prompt("MM" , "");
//  var c = +prompt("DD" , "");
//  var insertedDate = new Date(a, b - 1, c);
//  console.log(insertedDate);
//  if (insertedDate.getDay() == 0) {
//      return "Воскресенье";
//    } else if (insertedDate.getDay() == 1) {
//      return "Понедельник";
//    } else if (insertedDate.getDay() == 2) {
//      return "Вторник";
//    } else if (insertedDate.getDay() == 3) {
//      return "Среда";
//    } else if (insertedDate.getDay() == 4) {
//      return "Четверг";
//    } else if (insertedDate.getDay() == 5) {
//      return "Пятница";
//    } else {
//      return "Суббота";
//    }
//}
//task 10
//function typeDate() {
//  var a = +prompt("YYYY" , "");
//  var b = +prompt("MM" , "");
//  var c = +prompt("DD" , "");
//  var insertedDate = new Date(a, b - 1, c);
//  var now = new Date();
//  var nextHappyBirthsday = new Date(now.getFullYear() + 1, b - 1, c);
//  console.log(insertedDate);
//  console.log(now);
//  console.log(nextHappyBirthsday);
//  var elevenKDaysInMS = 100 * 60 * 60 * 24 * 1000 * 11;
//  console.log(elevenKDaysInMS);
//  nextHappyBirthsday.setMilliseconds(elevenKDaysInMS);
//  return nextHappyBirthsday;
//}
//task 11
//var array = [];
//function numbers(len) {
//  for (i = 0; i < len; i++) {
//   array[i] = Math.floor(Math.random() * 10);
//   console.log(array);
// } try {
// for (i = 0; i < len; i++) {
//   checker(array[i]);
//  }
//} catch(err) {
//  console.log(err);
//} finally {
//  console.log("Массив прокручен")
// }
//}
//function checker() {
//  var x = Math.sqrt(array[i]);
//  if (Number.isInteger(x) == true) {
//    console.log(Math.sqrt(array[i]) + " Успех");
//  } else {
//    throw new Error("Ошибочка вышла!");
// }
//}
