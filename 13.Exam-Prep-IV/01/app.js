function solve(arr) {
    let spell = arr.shift();

    for (let i = 0; arr[i] !== 'End'; i++) {
        commands = arr[i].split('!')
        action = commands[0]
        if (action === 'RemoveEven') {
            let evenSpell = '';
            for (let i = 0; i < spell.length; i++) {
                if (i % 2 === 0) {
                    evenSpell += spell[i]
                };
            }
            spell = evenSpell;
            console.log(spell);

        } else if (action === 'TakePart') {
            const fromIndex = commands[1];
            const toIndex = commands[2];
            spell = spell.substring(fromIndex, toIndex);
            console.log(spell);

        } else if (action === 'Reverse') {
            substring = commands[1];
            if (spell.includes(substring)) {
                const startIndex = spell.indexOf(substring);
                const endIndex = spell.indexOf(substring[substring.length - 1]);

                let foundedString = spell.slice(startIndex, endIndex + 1)
                spell = spell.replace(foundedString, '')
                foundedString = Array.from(foundedString).reverse().join('')
                spell += foundedString
                console.log(spell);

            } else {
                console.log('Error');

            }
        }
    }

    console.log(`The concealed spell is: ${spell}`);
}

solve(["asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"])
