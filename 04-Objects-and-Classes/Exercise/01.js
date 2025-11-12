/**
 * 
 * @param {Array} arr 
 * @param {String} employeeName
 *  
 */

function employeeNumber(arr) {
    const employees = {};

    for (let employeeName of arr) {
        employees[employeeName] = employeeName.length
    }

    for (const key in employees)
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
}


employeeNumber([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])

employeeNumber([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
])



