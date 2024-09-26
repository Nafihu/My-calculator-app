const display = document.getElementById('display');
let inputA = null;
let operator = null;

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
    inputA = null;
    operator = null;
}

function setOperator(op) {
    if (inputA === null) {
        inputA = parseFloat(display.value);
        operator = op;
        display.value = "";
    }
}

function calculate() {
    if (inputA !== null && operator !== null) {
        const inputB = parseFloat(display.value);
        let result;

        if (operator === '+') {
            result = inputA + inputB;
        } else if (operator === '-') {
            result = inputA - inputB;
        } else if (operator === '*') {
            result = inputA * inputB;
        } else if (operator === '/') {
            if (inputB === 0) {
                display.value = "Error: Division by 0";
                return;
            }
            result = inputA / inputB;
        }

        display.value = result;
        inputA = null;
        operator = null;
    }
}

function add() {
    setOperator('+');
}

function subtract() {
    setOperator('-');
}

function multiply() {
    setOperator('*');
}

function divide() {
    setOperator('/');
}
