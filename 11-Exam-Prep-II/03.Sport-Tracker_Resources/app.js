const url = 'http://localhost:3030/jsonstore/workout';

const workoutNameInput = document.getElementById('workout');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');

const addWorkoutBtn = document.getElementById('add-workout');
addWorkoutBtn.addEventListener('click', addWorkout);

const editWorkoutBtn = document.getElementById('edit-workout');
editWorkoutBtn.addEventListener('click', editWorkout);
const divListEl = document.getElementById('list');


const loadWorkoutBtn = document.getElementById('load-workout');
loadWorkoutBtn.addEventListener('click', loadWorkout);



async function loadWorkout() {
    const res = await fetch(url);
    const data = await res.json();

    divListEl.innerHTML = '';
    editWorkoutBtn.disabled = true;

    for (const workout of Object.values(data)) {
        const name = workout.workout;
        const location = workout.location;
        const date = workout.date;
        const id = workout._id;


        const divContainer = document.createElement('div');
        divContainer.classList.add('container');
        divContainer.innerHTML = `
            <h2>${name}</h2>
            <h3>${date}</h3>
            <h3 id="location">${location}</h3>
        `

        const divBtns = document.createElement('div');
        divBtns.id = "buttons-container"



        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.dataset.id = id;
        changeBtn.textContent = 'Change'
        changeBtn.addEventListener('click', changeWorkout);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.dataset.id = id;
        deleteBtn.textContent = 'Done';
        deleteBtn.addEventListener('click', deleteWorkout)

        divBtns.appendChild(changeBtn);
        divBtns.appendChild(deleteBtn);

        divContainer.appendChild(divBtns);
        divListEl.appendChild(divContainer);

    };
};

async function addWorkout(e) {
    e.preventDefault();

    const name = workoutNameInput.value;
    const location = locationInput.value;
    const date = dateInput.value;

    if (!(name && location && date)) return;

    workoutNameInput.value = '';
    locationInput.value = '';
    dateInput.value = '';  // check if have to clear AFTER creation

    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "workout": name, location, date })
    });

    console.log(res);


    await loadWorkout();
}

async function editWorkout(e) {
    const name = workoutNameInput.value;
    const date = dateInput.value;
    const location = locationInput.value;

    const id = e.target.dataset.id
    const body = {
        "workout": name,
        date,
        location
    };

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    editWorkoutBtn.disabled = true;
    addWorkoutBtn.disabled = false;

    workoutNameInput.value = '';
    dateInput.value = '';
    locationInput.value = '';

    await loadWorkout();
}

function changeWorkout(e) {
    const id = e.target.dataset.id
    const parentDiv = e.target.parentNode.parentNode
    const name = parentDiv.querySelector(':nth-child(1)').textContent
    const date = parentDiv.querySelector(':nth-child(2)').textContent
    const location = parentDiv.querySelector(':nth-child(3)').textContent

    parentDiv.remove();

    editWorkoutBtn.disabled = false;
    addWorkoutBtn.disabled = true;

    workoutNameInput.value = name;
    dateInput.value = date;
    locationInput.value = location;

    editWorkoutBtn.dataset.id = id;
}

async function deleteWorkout(e) {
    const id = e.target.dataset.id;

    await fetch(`${url}/${id}`, {
        method: "DELETE",
    })

    await loadWorkout();

}