function cookingNumbers(number, ...args) {
    let cookedNumber = number

    for (let arg of args) {
        if (arg === 'chop') cookedNumber /= 2
        else if (arg === 'dice') cookedNumber = Math.sqrt(cookedNumber)
        else if (arg === 'spice') cookedNumber += 1
        else if (arg === 'bake') cookedNumber *= 3
        else if (arg === 'fillet') cookedNumber -= cookedNumber * 0.2

        console.log(cookedNumber);
        
    }
        
}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
