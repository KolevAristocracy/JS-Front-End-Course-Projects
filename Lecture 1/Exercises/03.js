// function leapYear(year) {
//     let result
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) result = "yes"
//     else result = "no"

//     console.log(result)
// }


// Lecture's way

function leapYear(year) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeap) console.log("yes");
    else console.log("no")
}

leapYear(1984)
leapYear(2003)
leapYear(4)
leapYear(2200)