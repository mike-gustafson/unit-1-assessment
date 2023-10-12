const outputElement = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const inputElement = document.querySelector('input');

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = parseFloat(inputElement.value);
    const currentValue = parseFloat(outputElement.textContent);
    if (!isNaN(inputValue)) {
        const result = currentValue + inputValue;
        outputElement.textContent = result;
        updateOutputColor(result);
    }
});

subtractButton.addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = parseFloat(inputElement.value);
    const currentValue = parseFloat(outputElement.textContent);
    if (!isNaN(inputValue)) {
        const result = currentValue - inputValue;
        outputElement.textContent = result;
        updateOutputColor(result);
    }
});

// Function to update the output color
function updateOutputColor(result) {
    if (result < 0) {
        outputElement.style.color = 'red';
    } else {
        outputElement.style.color = ''; // Reset to the default color
    }
}