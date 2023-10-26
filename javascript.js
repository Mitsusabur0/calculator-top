function add(x, y) {
    return (x + y);
}

function substract(x, y) {
    return (x - y);
}

function mult(x, y) {
    return (x * y);
}

function divide(x, y) {
    return (x / y);
}

function operate(operator, num1, num2) {
    if (operator === "+") {
        add(num1, num2);
    } else if (operator === "-") {
        substract(num1, num2);
    } else if (operator === "*") {
        mult(num1, num2);
    } else if (operator === "/") {
        divide(num1, num2)
    } 
}

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".num-button");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

backspace.addEventListener("click", () => {
    screen.value = screen.value.substring(0, screen.value.length-1);
})

clear.addEventListener("click", () => {
    screen.value = "";
})

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        screen.value += button.innerHTML;
    });
})




