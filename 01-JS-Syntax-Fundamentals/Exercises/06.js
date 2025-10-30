// function sumDigits(number) {
//     let sum = 0;
//     let numbers = String(number);

//     for (num of numbers) {
//         sum += Number(num);
//     }
//     console.log(sum)
// }

// Lecture's way

function sumDigits(num) {
    let sum = 0;
    while (num !== 0) {
        const lastDigit = num % 10;
        sum += lastDigit;

        // IMPORTANT: In JS there is no integer division
        num = Math.floor(num / 10); // or Math.trunc
    }

    console.log(sum)

}

sumDigits(245678)
sumDigits(97561)
sumDigits(543)