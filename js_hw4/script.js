//task 1
//function getRandomArray(len) { // уберрите комментарии
//  var randomArr = [];
//  for (let i = 0; i < len; i++) {
//    randomArr[i] = Math.random();
//  } return randomArr;
//}
//task 2
//function getRandomArray(len) {
//  var randomArr = [];
//  var sum = 0;
//  var a;
//  for (let i = 0; i < len; i++) {
//    randomArr[i] = Math.random();
//    console.log(randomArr);
//    sum += randomArr[i];
//    a = sum / len;
//    console.log("average" + " " + a);
//  } for (i = 0; i < len; i++) {
//    if (a > randomArr[i]) {
//      console.log(randomArr[i]);
//    }
//  }
//}
//task 3
//function getRandomArray(len) {
//  var randomArr = [];
//  for (let i = 0; i < len; i++) {
//    randomArr[i] = Math.random();
//    randomArr.sort();
//    console.log(randomArr);
//  } var lowestFromArr = randomArr.slice(0,2);
//    return (lowestFromArr);
//}
//task 4
//function getRandomArray(len) {
//  var randomArr = [];
//  var a = 0.3;
//  function compareNumeric(a, b) {
//  return a - b;
//}
//  for (let i = 0; i < len; i++) {
//    randomArr[i] = Math.random();
//    randomArr.sort(compareNumeric);
//    console.log(randomArr);
//    if (a > randomArr[0]) {
//        randomArr.shift(0);
//    } else {
//      continue;
//    }
//      console.log(randomArr);
//  }
//}
//task 5
