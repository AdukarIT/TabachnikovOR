//task 1
//function checker(a , b) {
//  var a;
//  var b;
//  console.log(b in a);
//}
//let myObj = {
//  name: "Vasya",
//  age: 18,
//  gender: "male"
//}
//task 2
//let twoPortions = {
//  name: "Draniki",
//  portions: 2,
//  recipe: {
//    potato: 16,
//    onion: 4,
//    sour: 3,
//    salt: 2,
//    pepper: 4
//    }
//  }
//  function cookingDream() {
//    var onePortion = "На одну порцию " + twoPortions['name'] + " требуется";
//    for (var key in twoPortions.recipe) {
//      onePortion = twoPortions.recipe[key] / twoPortions['portions'];
//      console.log(onePortion);
//    }
//}
//task 3
//let cylinder = {
//  radius: 15,
//  height: 100,
//  square: function() {
//    return 3.14 * (this.radius ** 2) * this.height;
//  }
//};
//console.log(cylinder.square());
//task 4
//let penguin = {
//  name: "The Amigos",
//  origin: "Happy Feet",
//  source: "wikipedia"
//}
//penguin.canFly = 0;
//penguin.sayHello = function() {
//  console.log("Hi, i am " + this.name + "!");
//};
//penguin.fly = function() {
//  if (this.canFly == 0) {
//    console.log("I can't fly :C")
//  } else {
//    console.log("I can fly!");
//  }
//}
//penguin.sayHello();
//penguin.fly();
