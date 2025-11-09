function convertToJSON(firstName, lastName, hairColor) {
    const person = {};
    
    person.name = firstName;
    person.lastName = lastName;
    person.hairColor = hairColor

    console.log(JSON.stringify(person))
    
}

convertToJSON('George', 'Jones', 'Brown')
convertToJSON('Peter', 'Smith', 'Blond')
