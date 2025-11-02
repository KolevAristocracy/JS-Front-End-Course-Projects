function simpleCalculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case "multiply":
            result = multiply(num1, num2)
            break;

        case "divide":
            result = divider(num1, num2)
            break;

        case "add":
            result = add(num1, num2)
            break;

        case "subtract":
            result = subtract(num1, num2)
            break;

        default:
            break;
    }

    console.log(result);
    

    function multiply(a, b) {
        return a * b
    }

    function divider(a, b) {
        return a / b
    }

    function add(a, b) {
        return a + b
    }

    function subtract(a, b) {
        return a - b
    }
}

simpleCalculator(5, 5, 'multiply')

simpleCalculator(40, 8, 'divide')

simpleCalculator(12, 19, 'add')

simpleCalculator(50, 13, 'subtract')

