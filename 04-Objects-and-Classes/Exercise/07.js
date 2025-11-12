function oddCurrences(input) {
    const words = input.toLowerCase().split(' ');
    const counter = {};
    for (const word of words) {
        if (!counter.hasOwnProperty(word)) counter[word] = 0
        counter[word]++;
    }

    // const result = Object.keys(counter).filter(w => counter[w] % 2 !== 0);
    const result = Object.entries(counter)
    .filter(e => e[1] % 2 !== 0)
    .map((e) => e[0]);
    console.log(result.join(" "));
}

oddCurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
oddCurrences('Cake IS SWEET is Soft CAKE sweet Food')
