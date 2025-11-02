function stringSubstring(word, text) {
    let result;
    const flag = (
        text.toLowerCase()
            .split(" ")
            .includes(word.toLowerCase())
    );

    if (flag) result = word
    else result = `${word} not found!`

    console.log(result);

}


stringSubstring('javascript',
    'JavaScript is the best programming language')
stringSubstring('python',
    'JavaScript is the best programming language')
