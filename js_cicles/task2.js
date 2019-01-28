var car = prompt("Марка автомобиля","");
switch(car) {
  case "BMW":
  case "bmw":
  console.log(car + "\nGermany");
  break;
  case "Toyota":
  case "toyota":
  case "TOYOTA":
  console.log(car + "\nJapan");
  break;
  case "Mercedes":
  case "MERCEDES":
  case "mercedes":
  console.log(car + "\nGermany");
  break;
  case "Lexus":
  case "LEXUS":
  case "lexus":
  console.log(car + "\nJapan");
  break;
  case "Renault":
  case "RENAULT":
  case "renault":
  console.log(car + "\nFrance");
  break;
  case "Honda":
  case "HONDA":
  case "honda":
  console.log(car + "\nJapan");
  break;
}

// не хватает дефолтного вывода
