const screen = document.querySelector('.screen');

const allClearBtn = document.querySelector('.ac');

const deleteBtn = document.querySelector('.del');

const operatorBtns = document.querySelectorAll('.operator');

const numberBtns = document.querySelectorAll('.number');

const pointBtn = document.querySelector('.point');

const equalsBtn = document.querySelector('.equals');

let num1 = '0';

let op = null;

let num2 = '';

let displayValue;

let expressionEvaluated = false;

const calculator = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '×': (x, y) => isFinite(x * y) ? x * y : 'Too big',
    '÷': (x, y) => isFinite(x / y) ? x / y : 'Lol',
    '^': (x, y) => isFinite(x ** y) ? x ** y : 'Too big',
    '%': (x, y) => isFinite(x % y) ? x % y : 'Lol' ,
    'operate': (x, op, y) => {
        x = parseFloat(x);
        y = parseFloat(y);
        return calculator[op](x, y);
    }
}

function display(value) {
    screen.textContent = value;
}

function resetCalc() {
    num1 = '0';
    op = null;
    num2 = '';
    displayValue = '0';
    expressionEvaluated = false;
    display(displayValue);
}

function handleCases(val) {
    switch(val) {
        case 'Too big':
            resetCalc();
            alert('Too big');
            break;
        case 'Lol':
            display(val);
            expressionEvaluated = false;
            break;
        default:
            if(Number.isInteger(val) && val.toString().length > 13) {
                alert(val);
                resetCalc();
                return;
            }
            num1 = val.toString();
            num2 = '';
            (val.toString().length > 13) ? display(val.toFixed(11)) :
            display(val);
            expressionEvaluated = true;
    }
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let enteredNumber = e.target.textContent;
        if(num1.length < 13 && op === null) {
            num1 === '0' ? num1 = enteredNumber : num1 += enteredNumber;
        }
        else if(num2.length < 13 && op) {
            num2 === '0' ? num2 = enteredNumber : num2 += enteredNumber;
        }
        num2 ? displayValue = num2 : displayValue = num1;
        display(displayValue); 
    })
})

pointBtn.addEventListener('click', () => {
    if(num1 && !num1.includes('.') && op === null) {
        num1 += '.';
        displayValue = num1;
    }
    else if(num2 && !num2.includes('.')) {
        num2 += '.';
        displayValue = num2;
    }
    display(displayValue);
})

operatorBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(num1 && op && num2) {
            displayValue = calculator.operate(num1, op, num2);
            handleCases(displayValue);
            if(expressionEvaluated) op = e.target.textContent;
        }
        else if(num1) op = e.target.textContent;
    })
})

equalsBtn.addEventListener('click', () => {
    if(num1 && op && num2) {
        displayValue = calculator.operate(num1, op, num2);
        handleCases(displayValue);
    }
})

allClearBtn.addEventListener('click', resetCalc)

deleteBtn.addEventListener('click', () => {
    if(num1 && op === null) {
        num1 = num1.slice(0, num1.length - 1);
        if(num1 === '') num1 = '0';
        displayValue = num1;
        display(displayValue);
    }
    else if(num2) {
        num2 = num2.slice(0, num2.length - 1);
        displayValue = num2;
        display(displayValue);
    }
})