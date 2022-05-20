const textInput = document.querySelector('#validation-input');
const inputLength = document.querySelector('input[data-length]');

textInput.addEventListener("blur", onInputBlur);

function onInputBlur (event) {
    if (event.currentTarget.value.length === Number(inputLength.dataset.length))
    {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
    else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
    
}