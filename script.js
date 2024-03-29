
// Gathering Input

let displayValue = "";
let storedValue = null;
let currentOperator = null;
let operatorEntered = false;
const displayValueScreen = document.querySelector(".displayValueScreen");
const storedValueScreen = document.querySelector(".storedValueScreen");

const digitButtons = document.querySelectorAll(".digit");
digitButtons.forEach(
    (button) => {
        button.addEventListener("click",()=> {
            if (operatorEntered) {
                storedValue = displayValue;
                displayValue = button.textContent
                updateDisplay();
                operatorEntered = false;
            }

            else {
                displayValue += button.textContent;
                updateDisplay()
            };
        })
    }
)

function updateDisplay(){
    displayValueScreen.textContent = displayValue;
    storedValueScreen.textContent = storedValue;
}

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach(
    (button) => [
        button.addEventListener("click", ()=> {
            if (currentOperator === null) currentOperator = button.textContent;

            if (storedValue !== null) {
                displayValue = operate(+storedValue, +displayValue, currentOperator);
                storedValue = null;
                updateDisplay();
            }

            currentOperator = button.textContent;   
            operatorEntered = true;
        })
    ]
)

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", ()=> {
    storedValue = null;
    displayValue = '';
    currentOperator = null;
    updateDisplay();
})

const deleteButton = document.querySelector("#delete");
deleteButton.addEventListener("click", deleteDigit);

function deleteDigit(){
    displayValue = displayValue.slice(0, -1);
    updateDisplay();
}

// Processing Input

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", ()=> {
    displayValue = operate(+storedValue, +displayValue, currentOperator);
    storedValue = null;
    updateDisplay();
})



function operate(x, y, operation){
    switch (operation){
        case '+': 
            return add(x, y); 
        
        case '-':
            return subtract(x, y);

        case '*':
            return multiply(x, y)

        case '/':
            return divide(x, y);
    }
}

function add(x, y) {
    return (x + y);
}

function subtract(x, y) {
    return (x - y);
}

function multiply(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

