function listOfNames(arr) {
    const result = [];
    let counter = 1
    arr.sort((a, b) => a.localeCompare(b, 'en', {'sensitivity': 'base'}));
    for (el of arr) {
        
        console.log(`${counter}.${el}`);
        counter += 1
        
    }
    
}

listOfNames(["John", "Bob", "Christina", "Ema"])