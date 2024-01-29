const screen = document.querySelector('.screen');

const allClearBtn = document.querySelector('.ac');

const deleteBtn = document.querySelector('.del');

const operatorBtns = document.querySelectorAll('.operator');

const numberBtns = document.querySelectorAll('.number');

const decimalBtn = document.querySelector('.point');

let num1 = '';

let op = null;

let num2 = '';

let displayValue;

numberBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let number = e.target.textContent;
        op === null ? num1 += number : 
        num2 += number;
        num2 ? displayValue = num2 :
        displayValue = num1;
        display(displayValue); 
    })
})

function add(x,y) {
    return x + y;
}

function subtract(x,y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x,y) {
    return x / y;
}

function pow(x,y) {
    return x ** y;
}

function getRemainder(x,y) {
    return x % y;
}

function display(value) {
    screen.textContent = value;
}
