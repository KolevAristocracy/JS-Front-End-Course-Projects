function charactersInRange(a, b) {
    let result = [];
    const asciiOne = a.charCodeAt(0);
    const asciiTwo = b.charCodeAt(0);
    let biggerNum;
    let smallerNum;

    if (asciiOne > asciiTwo) biggerNum = asciiOne, smallerNum = asciiTwo;
    
    else biggerNum = asciiTwo, smallerNum = asciiOne;

    for (smallerNum++; smallerNum < biggerNum; smallerNum++) {
        result.push(String.fromCharCode(smallerNum))
    }

    console.log(result.join(" "));
    
};

charactersInRange('a','d')

charactersInRange('#',':')

charactersInRange('C','#')

