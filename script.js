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

const calculator = {
    '+': (x, y) => x + y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => isFinite(x / y) ? x / y : 'Lol',
    '**': (x, y) => isFinite(x ** y) ? x ** y : 'Too big',
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
}

numberBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let enteredNumber = e.target.textContent;
        if(op === null) {
            (num1 === '0') ? num1 = enteredNumber : num1 += enteredNumber;
        }
        else {
            (num2 === '0') ? num2 = enteredNumber : num2 += enteredNumber
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
            switch(displayValue) {
                case 'Too big':
                    resetCalc();
                    alert('Too big');
                    display(num1);
                    break;
                case 'Lol':
                    display(displayValue);
                    break;
                default:
                    num1 = displayValue.toString();
                    op = e.target.textContent;
                    num2 = '';
                    (displayValue.toString().length > 16) ? display(displayValue.toFixed(14)) :
                    display(displayValue);
            }
        }
        else if(num1) op = e.target.textContent;
    })
})

equalsBtn.addEventListener('click', () => {
    if(num1 && op && num2) {
        displayValue = calculator.operate(num1, op, num2);
        switch(displayValue) {
            case 'Too big':
                resetCalc();
                alert('Too big');
                display(num1);
                break;
            case 'Lol':
                display(displayValue);
                break;
            default:
                num1 = displayValue.toString();
                num2 = '';
                (displayValue.toString().length > 16) ? display(displayValue.toFixed(14)) :
                display(displayValue);
        }
    }
})

allClearBtn.addEventListener('click', () => {
    resetCalc();
    display(num1);
})

deleteBtn.addEventListener('click', () => {
    if(num1 && op === null) {
        num1 = num1.slice(0, num1.length - 1);
        displayValue = num1;
    }
    else if(num2) {
        num2 = num2.slice(0, num2.length - 1);
        displayValue = num2;
    }
    display(displayValue);
})