window.addEventListener("load", solve);

function solve() {
  const ulAdoptionInfo = document.getElementById('adoption-info');
  const ulAdoptedPets = document.getElementById('adopted-list');

  const animalTypeInput = document.getElementById('type');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');

  const adoptBtn = document.getElementById('adopt-btn');
  adoptBtn.addEventListener('click', adoptPet)


  function adoptPet(e) {
    e.preventDefault()
    const type = animalTypeInput.value;
    const age = ageInput.value;
    const gender = genderInput.value;

    if (!(type && age && gender)) return;

    const liEl = document.createElement('li');
    const articleEl = document.createElement('article');

    const pName = document.createElement('p');
    pName.textContent = `Pet:${type}`;

    const pGender = document.createElement('p');
    pGender.textContent = `Gender:${gender}`;

    const pAge = document.createElement('p')
    pAge.textContent = `Age:${age}`

    const divBtns = document.createElement('div');
    divBtns.className = 'buttons';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
      animalTypeInput.value = type;
      ageInput.value = age;
      genderInput.value = gender;

      liEl.remove();
    })

    const doneBtn = document.createElement('button');
    doneBtn.className = 'done-btn';
    doneBtn.textContent = 'Done';

    doneBtn.addEventListener('click', () => {
      const clearBtn = document.createElement('button');
      clearBtn.className = 'clear-btn';
      clearBtn.textContent = 'Clear';
      
      divBtns.remove();
      ulAdoptionInfo.removeChild(liEl);

      liEl.appendChild(clearBtn);


      ulAdoptedPets.appendChild(liEl)

      clearBtn.addEventListener('click', () => {
        liEl.remove();
      })
    })

    articleEl.appendChild(pName);
    articleEl.appendChild(pGender);
    articleEl.appendChild(pAge);

    divBtns.appendChild(editBtn);
    divBtns.appendChild(doneBtn);

    liEl.appendChild(articleEl);
    liEl.appendChild(divBtns);

    ulAdoptionInfo.appendChild(liEl);

    clearInputs();

  }

  function clearInputs() {
    animalTypeInput.value = '';
    ageInput.value = '';
    genderInput.value = '';
  }
}
