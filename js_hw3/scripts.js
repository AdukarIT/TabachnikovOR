//task1
//function triangle (a,b,c) {
//	return a**2 + b**2 === c**2;
//}
//task2
//function repeat (str, n = 2) {
//   var result = "";
//   for (var i = 1; i <= n; i++)
//   result = result + str;
//   return result;
//}
//task3
//function tableCheck (table, human) {
//	var x = human % table > 0
//	if (human % 2) {
//       human++;
//	}
//    if (table * 2 == human) {
//       return "Vse ok"
//    }
//    else if (table < human / 2) {
//    	var answerNotEnough = (human /2 - table)
//    		return "ne hvataet" + answerNotEnough + "part";
//    }
//   else if (table > human / 2) {
//    	var answerEnough = table - human /2;
//    	return "hvataet" + "na" + answerEnough + "part";
//   }
//}
//task 4
//function grade (a) {
//  a > 0 && a <=10;
//  if (a == 0 || isNaN(a)) {
//  return "incorrect grade";
//} else if (a > 10) {
//  return "incorrect grade";
//} else if (a == 1 || a == 2) {
//  return "Low";
//} else if (a == 3 || a == 4) {
//  return "Satisfactory";
//} else if (a == 5 || a == 6) {
//  return "Average";
//} else if (a == 7 || a == 8) {
//  return "Good";
//} else if (a == 9 || a == 10) {
//  return "High";
//}
//}
//task5
//function numberInput (a) {
//  do {
//    var a = prompt("type number","");
//    console.log(a);
//  } while (a < 0 || a > 0);
//  return "you type 0";
//}
//task6
//function numberInput (a) {
//  var count = 0;
//  var a;
//  var summ = 0;
//  do {
//    a = prompt("type number","");
//    summ += +a;
//    count++;
//    console.log(summ);
//  } while (summ < 100);
//  return count;
//}
//task 7
//function simpleNumber(a) {
//  var a;
//  a = +prompt("number","");
//  if (a < 2) {
//    return false;
//  } for (var i = 2; i < a; i++) {
//    if (a % i == 0) {
//      return false;
//    }
//  } return true;
//}
//task 8
//function monthNumber(a) {
//  var a = +prompt("type number of month","");
//  if (a < 1 || a > 12) {
//    return false;
//  } else if (a > 2 && a < 6) {
//    return "spring";
//  } else if (a > 5 && a < 9) {
//    return "summer";
//  } else if (a > 8 && a < 12) {
//    return "autumn";
//  } else return "winter";
//}
//task 9
//function numbers(a) {
//  var a = 99;
//  for (var i = 99; i >= 10; i--)
//  if (i % 7 == 0) {
//    console.log(i);
//  } else if (i % 10 == 7) {
//    console.log(i);
//  }
//}
//task 10
//function getDeviders(number) {
//	if (number < 2 || number > 20) return;
//	var counter = 0;
//	for (var i = 2; i <= number; i++) {
//		if (!(number % i)) {
//			console.log("# " + i);
//			counter++;
//		}
//	}
//	return "this is counter: " + counter;
//}
//function getDevidersForRange() {
//	for (var i = 2; i <=20; i++) {
//		console.log(getDeviders(i));
//	}
//}
//task 11
//function getDeviders(number) {
//	if (number < x || number > y) return;
//	var counter = 0;
//	for (var i = x; i <= number; i++) {
//		if (!(number % i)) {
//			console.log("# " + i);
//			counter++;
//		}
//	}
//	return "this is counter: " + counter;
//}
//function getDevidersForRange() {
//	for (var i = x; i <=y; i++) {
//		console.log(getDeviders(i));
//	}
//}
//task 12
//function bytes (size,unit) {
//  var size;
//  var unit;
//  size = +prompt("size","");
//  unit = prompt("string","");
//  if (unit == "Кб") {
//    size *= 1000;
//    console.log(size + " байт");
//  } else if (unit == "Мб") {
//    size *= 1e+6;
//    console.log(size + " байт");
//  } else if (unit == "Гб") {
//    size *= 1e+9;
//    console.log(size + " байт");
//}   else {
//  return "wrong input";
//}
//}
//task 15
//function words(n) {
//  var pencil = " карандаш";
//  if ((n > 4 && n < 20) || (!(n % 10)) || ((n % 10) >= 5)) {
//    return n + pencil + "ей";
//  } else if ((n % 10) == 1) {
//    return n + pencil;
//  } else {
//    return n + pencil + "a";
//  }
//}
//task 16
//function sumSquare(num) {
//  for (var x = 0; x <= 9; x++) {
//    for (var y = x; y <= 9; y++) {
//      if (num == y * y + x * x) {
//        console.log(y);
//        console.log(x);
//        return "possible"
//      }
//    }
//  }
//  return "impossible";
//}
