function solve() {
    const numberInput = Number(document.getElementById('input').value);
    const toOption = document.querySelector('select#selectMenuTo').value;

    let result = '';
    if (toOption === 'hexadecimal') {
        result = numberInput.toString(16).toUpperCase()
    } else if (toOption === 'binary') {
        result = numberInput.toString(2)
    } else {
        result = ''
    }

    const output = document.getElementById('result')

    output.value = result
}