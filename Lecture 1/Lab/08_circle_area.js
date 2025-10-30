function solve(value) {
    let result
    let inputType = typeof(value)
    if (inputType !== 'number') {
        result = `We can not calculate the circle area, because we receive a ${typeof(value)}.`
    }

    else {
        result = (Math.pow(value, 2) * Math.PI).toFixed(2);
    }
    console.log(result)
}

solve('name')