// function perfectNumber(number) {
//     let sumOfDiveders = 0;

//     for (let i = 1; i <= Math.floor(number / 2); i++) {
//         if (number % i === 0) {
//             sumOfDiveders += i
//         }
//     }

//     if (sumOfDiveders === number) {
//         console.log("We have a perfect number!");
//     }
//     else {
//         console.log("It's not so perfect.");
//     }
// }


// Lecture's way
function perfectNumber(number) {
    function getDivisor() {
        const result = [];
        const sqrt = Math.sqrt(number);

        for (let i = 1; i < sqrt; i++) {
            if (number % i === 0) {
                result.push(i);
                result.push(number / i);
            }
        }
        if (sqrt === Math.trunc(sqrt)) result.push(sqrt);
        return result
    }

    function sum(array) {
        let sum = 0;
        for (const el of array) sum += el;

        return sum
    }

    function isPerfect() {
        return 2 * n === sum(getDivisor());
    }

    console.log(isPerfect() ? "We have a perfect number!" : "It's not so perfect.")
}

perfectNumber(7)
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)
