let display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLast() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendNumber(number) {
    display.innerText += number;
}

function appendOperator(operator) {
    display.innerText += operator;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}
