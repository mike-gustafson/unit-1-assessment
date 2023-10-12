const output = document.getElementById('output');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const input = document.querySelector('input');
const slider = document.querySelector('.input-slider');
const sliderContainer = document.getElementById('slider-container');
let currentNumber = 1;

function updateOutputValue() {
    if (currentNumber === 0) {
        output.textContent = currentNumber;
    } else {
        if (slider.checked) {
            let resultChar = String.fromCharCode((Math.abs(currentNumber) % 26) + 96);
            if (((Math.abs(currentNumber) % 26) + 96) === 96) {
                resultChar = 'Z'
            }
            output.textContent = resultChar.toUpperCase();
        } else {
            output.textContent = currentNumber;
        }
        updateOutputColor();
    }
}

addButton.addEventListener('click', function (e) {
    e.preventDefault();
    const inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        currentNumber += inputValue;
        updateOutputValue();
    }
});

subtractButton.addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = parseFloat(input.value);
    if (!isNaN(inputValue)) {
        currentNumber -= inputValue;
        updateOutputValue();
    }
});

sliderContainer.addEventListener('change', function () {
    updateOutputValue();
});

function updateOutputColor(result) {
    if (currentNumber < 0) {
        output.style.color = 'red';
    } else {
        output.style.color = '';
    }    
}