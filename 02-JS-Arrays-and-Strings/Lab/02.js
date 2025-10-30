// function reverseArray(num, array) {
//     const reverseArray = array.slice(0, num)
//     console.log(reverseArray.reverse().join(" "));
// }


function reverseArray(num, array) {
    let arr = [];
    let output = "";
    for (let i = 0; i < num; i++) {
        arr.push(array[i])
    }
    
    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + " "
    }

    console.log(output)
}


reverseArray(3, [10, 20, 30, 40, 50])
reverseArray(4, [-1, 20, 99, 5])
reverseArray(2, [66, 43, 75, 89, 47])
