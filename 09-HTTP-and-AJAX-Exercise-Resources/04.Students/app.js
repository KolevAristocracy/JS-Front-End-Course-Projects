const url = 'http://localhost:3030/jsonstore/collections/students';
const resultTableBody = document.querySelector('table#results > tbody');
const inputForm = document.querySelector('form#form');

inputForm.addEventListener('submit', addStudent);



async function addStudent(e) {
    e.preventDefault();
    
    const firstName = document.querySelector('div.inputs > input[name="firstName"]').value;
    const lastName = document.querySelector('div.inputs > input[name="lastName"]').value;
    const facultyNumber = document.querySelector('div.inputs > input[name="facultyNumber"]').value;
    const grade = document.querySelector('div.inputs > input[name="grade"]').value;

    if (!(firstName && lastName && facultyNumber && grade)) {
        return
    }

    const body = {
        firstName,
        lastName,
        facultyNumber,
        grade
    };

    await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });

    inputForm.reset()
    await loadStudents();
}

async function loadStudents() {
    const res =  await fetch(url);
    const allStudents = await res.json();


    resultTableBody.innerHTML = '';

    for (const record of Object.values(allStudents)) {
        const trEl = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        
        // First Name 
        td1.textContent = record.firstName;

        // Last Name
        td2.textContent = record.lastName;

        // Faculty Number
        td3.textContent = record.facultyNumber;

        // Grade
        td4.textContent = Number(record.grade).toFixed(2);


        trEl.append(td1, td2, td3, td4);
        resultTableBody.appendChild(trEl);
    }
}

loadStudents();