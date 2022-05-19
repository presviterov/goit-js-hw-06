const fontSizeControl = document.querySelector('#font-size-control');
const textOut = document.querySelector('#text');

function onChangeInput () {
    textOut.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener('input', onChangeInput);
fontSizeControl.dispatchEvent(new Event('input'));