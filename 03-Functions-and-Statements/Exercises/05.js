function palidromeIntegersChecker(intArray) {
    for (number of intArray) {
        const numStr = number.toString()
        const result = numStr.split('').reverse().join('');
        console.log(numStr === result);
        
    }
}

palidromeIntegersChecker([123,323,421,121])
palidromeIntegersChecker([32,2,232,1010])
