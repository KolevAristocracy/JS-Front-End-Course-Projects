function modernHashTag(text) {
    let pattern = /#[a-zA-Z]+\b/g;
    const matches = text.match(pattern)

    console.log(matches.join("\n").replaceAll("#", ""))
}

modernHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
modernHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign')
