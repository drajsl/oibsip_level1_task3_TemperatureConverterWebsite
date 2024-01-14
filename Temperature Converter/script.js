const converter = document.querySelector('#converter');
const output = document.querySelector('.output');
const changeButton = document.querySelector('.changeButton');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

const swap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        document.title = "Converter °F is °C";
        converter.placeholder = "°F";

    } else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        document.title = "Converter °C is °F";
        converter.placeholder = "°C";
    };
};

const reset = () => {
    converter.value = '';
    output.innerHTML = '';
}

const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        output.style.color = "blue4"
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            output.innerHTML = `${converter.value}°C is ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            output.innerHTML = `${converter.value}°F is ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '') {
        output.style.color = "#FF4040"
        output.innerHTML = 'Please Write Value!';
    } else {
        output.style.color = "#FF4040"
        output.innerHTML = 'Wrong Value!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);