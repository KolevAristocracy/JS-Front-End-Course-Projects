window.addEventListener("load", solve);

function solve() {
  const ulCheckList = document.getElementById('check-list');
  const ulContanctList = document.getElementById('contact-list');

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const categoryInput = document.getElementById('category');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', addContact);

  function addContact() {
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const category = categoryInput.value.trim();

    if (!(name && phone && category)) return;

    const liEl = document.createElement('li');
    const article = document.createElement('article');

    const pName = document.createElement('p');
    pName.textContent = `name:${name}`;

    const pPhone = document.createElement('p');
    pPhone.textContent = `phone:${phone}`;

    const pCategory = document.createElement('p');
    pCategory.textContent = `category:${category}`;

    const divBtns = document.createElement('div');
    divBtns.className = 'buttons';

    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';

    const saveBtn = document.createElement('button');
    saveBtn.className = 'save-btn';

    article.appendChild(pName);
    article.appendChild(pPhone);
    article.appendChild(pCategory);

    divBtns.appendChild(editBtn);
    divBtns.appendChild(saveBtn);

    liEl.appendChild(article);
    liEl.appendChild(divBtns);

    ulCheckList.appendChild(liEl);

    clearInputs();

    editBtn.addEventListener('click', () => {
      liEl.remove();

      nameInput.value = name;
      phoneInput.value = phone;
      categoryInput.value = category;

    });

    saveBtn.addEventListener('click', () => {
      ulCheckList.removeChild(liEl);

      divBtns.remove();
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'del-btn';

      liEl.appendChild(deleteBtn);
      ulContanctList.appendChild(liEl);

      deleteBtn.addEventListener('click', () => {
        liEl.remove()
      })
    })
  }

  function clearInputs() {
    nameInput.value = '';
    phoneInput.value = '';
    categoryInput.value = '';
  }
}
