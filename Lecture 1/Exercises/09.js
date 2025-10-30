function fruitMoney(fruitType, weightGrams, priceForKilogram) {
    const weightKilograms = weightGrams / 1000
    moneyNeeded = priceForKilogram * weightKilograms

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${weightKilograms.toFixed(2)} kilograms ${fruitType}.`);
}

fruitMoney('orange', 2500, 1.80)
fruitMoney('apple', 1563, 2.35)