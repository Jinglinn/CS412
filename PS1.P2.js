const expression = string  => {
    operator = string.charAt(1)
    a = string[0]
    b = string[2]
    switch (operator) {
        case "+":
            return  a + b;
            break;
        case "-":
            return a - b;
            break;
        case "/":
            return a / b;
            break;
        case "*":
            return a * b;
            break;
        case "%":
            return a % b;
            break;
        case "^":
            return Math.pow(a, b);
            break;
    }
}

console.log(expression('2^8'))