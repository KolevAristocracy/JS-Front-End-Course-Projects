function perfectNumber(number) {
    let sumOfDiveders = 0;

    for (let i = 1; i <= Math.floor(number / 2); i++) {
        if (number % i === 0) {
            sumOfDiveders += i
        }
    }

    if (sumOfDiveders === number) {
        console.log("We have a perfect number!");
    }
    else {
        console.log("It's not so perfect.");
    }
}

perfectNumber(7)
perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)
