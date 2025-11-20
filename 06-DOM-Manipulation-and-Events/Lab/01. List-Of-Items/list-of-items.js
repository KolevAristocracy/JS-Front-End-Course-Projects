function addItem() {
    const input = document.getElementById('newItemText').value;
    const listItems = document.getElementById('items');

    const li = document.createElement('li');

    li.appendChild(input)
    document.getElementById('newItemText').value = '';

}
