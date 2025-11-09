// function factorialDivision(numOne, numTwo) {

//     const a = factorialNumOne(numOne)
//     const b = factorialNumTwo(numTwo)
//     const result = a / b

//     console.log(result.toFixed(2));


//     function factorialNumOne(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * factorialNumOne(n - 1)
//         }
//     }

//     function factorialNumTwo(n) {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * factorialNumTwo(n - 1)
//         }

//     }
// }


// Lecture's way
function factorialDivision(numOne, numTwo) {
    function factorial(n) {
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    const result = factorial(numOne) / factorial(numTwo);
    console.log(result.toFixed(2));
    
}

factorialDivision(5, 2)
factorialDivision(6, 2)
