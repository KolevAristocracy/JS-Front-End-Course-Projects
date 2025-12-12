window.addEventListener("load", solve);

function solve() {
  const ulCheckList = document.getElementById('check-list');
  const wishList = document.getElementById('laptops-list');

  const LapModelInput = document.getElementById('laptop-model');
  const storageSpaceInput = document.getElementById('storage');
  const priceInput = document.getElementById('price');

  const addBtn = document.getElementById('add-btn');
  addBtn.addEventListener('click', addItems)

  const clearBtn = document.querySelector('button.btn.clear');
  clearBtn.addEventListener('click', (e) => {
    location.reload()
  });

  function addItems() {
    if (!(LapModelInput.value && storageSpaceInput.value && priceInput.value)) return;

    addBtn.disabled = true;

    const laptopModel = LapModelInput.value;
    const storage = storageSpaceInput.value;
    const price = priceInput.value;

    const liEl = document.createElement('li');
    liEl.className = 'laptop-item';

    const article = document.createElement('article');

    const pLaptop = document.createElement('p');
    pLaptop.textContent = laptopModel;

    const pStorage = document.createElement('p');
    pStorage.textContent = `Memory: ${storage} TB`;

    const pPrice = document.createElement('p');
    pPrice.textContent = `Price: ${price}$`;

    article.appendChild(pLaptop);
    article.appendChild(pStorage);
    article.appendChild(pPrice);

    const editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';

    editBtn.addEventListener('click', () => {
      LapModelInput.value = laptopModel;
      storageSpaceInput.value = storage;
      priceInput.value = price;

      liEl.remove()

      addBtn.disabled = false;
    })

    const okBtn = document.createElement('button');
    okBtn.classList.add('btn');
    okBtn.classList.add('ok');
    okBtn.textContent = 'Ok'

    okBtn.addEventListener('click', () => {
      ulCheckList.replaceChildren();

      editBtn.remove();
      okBtn.remove();
      wishList.appendChild(liEl);

      addBtn.disabled = false;
    })

    liEl.appendChild(article);
    liEl.appendChild(editBtn);
    liEl.appendChild(okBtn);

    ulCheckList.appendChild(liEl);

    clearInputs();

  }

  function clearItems() {
    //
  }

  function clearInputs() {
    LapModelInput.value = '';
    storageSpaceInput.value = '';
    priceInput.value = '';
  }

}
