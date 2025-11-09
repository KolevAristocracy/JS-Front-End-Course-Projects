function phoneBook(arr) {
    const phoneRegister = {}

    for (let data of arr) {
        const person = data.split(" ")
        const name = person[0]
        const phoneNumber = person[1]

        phoneRegister[name] = phoneNumber
    }

    for (let key in phoneRegister) {
        console.log(`${key} -> ${phoneRegister[key]}`);
    }
}



phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'])

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'])
