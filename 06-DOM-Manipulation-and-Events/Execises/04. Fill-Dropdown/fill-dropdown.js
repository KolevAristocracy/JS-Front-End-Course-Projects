document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const FormEl = document.querySelector('form');
    const textInput = FormEl.querySelector('p.field input#newItemText');
    const valueInput = FormEl.querySelector('p.field input#newItemValue');
    const addBtnEl = FormEl.querySelector('input[type=submit]');
    const selectMenu = document.getElementById('menu');

    FormEl.addEventListener('submit', handeTextAndValueInputs)

    function handeTextAndValueInputs(e) {
        e.preventDefault()
        const text = textInput.value;
        const value = valueInput.value;

        const optionEl = document.createElement('option');
        optionEl.textContent = text;
        optionEl.value = value;

        selectMenu.appendChild(optionEl);

        textInput.value = '';
        valueInput.value = '';
    }
}