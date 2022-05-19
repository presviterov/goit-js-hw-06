let countSpan = 0;

const buttonDec = document.querySelector('[data-action="decrement"]');
const buttonInc = document.querySelector('[data-action="increment"]');
const spanIn = document.getElementById('value');

const handleClick1 = () => {
    spanIn.textContent = countSpan -= 1; 
    //console.log("-", countSpan);
};
const handleClick2 = () => {
    spanIn.textContent = countSpan += 1; 
    //console.log("+", countSpan);
};

buttonDec.addEventListener("click", handleClick1);
buttonInc.addEventListener("click", handleClick2);