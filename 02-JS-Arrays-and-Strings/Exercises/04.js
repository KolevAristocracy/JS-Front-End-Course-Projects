function sortNumbers(arr) {
    const result = []
    arr.sort((a, b) => a - b)
    while (arr.length !== 0) {
        firstEl = arr.shift()
        lastEl = arr.pop()
        result.push(firstEl)
        result.push(lastEl)
    }

    return result

}

sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])