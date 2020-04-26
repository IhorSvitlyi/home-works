//homework4
console.log("START");
let i;
let number = Math.floor(Math.random() * 10);
console.log(number);

do {
  let i = +prompt("choose a correct number");
  if (i === number) break;
  if(i === 0 || Number.isNaN(i)){
      break;
  }
  console.log(i);
} while (i = 0 && i <= 10 && i++);

console.log("END");

const z = +prompt("enter number");
let triangle = "";
for (let y = 0; y < z; y++) {
  triangle += "*";
  console.log(triangle);
}


const i = 10;
console.log("START");
for (let a = 0; a < i; a++) {
  let triangle = "";

  for (let s = 0; s <= a; s++) triangle += "*";
  console.log(triangle);
}
console.log("END");
