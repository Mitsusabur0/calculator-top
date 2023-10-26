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
        return add(num1, num2);
    } else if (operator === "-") {
        return substract(num1, num2);
    } else if (operator === "*") {
        return mult(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2)
    } 
}

const screen = document.querySelector(".screen");
const numberButtons = document.querySelectorAll(".num-button");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const equals = document.querySelector(".equals");


equals.addEventListener("click", () => {
    const operation = screen.value;
    const regex1 = /^\d+/g;
    const regex2 = /\D/g;
    const regex3 = /\d+$/g;
    const x = operation.match(regex1)[0];
    const operator = operation.match(regex2)[0];
    const y = operation.match(regex3)[0];

    screen.value = operate(operator, parseInt(x), parseInt(y));

})















clear.addEventListener("click", () => {
    screen.value = "";
})

backspace.addEventListener("click", () => {
    screen.value = screen.value.substring(0, screen.value.length-1);
})

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        screen.value += button.innerHTML;
    });
})




