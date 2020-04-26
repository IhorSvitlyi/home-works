//homework3

const userName = prompt("What is your name?");
const userAge = +prompt("How old are you?");
const userDrink = confirm("Do you drink?");
if (
  userAge === 0 ||
  userName === null ||
  userName === "" ||
  Number.IsNaN(userAge)
) {
  console.error("Invalid User Data");
}
if (!userDrink) {
  alert("you are awesome!!");
}
if (userDrink && userAge < 18) {
  alert("Are you serious? I will tell your Mom!!");
} else if (userDrink && userAge > 40) {
  alert("do not abuse alcohol");
} else {
  if (userDrink && userAge > 18 && userAge < 40) {
    alert("Do not mix beer with vodka");
  }
}
console.log(userAge, userName, userDrink);

