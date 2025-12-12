const url = "http://localhost:3030/jsonstore/appointments";

const ulAppointmentsList = document.getElementById('appointments-list')

const carModelInput = document.getElementById('car-model');
const serviceInput = document.getElementById('car-service');
const dateInput = document.getElementById('date');

const loadBtn = document.getElementById('load-appointments');
const addBtn = document.getElementById('add-appointment');
const editBtn = document.getElementById('edit-appointment');

loadBtn.addEventListener('click', loadAppointments);
addBtn.addEventListener('click', addAppointments);
editBtn.addEventListener('click', editAppointment);

async function loadAppointments() {
    ulAppointmentsList.replaceChildren();

    editBtn.disabled = true;

    const res = await fetch(url);
    const data = await res.json();

    for (const appointment of Object.values(data)) {
        renderAppointemnt(appointment);
    };

};

async function addAppointments() {
    const model = carModelInput.value.trim();
    const service = serviceInput.value.trim();
    const date = dateInput.value.trim();
    const body = { model, service, date };

    if (!(model && service && date)) return;

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    clearInputs();
    await loadAppointments();
}

async function editAppointment() {
    const id = editBtn.dataset.id;

    const model = carModelInput.value;
    const service = serviceInput.value;
    const date = dateInput.value;

    const body = {model, service, date};

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    editBtn.disabled = true;
    addBtn.disabled = false;

    clearInputs();
    await loadAppointments();
}

function renderAppointemnt(appointment) {

    const id = appointment._id;

    const liEl = document.createElement('li');
    liEl.className = 'appointment';

    const h2NameEl = document.createElement('h2');
    h2NameEl.textContent = appointment.model;

    const h3DateEl = document.createElement('h3');
    h3DateEl.textContent = appointment.date

    const h3ServiceEl = document.createElement('h3');
    h3ServiceEl.textContent = appointment.service;

    const divBtnsEl = document.createElement('div');
    divBtnsEl.className = 'buttons-appointment'

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.textContent = 'Change';
    changeBtn.dataset.id = id;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.dataset.id = id;

    divBtnsEl.appendChild(changeBtn);
    divBtnsEl.appendChild(deleteBtn);

    liEl.appendChild(h2NameEl);
    liEl.appendChild(h3DateEl);
    liEl.appendChild(h3ServiceEl);
    liEl.appendChild(divBtnsEl);

    ulAppointmentsList.appendChild(liEl);

    changeBtn.addEventListener('click', () => {
        carModelInput.value = appointment.model;
        serviceInput.value = appointment.service;
        dateInput.value = appointment.date;

        addBtn.disabled = true;

        editBtn.dataset.id = id
        editBtn.disabled = false;


    });

    deleteBtn.addEventListener('click', async () => {
        const id = deleteBtn.dataset.id
        await fetch(`${url}/${id}`, {
            method: "DELETE",
        })

        await loadAppointments();
    })
}


function clearInputs() {
    carModelInput.value = '';
    serviceInput.value = '';
    dateInput.value = '';
}