function storeProvision(arrayOne, arrayTwo) {
    const products = {};

    for (let i = 0; i < arrayOne.length; i += 2) {

        productName = arrayOne[i]
        quantity = Number(arrayOne[i + 1])
        products[productName] = quantity
    }

    for (let i = 0; i < arrayTwo.length; i += 2) {

        productName = arrayTwo[i]
        quantity = Number(arrayTwo[i + 1])

        if (productName in products) {
            products[productName] += quantity
        } else {
            products[productName] = quantity
        }
    }

    for (key in products) {
        console.log(`${key} -> ${products[key]}`);

    }

}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])

storeProvision(
    [
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])
