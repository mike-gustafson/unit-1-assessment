const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const input = document.querySelector('input');

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = parseFloat(input.value);
    const currentValue = parseFloat(output.textContent);
    if (!isNaN(inputValue)) {
        const result = currentValue + inputValue;
        output.textContent = result;
        updateOutputColor(result);
    }
});

subtractButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = parseFloat(input.value);
    const currentValue = parseFloat(output.textContent);
    if (!isNaN(inputValue)) {
        const result = currentValue - inputValue;
        output.textContent = result;
        updateOutputColor(result);
    }
});

function updateOutputColor(result) {
    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = '';
    }
}