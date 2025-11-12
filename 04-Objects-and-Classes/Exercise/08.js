function piccolo(input) {
    let parking = [];

    for (const el of input) {
        const [direction, carNumber] = el.split(", ");

        if (direction === "IN") parking[carNumber] = true;
        else if (direction === "OUT") parking[carNumber] = false;  // to avoid delete
        // else if (direction === "OUT") delete parking[carNumber]


        // Not so optimal solution
        // if (direction === "IN") {
        //     parking = parking.filter((x) => x !== carNumber)
        //     parking.push(carNumber);
        // } else if (direction === "OUT") {
        //     parking = parking.filter(x => x !== carNumber)
        // }
    }

    const output = Object.keys(parking).filter((c) => parking[c]);
    if (output.length === 0) console.log('Parking Lot is Empty');
    else {
        output.sort();
        for (const carNumber of output) console.log(carNumber);
    }
}


piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'])
