const url = "http://localhost:3030/jsonstore/records";

const ulList = document.getElementById('list');

const nameInput = document.getElementById('p-name');
const stepsInput = document.getElementById('steps');
const caloriesInput = document.getElementById('calories');

const addRecordBtn = document.getElementById('add-record');
const editRecordBtn = document.getElementById('edit-record');
const loadBtn = document.getElementById('load-records');

loadBtn.addEventListener('click', loadRecords);
addRecordBtn.addEventListener('click', addRecords);
editRecordBtn.addEventListener('click', editRecord);

async function editRecord(e) {
    const id = e.target.dataset.id
    const name = nameInput.value.trim();
    const steps = stepsInput.value.trim();
    const calories = caloriesInput.value.trim();

    const body = {name, steps, calories, _id: id};

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    editRecordBtn.disabled = true;
    addRecordBtn.disabled = false;

    clearInputs();
    await loadRecords();
}

async function addRecords() {
    const name = nameInput.value.trim();
    const steps = stepsInput.value.trim();
    const calories = caloriesInput.value.trim();

    if (!(name && steps && calories)) return;

    const body = { name, steps, calories };
    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    clearInputs();
    await loadRecords();
}

async function loadRecords() {
    const res = await fetch(url);
    const records = await res.json();

    ulList.replaceChildren();
    editRecordBtn.disabled = true;

    for (const record of Object.values(records)) {
        renderRecords(record);
    }
}

function renderRecords(record) {
    const id = record._id
    const liEl = document.createElement('li');
    liEl.className = 'record';

    const divInfo = document.createElement('div');
    divInfo.className = 'info'

    const pName = document.createElement('p');
    pName.textContent = record.name

    const pSteps = document.createElement('p');
    pSteps.textContent = record.steps;

    const pCalories = document.createElement('p');
    pCalories.textContent = record.calories

    const divBtns = document.createElement('div');
    divBtns.className = 'btn-wrapper';

    const changeBtn = document.createElement('button');
    changeBtn.dataset.id = id;
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';

    const deleteBtn = document.createElement('button');
    deleteBtn.dataset.id = id
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    divInfo.appendChild(pName);
    divInfo.appendChild(pSteps);
    divInfo.appendChild(pCalories);

    divBtns.appendChild(changeBtn);
    divBtns.appendChild(deleteBtn);

    liEl.appendChild(divInfo);
    liEl.appendChild(divBtns);

    ulList.appendChild(liEl);

    // NOTE: Check if the listeners have to by upper in the code
    changeBtn.addEventListener('click', () => {
        addRecordBtn.disabled = true;
        editRecordBtn.disabled = false;

        nameInput.value = record.name;
        stepsInput.value = record.steps;
        caloriesInput.value = record.calories;

        editRecordBtn.dataset.id = id;
    });

    deleteBtn.addEventListener('click', async () => {
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })

        await loadRecords();
    })
}

function clearInputs() {
    nameInput.value = '';
    stepsInput.value = '';
    caloriesInput.value = '';
}
