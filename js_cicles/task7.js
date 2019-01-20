let x = " ";
let y ="#";
let z = x + y;
for (i = 0; i <= 8; i++) {
  for (k = 0; k <=1; k++) {
    z += z;
  }
  console.log(z);
  if (i % 2 == 0) {
    z = x + y;
  }
  else {
    z = y + x;
  }
}
