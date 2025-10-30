function censoredWords(text, word) {
    let result;

    result = text.replaceAll(word, "*".repeat(word.length))
    console.log(result)
}


censoredWords('A small sentence with some words', 'small')
censoredWords('Find the hidden word', 'hidden')
