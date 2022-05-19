const textInput = document.querySelector("#name-input");
const textSpan = document.querySelector("#name-output");

textInput.addEventListener('input', (event) => {
    if (textInput.value === '') {
        return textSpan.textContent = "Anonymous";
    }
        return textSpan.textContent = event.currentTarget.value;
});

