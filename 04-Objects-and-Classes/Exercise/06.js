function wordsTracker(arr) {
    const words = arr[0].split(" ")
    const tracker = {}

    for (const word of words) tracker[word] = 0;

    for (let i = 1; i < arr.length; i++) {
        const word = arr[i]
        if (word in tracker) tracker[word]++;
    }

    for (const [word, count] of Object.entries(tracker).sort((a, b) => b[1] - a[1]))
        console.log(`${word} - ${count}`)
}



wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

wordsTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)
