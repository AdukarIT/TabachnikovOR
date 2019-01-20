var apartment = prompt("Your apartments's number", "");
  if (apartment <= 0 || apartment > 100) {
    alert("Incorrect number");
    console.log("Incorrect number");
  } else if (apartment > 0 && apartment <= 20) {
    console.log("Front door #1");
  } else if (apartment >= 21 && apartment <= 40) {
    console.log("Front door #2");
  } else if (apartment >= 41 && apartment <= 60) {
    console.log("Front door #3");
  } else if (apartment >= 61 && apartment <= 80) {
    console.log("Front door #4");
  } else if (apartment >= 81 && apartment <= 100) {
    console.log("Front door #5");
  };
