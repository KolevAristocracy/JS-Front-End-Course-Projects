function solve(arr) {
    const n = Number(arr.shift());
    const chemicalData = {};

    for (let i = 0; i < n; i++) {
        const [name, quantity] = arr.shift().split(" # ");
        chemicalData[name] = {
            "quantity": Number(quantity),
            "formula": null
        };
    }

    let commands = arr.shift();
    while (commands !== 'End') {
        const commandsData = commands.split(" # ");
        const action = commandsData[0];
        const chemicalOneName = commandsData[1];

        if (!chemicalData.hasOwnProperty(chemicalOneName)) {
            console.log(`The Chemical ${chemicalOneName} is not available in the lab.`);
        } else {
            const chemicalOneQty = chemicalData[chemicalOneName].quantity;
            if (action === 'Mix') {
                const chemicalTwoName = commandsData[2];
                const amount = Number(commandsData[3]);
                const chemicalTwoQty = chemicalData[chemicalTwoName].quantity; // Have I to check if object exist ?

                if (chemicalOneQty >= amount && chemicalTwoQty >= amount) {
                    chemicalData[chemicalOneName].quantity -= amount
                    chemicalData[chemicalTwoName].quantity -= amount
                    console.log(`${chemicalOneName} and ${chemicalTwoName} have been mixed. ${amount} units of each were used.`);

                } else {
                    console.log(`Insufficient quantity of ${chemicalOneName}/${chemicalTwoName} to mix.`)
                }

            } else if (action === "Replenish") {
                const amount = Number(commandsData[2]);

                if (chemicalOneQty + amount > 500) {
                    chemicalData[chemicalOneName].quantity = 500;
                    console.log(`${chemicalOneName} quantity increased by ${500 - chemicalOneQty} units, reaching maximum capacity of 500 units!`);
                } else {
                    chemicalData[chemicalOneName].quantity += amount
                    console.log(`${chemicalOneName} quantity increased by ${amount} units!`);

                }
            } else if (action === 'Add Formula') {
                const formula = commandsData[2];
                chemicalData[chemicalOneName].formula = formula;
                console.log(`${chemicalOneName} has been assigned the formula ${formula}.`);

            }
        }

        commands = arr.shift();
    }
    for (key in chemicalData) {
        const name = key;
        const quantity = chemicalData[key].quantity
        if (chemicalData[key].formula) {
            const formula = chemicalData[key].formula
            console.log(`Chemical: ${name}, Quantity: ${quantity}, Formula: ${formula}`);
        } else {
            console.log(`Chemical: ${name}, Quantity: ${quantity}`);
        }
    }
}



// solve(
//     ['4',
//         'Water # 200',
//         'Salt # 100',
//         'Acid # 50',
//         'Base # 80',
//         'Mix # Water # Salt # 50',
//         'Replenish # Salt # 150',
//         'Add Formula # Acid # H2SO4',
//         'End']

// );

solve(
    ['3',
        'Sodium # 300',
        'Chlorine # 100',
        'Hydrogen # 200',
        'Mix # Sodium # Chlorine # 200',
        'Replenish # Sodium # 250',
        'Add Formula # Sulfuric Acid # H2SO4',
        'Add Formula # Sodium # Na',
        'Mix # Hydrogen # Chlorine # 50',
        'End']

);