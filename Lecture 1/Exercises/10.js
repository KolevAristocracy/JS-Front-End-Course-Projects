function sameNumber(number) {
    let sum = 0;
    let result = false;
    let numbers = String(number);
    const firstNum = numbers[0];

    for (num of numbers) {
        if (num === firstNum) result = true
        else result = false

        sum += Number(num)
    }
    console.log(result);
    console.log(sum);
}


sameNumber(2222222)