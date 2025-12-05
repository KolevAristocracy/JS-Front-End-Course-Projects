function lockedProfile() {
    const url = 'http://localhost:3030/jsonstore/advanced/profiles';
    const mainDivEl = document.getElementById('main');

    createProfiles();

    async function createProfiles() {
        mainDivEl.innerHTML = '';
        
        const res = await fetch(url);
        const allProfiles = await res.json();
        let i = 0;

        for (const profile of Object.values(allProfiles)) {
            i++;

            const username = profile.username;
            const email = profile.email;
            const age = profile.age;

            const divEl = document.createElement('div');
            divEl.classList.add('profile');

            const img = document.createElement('img')
            img.classList.add('userIcon')
            img.src = './iconProfile2.png'
            divEl.appendChild(img);

            const labelLock = document.createElement('label')
            labelLock.textContent = 'Lock'
            divEl.appendChild(labelLock);

            const inputLock = document.createElement('input')
            inputLock.type = 'radio';
            inputLock.name = `user${i}Locked`;
            inputLock.value = 'lock';
            inputLock.checked = true;
            divEl.appendChild(inputLock);

            const labelUnlock = document.createElement('label')
            labelUnlock.textContent = 'Unlock'
            divEl.appendChild(labelUnlock);

            const inputUnlock = document.createElement('input')
            inputUnlock.type = 'radio';
            inputUnlock.name = `user${i}Locked`;
            inputUnlock.value = 'unlock';
            divEl.appendChild(inputUnlock)

            const separator = document.createElement('hr');
            divEl.appendChild(separator);

            const labelUsername = document.createElement('label');
            labelUsername.textContent = 'Username';
            divEl.appendChild(labelUsername);

            const inputUsername = document.createElement('input');
            inputUsername.type = 'text';
            inputUsername.name = `user${i}Username`;
            inputUsername.value = username;
            inputUsername.disabled = true;
            inputUsername.readOnly = true;
            divEl.appendChild(inputUsername);

            const userDivEl = document.createElement('div');
            userDivEl.classList.add(`user${i}Username`);
            userDivEl.style.display = 'none';

            const separator2 = document.createElement('hr');
            userDivEl.appendChild(separator2);

            const nestEmailLabel = document.createElement('label');
            nestEmailLabel.textContent = 'Email:';
            userDivEl.appendChild(nestEmailLabel);

            const nestEmailInput = document.createElement('input');
            nestEmailInput.type = 'email';
            nestEmailInput.name = `user${i}Email`;
            nestEmailInput.value = email;
            nestEmailInput.disabled = true;
            nestEmailInput.readOnly = true;
            userDivEl.appendChild(nestEmailInput);

            const nestAgeLabel = document.createElement('label');
            nestAgeLabel.textContent = 'Age:';
            userDivEl.appendChild(nestAgeLabel);

            const nestAgeInput = document.createElement('input');
            nestAgeInput.type = 'number';
            nestAgeInput.name = `user${i}Age`;
            nestAgeInput.value = age
            nestAgeInput.disabled = true;
            nestAgeInput.readOnly = true;
            userDivEl.appendChild(nestAgeInput);

            divEl.appendChild(userDivEl);

            const btnShowMore = document.createElement('button');
            btnShowMore.textContent = 'Show more';
            btnShowMore.disabled = true;

            inputLock.addEventListener('change', () => {
                btnShowMore.disabled = true;
            });

            inputUnlock.addEventListener('change', () => {
                btnShowMore.disabled = false;
            });

            let isExpanded = false;
            btnShowMore.addEventListener('click', () => {
                if (!isExpanded) {
                    userDivEl.style.display = 'block'
                    btnShowMore.textContent = 'Hide it';
                    isExpanded = true;
                } else {
                    userDivEl.style.display = 'none';
                    btnShowMore.textContent = 'Show more';
                    isExpanded = false;

                }

            });

            divEl.appendChild(btnShowMore);
            mainDivEl.appendChild(divEl)
        };

    };
};
