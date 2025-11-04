// function arrayRotation(arr, num) {
//     num = num % arr.length; // optimization for rotations
//     for (let i = 0; i < num; i++) {
//         let firstEl = arr.shift()
//         arr.push(firstEl)
//     }
//     console.log(arr.join(" "))
// }


// More opimized solution

function arrayRotation(arr, rotations) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[(rotations + i) % arr.length]);
    }
    
    console.log(arr.join(" "))
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)
