function printSum(numOne, numTwo) {
    let result = 0
    let oneLineResult = ""
    const b = numTwo

    for (let a = numOne; a <= b; a++) {
        oneLineResult += String(a +" ")
        result += a
    }
    console.log(oneLineResult)
    console.log(`Sum: ${result}`)
}

printSum(5, 10)