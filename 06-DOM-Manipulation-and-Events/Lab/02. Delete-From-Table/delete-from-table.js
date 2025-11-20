function deleteByEmail() {
    emailToDelete = document.getElementsByName('email')[0].value;
    allRows = document.querySelectorAll('tbody > tr > td:nth-child(2)')

    for (let row of allRows) {
        if (row.textContent == emailToDelete) {
            let parentRow = row.parentNode;
            parentRow.parentNode.removeChild(parentRow);
            document.getElementById('result').textContent = 'Deleted.'
            return;
        }
        
    }
    document.getElementById('result').textContent = 'Not found.'
}
