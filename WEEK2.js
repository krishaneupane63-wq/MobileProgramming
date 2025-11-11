var a = 5;
var b = 10;

function add() {
  var c = a + b;
  document.getElementById("result").innerHTML = "The sum is: " + c;
}

function multiply() {
  var c = a * b;
  document.getElementById("result").innerHTML = "The product is: " + c;
}

function subtract() {
  var c = a - b;
  document.getElementById("result").innerHTML = "The difference is: " + c;
}

function divide() {
  var c = a / b;
  document.getElementById("result").innerHTML = "The quotient is: " + c;
}
