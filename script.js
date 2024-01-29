const screen = document.querySelector('.screen');
const allClearBtn = document.querySelector('.ac');
const deleteBtn = document.querySelector('.del');
const operatorBtns = document.querySelectorAll('.operator');
const numberBtns = document.querySelectorAll('.number');
const decimalBtn = document.querySelector('.point');


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