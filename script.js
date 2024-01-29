const screen = document.querySelector('.screen');

const allClearBtn = document.querySelector('.ac');

const deleteBtn = document.querySelector('.del');

const operatorBtns = document.querySelectorAll('.operator');

const numberBtns = document.querySelectorAll('.number');

const pointBtn = document.querySelector('.point');

const equalsBtn = document.querySelector('.equals');

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

const calculator = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y,
    '**': (x, y) => x ** y,
    '%': (x, y) => x % y,
    'operate': (x, op, y) => {
        x = parseFloat(x);
        y = parseFloat(y);
        return calculator[op](x, y);
    }
}

function display(value) {
    screen.textContent = value;
}
