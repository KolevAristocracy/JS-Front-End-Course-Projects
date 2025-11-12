function addressBook(arr) {
    const book = {};
    for (let record of arr) {
        let [name, address] = record.split(":")
        book[name] = address
    }

    const sortedBook = Object.entries(book).sort((a, b) => a[0].localeCompare(b[0]));

    
    for (key in sortedBook) {
        console.log(`${sortedBook[key][0]} -> ${sortedBook[key][1]}`);

    }
}


addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'])

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])
