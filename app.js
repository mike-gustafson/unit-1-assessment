const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const input = document.querySelector('input');
let currentChar = 'a';
addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = input.value;
    const currentValue = output.textContent;
    if (!isNaN(inputValue)) {
        const result = parseFloat(currentValue) + parseFloat(inputValue);
        output.textContent = result;
        updateOutputColor(result);
    } else {
        if (currentChar === 'z') {
            currentChar = 'a';
        } else {
            currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
        }
        output.style.color = '';
        output.textContent = currentChar;
    }
});

subtractButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = input.value;
    const currentValue = output.textContent;
    if (!isNaN(inputValue)) {
        const result = parseFloat(currentValue) - parseFloat(inputValue);
        output.textContent = result;
        updateOutputColor(result);
    } else {
        if (currentChar === 'a') {
            currentChar = 'z';
        } else {
            currentChar = String.fromCharCode(currentChar.charCodeAt(0) - 1);
        }
        output.style.color = '';
        output.textContent = currentChar;
    }
});

function updateOutputColor(result) {
    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = '';
    }
}