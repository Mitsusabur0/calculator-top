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
