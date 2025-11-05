function factorialDivision(numOne, numTwo) {

    const a = factorialNumOne(numOne)
    const b = factorialNumTwo(numTwo)
    const result = a / b

    console.log(result.toFixed(2));


    function factorialNumOne(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorialNumOne(n - 1)
        }
    }

    function factorialNumTwo(n) {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorialNumTwo(n - 1)
        }

    }
}

factorialDivision(5, 2)
factorialDivision(6, 2)
