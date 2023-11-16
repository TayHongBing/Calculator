function  add() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}
  
function  subtract() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber - secondNumber;
  alert("The result is: " + result);
}

function  multiply() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber * secondNumber;
  alert("The result is: " + result);
}

function  divide() {
  const firstNumber = parseFloat(prompt("Enter the first number: "));
  const secondNumber = parseFloat(prompt("Enter the second number: "));
  const result = firstNumber / secondNumber;
  alert("The result is: " + result);
}

function simpleInterest() {
  const principle = parseFloat(prompt("Enter the principle: "));
  const rate = parseFloat(prompt("Enter the rate: "));
  const time = parseFloat(prompt("Enter the time: "));
  const result = (principle * rate * time) / 100;
  alert("The result is: " + result);
}

function compoundInterest() {
  const principle = parseFloat(prompt("Enter the principle: "));
  const rate = parseFloat(prompt("Enter the rate: "));
  const time = parseFloat(prompt("Enter the time: "));
  const result = principle * (Math.pow((1 + rate / 100), time));
  alert("The result is: " + result);
}