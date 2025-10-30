function vacation(num_of_people, type_of_group, day_of_week) {
    let price_for_person
    let result
    let discount = 1
    let totalPrice

    if (type_of_group === "Students") {
        if (num_of_people >= 30) {
            discount = 0.85
        }

        if (day_of_week == "Friday") {
            price_for_person = 8.45
        }

        else if (day_of_week == "Saturday") {
            price_for_person = 9.80
        }

        else if (day_of_week == "Sunday") {
            price_for_person = 10.46
        }
    }

    else if (type_of_group === "Business") {
        if (num_of_people >= 100) {
            num_of_people -= 10
        }

        if (day_of_week == "Friday") {
            price_for_person = 10.90
        }

        else if (day_of_week == "Saturday") {
            price_for_person = 15.60
        }

        else if (day_of_week == "Sunday") {
            price_for_person = 16.00
        }
    }

    else if (type_of_group === "Regular") {
        if (num_of_people >= 10 && num_of_people <= 20) {
            discount = 0.95
        }

        if (day_of_week == "Friday") {
            price_for_person = 15.00
        }

        else if (day_of_week == "Saturday") {
            price_for_person = 20
        }

        else if (day_of_week == "Sunday") {
            price_for_person = 22.50
        }
    }
    totalPrice = num_of_people * price_for_person

    if (type_of_group === "Students") totalPrice = discount * totalPrice;

    else if (type_of_group === "Regular") totalPrice = discount * totalPrice;

    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(40, "Regular", "Saturday")
vacation(30, "Students", "Sunday")