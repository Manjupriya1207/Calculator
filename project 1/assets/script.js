document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let lastInput = "";
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function handleNumberClick(number) {
      if (currentInput === "0" || currentInput === "-0") {
        currentInput = number;
      } else {
        currentInput += number;
      }
      updateDisplay();
    }
  
    function handleOperatorClick(operator) {
      if (currentOperator !== "") {
        calculateResult();
      }
      currentOperator = operator;
      lastInput = currentInput;
      currentInput = "";
    }
  
    function handleEqualsClick() {
      calculateResult();
      currentOperator = "";
    }
  
    function calculateResult() {
      if (currentOperator === "+") {
        currentInput = (
          parseFloat(lastInput) + parseFloat(currentInput)
        ).toString();
      } else if (currentOperator === "-") {
        currentInput = (
          parseFloat(lastInput) - parseFloat(currentInput)
        ).toString();
      } else if (currentOperator === "*") {
        currentInput = (
          parseFloat(lastInput) * parseFloat(currentInput)
        ).toString();
      } else if (currentOperator === "/") {
        if (currentInput === "0") {
          currentInput = "Error";
        } else {
          currentInput = (
            parseFloat(lastInput) / parseFloat(currentInput)
          ).toString();
        }
      }
      updateDisplay();
    }
  
    function clearCalculator() {
      currentInput = "0";
      currentOperator = "";
      lastInput = "";
      updateDisplay();
    }
  
    document.getElementById("clear").addEventListener("click", clearCalculator);
    document
      .getElementById("zero")
      .addEventListener("click", () => handleNumberClick("0"));
    document
      .getElementById("one")
      .addEventListener("click", () => handleNumberClick("1"));
    document
      .getElementById("two")
      .addEventListener("click", () => handleNumberClick("2"));
    document
      .getElementById("three")
      .addEventListener("click", () => handleNumberClick("3"));
    document
      .getElementById("four")
      .addEventListener("click", () => handleNumberClick("4"));
    document
      .getElementById("five")
      .addEventListener("click", () => handleNumberClick("5"));
    document
      .getElementById("six")
      .addEventListener("click", () => handleNumberClick("6"));
    document
      .getElementById("seven")
      .addEventListener("click", () => handleNumberClick("7"));
    document
      .getElementById("eight")
      .addEventListener("click", () => handleNumberClick("8"));
    document
      .getElementById("nine")
      .addEventListener("click", () => handleNumberClick("9"));
    document
      .getElementById("add")
      .addEventListener("click", () => handleOperatorClick("+"));
    document
      .getElementById("subtract")
      .addEventListener("click", () => handleOperatorClick("-"));
    document
      .getElementById("multiply")
      .addEventListener("click", () => handleOperatorClick("*"));
    document
      .getElementById("divide")
      .addEventListener("click", () => handleOperatorClick("/"));
    document
      .getElementById("equals")
      .addEventListener("click", handleEqualsClick);
    document.getElementById("decimal").addEventListener("click", () => {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
      }
    });
  
    clearCalculator();
  });