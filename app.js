const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const input = document.querySelector('input');

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = input.value;
    const currentValue = output.textContent;
    if (!isNaN(inputValue)) {
        const result = parseFloat(currentValue) + parseFloat(inputValue);
        output.textContent = result;
        updateOutputColor(result);
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
    }
});

function updateOutputColor(result) {
    if (result < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = '';
    }
}