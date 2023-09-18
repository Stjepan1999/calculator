let buttons = document.querySelectorAll(".button")
let operatorButtons = document.querySelectorAll(".operator-button")
let equalButton = document.querySelector(".equal-button")
let clearButton = document.querySelector("#clear-button")
let deleteButton = document.querySelector("#delete-button")

let displayCurrentInput = document.querySelector(".display .current-input");
let displayPastInput = document.querySelector(".display .past-input")

let num1 = ""
let num2 = ""
let operator = ""
let currentInput = "";
let result = ""

equalButton.addEventListener("click", () => {
  if (num1 && operator && currentInput) { 
    num2 = currentInput;
    currentInput = "";
    result = operate(parseFloat(num1), parseFloat(num2), operator);

    displayCurrentInput.textContent = result;
    displayPastInput.textContent = `${num1} ${operator} ${num2} =`

    num1 = "";
    num2 = "";
    operator = "";
  }
})


operatorButtons.forEach(button =>
  button.addEventListener("click", () => {
    if (result && !currentInput) {
        num1 = result;
        operator = button.dataset.value;
        displayPastInput.textContent = `${num1} ${operator}`
    } else if (num1 === "" && currentInput) {
      num1 = currentInput;
      operator = button.dataset.value;
      currentInput = "";
      displayPastInput.textContent = `${num1} ${operator}`
    }

  }))


buttons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.value;
    displayCurrentInput.textContent = currentInput;
  })
});


clearButton.addEventListener("click", () => clearDisplay())

deleteButton.addEventListener("click", () => deleteNumber())

function clearDisplay() {
  currentInput = "";
  num1 = "";
  num2 = "";
  result = "";
  displayCurrentInput.textContent = currentInput;
  displayPastInput.textContent = "";
}


function deleteNumber() {
    if (currentInput) {
    currentInput = currentInput.slice(0, currentInput.length-1)
    displayCurrentInput.textContent = currentInput;}
}

function add(num1, num2) {
  let result = num1 + num2;
  return result
}

function subtract(num1, num2) {
  let result = num1 - num2;
  return result
}

function multiply(num1, num2) {
  let result = num1 * num2;
  return result
}

function divide(num1, num2) {
  let result = num1 / num2;
  return result
}

function operate(num1, num2, operator) {

  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
  }
}
