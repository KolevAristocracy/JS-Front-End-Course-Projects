function addItem() {
    const input = document.getElementById('newItemText').value;
    const listItems = document.getElementById('items');

    if (input.length === 0) return;

    const li = document.createElement('li');
    li.textContent = input;
    let remove = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");

    remove.appendChild(linkText);
    remove.href = "#";
    remove.addEventListener("click", deleteItem);

    li.appendChild(remove)
    listItems.appendChild(li);

    function deleteItem() {
        li.remove();
    }
}
