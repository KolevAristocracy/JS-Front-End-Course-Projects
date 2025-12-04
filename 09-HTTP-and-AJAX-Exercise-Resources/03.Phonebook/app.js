function attachEvents() {
    // GET & POST: http://localhost:3030/jsonstore/phonebook
    // DELETE: http://localhost:3030/jsonstore/phonebook/:key>

    const getUrl = 'http://localhost:3030/jsonstore/phonebook'

    const ulEl = document.getElementById('phonebook');
    const loadBtnEl = document.getElementById('btnLoad');
    const personInputEl = document.getElementById('person');
    const phoneInputEl = document.getElementById('phone');
    const createBtnEl = document.getElementById('btnCreate');

    loadBtnEl.addEventListener('click', getRecords);
    createBtnEl.addEventListener('click', createRecord);

    async function getRecords() {
        ulEl.innerHTML = '';

        const res = await fetch(getUrl);
        const data = await res.json()

        Object.values(data).forEach((record) => {
            const liEl = document.createElement('li');
            liEl.textContent = `${record.person}: ${record.phone}`

            const delBtn = document.createElement('button');
            delBtn.textContent = 'Delete';
            delBtn.id = record._id;
            delBtn.addEventListener('click', onDelete);

            liEl.appendChild(delBtn);
            ulEl.appendChild(liEl);

        });
    }
    
   async function onDelete(e) {
        const id = e.target.id;
        const res = await fetch(
            `${getUrl}/${id}`,
            {method: 'DELETE'}
        );

        e.target.parentElement.remove();
    }

    async function createRecord() {
        const person = personInputEl.value.trim();
        const phone = phoneInputEl.value.trim();

        await fetch(
            getUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({person, phone})
            }   
        )

        personInputEl.value = '';
        phoneInputEl.value = '';

        getRecords();
    }
}


attachEvents();