window.addEventListener("load", solve);

function solve() {
    const eventForm = document.querySelector('form.event-content');
    
    const saveBtn = document.querySelector('form.event-content > button#save');
    saveBtn.addEventListener('click', formHandler);

    const deleteBtn = document.querySelector('div#events > button.delete');
    deleteBtn.addEventListener('click', deleteAllEvents);

    function formHandler(e) {
        e.preventDefault();
        e.stopPropagation();


        const eventNameInput = document.querySelector('form.event-content > input#event');
        const shortNoteInput = document.querySelector('form.event-content > input#note');
        const eventDateInput = document.querySelector('form.event-content > input#date');
        
        const ulUpcomingEl = document.querySelector('div#upcoming > ul#upcoming-list');

        if (!(eventNameInput.value && shortNoteInput.value && eventDateInput.value)) return;



        const liEl = document.createElement('li');
        liEl.classList.add('event-item');

        const divEl = document.createElement('div');
        divEl.classList.add('event-container');

        const articleEl = document.createElement('article');

        const pNameEl = document.createElement('p');
        pNameEl.textContent = `Name: ${eventNameInput.value}`;

        const pNoteEl = document.createElement('p');
        pNoteEl.textContent = `Note: ${shortNoteInput.value}`;

        const pDateEl = document.createElement('p');
        pDateEl.textContent = `Date: ${eventDateInput.value}`;

        articleEl.appendChild(pNameEl)
        articleEl.appendChild(pNoteEl)
        articleEl.appendChild(pDateEl)

        const divBtnEl = document.createElement('div');
        divBtnEl.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        editBtn.addEventListener('click', editEventHandler);

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('btn');
        doneBtn.classList.add('done');
        doneBtn.textContent = 'Done';

        doneBtn.addEventListener('click', doneEventHandler);

        divBtnEl.appendChild(editBtn);
        divBtnEl.appendChild(doneBtn);

        divEl.appendChild(articleEl);
        divEl.appendChild(divBtnEl);

        liEl.appendChild(divEl);
        ulUpcomingEl.appendChild(liEl);

        eventNameInput.value = ''
        shortNoteInput.value = ''
        eventDateInput.value = ''
    };

    function editEventHandler(e) {
        const parentEl = e.target.closest('li.event-item');
        const ulUpcomingEl = document.querySelector('div#upcoming > ul#upcoming-list');
        

        const eventNameInput = document.querySelector('form.event-content > input#event');
        const shortNoteInput = document.querySelector('form.event-content > input#note');
        const eventDateInput = document.querySelector('form.event-content > input#date');

        const name = parentEl.querySelector('div.event-container > article > p:nth-child(1)');
        const note = parentEl.querySelector('div.event-container > article > p:nth-child(2)');
        const date = parentEl.querySelector('div.event-container > article > p:nth-child(3)');

        eventNameInput.value = name.textContent.split(' ').slice(1).join(' ');
        shortNoteInput.value = note.textContent.split(' ').slice(1).join(' ');
        eventDateInput.value = date.textContent.split(' ').slice(1).join(' ');

        ulUpcomingEl.removeChild(name.closest('li.event-item'));
        
    };

    function doneEventHandler(e) {
        const parentEl = e.target.closest('li.event-item');

        const ulEvents = document.querySelector('div#events > ul#events-list');
        const divBtns = parentEl.querySelector('div.buttons')
        divBtns.parentNode.removeChild(divBtns);

        
        ulEvents.appendChild(parentEl);
        

    };

    function deleteAllEvents() {
        const ulEventsList = document.querySelector('div#events > ul#events-list');
        ulEventsList.innerHTML = '';
    }

}

