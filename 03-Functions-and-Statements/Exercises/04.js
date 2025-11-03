function oddAndEvenSum(numbers) {
    let evenNumbers = 0;
    let oddNumbers = 0;
    
    const numsString = numbers.toString()

    for (let i = 0; i < numsString.length; i++) {
        if (numsString[i] % 2 === 0) evenNumbers += Number(numsString[i])
        else oddNumbers += Number(numsString[i])
    }

    const result = `Odd sum = ${oddNumbers}, Even sum = ${evenNumbers}`
    
    console.log(result);
    
}

oddAndEvenSum(1000435)
oddAndEvenSum(3495892137259234)
