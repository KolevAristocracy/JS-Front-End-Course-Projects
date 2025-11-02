function calculateTotalPrice(product, quantity) {
    let price;

    if (product === "coffee" ) price = 1.50
    else if (product === "water" ) price = 1
    else if (product === "coke" ) price = 1.40
    else if (product === "snacks" ) price = 2

    const totalPrice = quantity * price;

    console.log(totalPrice.toFixed(2));
}

calculateTotalPrice("water", 5)
calculateTotalPrice("coffee", 2)
