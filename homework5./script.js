//homework5
function getCalcCircle(p, r) {
    return p * Math.PI * r;
  }
  let number = getCalcCircle(2, 2);
  console.log(number.toFixed(2));
  function getYardageCircle(e, w) {
    return Math.pow(e, w);
  }
  let t = getYardageCircle(6, 6);
  console.log(t.toFixed(2));
  function getSum(g, b) {
    return (g + b) / 2;
  }
  let sum = getSum(20, 30);
  console.log(sum);
  
  const x = +prompt("Enter a number x");
  const y = +prompt("Enter a number y");
  const action = prompt("Enter a math sign");
  function getCalc(x, y, action) {
    switch (action) {
      case "+":
        return x + y;
  
      case "-":
        return x - y;
  
      case "*":
        return x * y;
  
      case "/":
        return x / y;
  
      case "%":
        return x % y;
  
      case "**":
        return x ** y;
  
      default:
        alert("Enter a math sign");
        console.log("Enter a math sign");
    }
  }
  console.log(getCalc(x, y, action));
  