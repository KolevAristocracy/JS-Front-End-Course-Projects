const url = 'http://localhost:3030/jsonstore/games';

const divGamesList = document.getElementById('games-list');

const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const maxPlayersInput = document.getElementById('players');

const loadBtn = document.getElementById('load-games');
const addGameBtn = document.getElementById('add-game');
const editGameBtn = document.getElementById('edit-game');

loadBtn.addEventListener('click', loadGames);
addGameBtn.addEventListener('click', addGame);
editGameBtn.addEventListener('click', editGame);

async function editGame(e) {

    const name = nameInput.value;
    const type = typeInput.value;
    const players = maxPlayersInput.value;
    const id = e.target.dataset.id;

    const body = { name, type, players, _id: id };

    await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })

    editGameBtn.disabled = true;
    addGameBtn.disabled = false;

    clearInputs();
    await loadGames();
}

async function addGame() {
    const name = nameInput.value
    const type = typeInput.value
    const players = maxPlayersInput.value

    if (!(name && type && players)) return;

    const body = { name, type, players }

    await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    })


    clearInputs();
    await loadGames();

}

async function loadGames() {
    editGameBtn.disabled = true;

    const res = await fetch(url);
    const games = await res.json();

    divGamesList.replaceChildren(); // check if judge will throw error.

    for (const game of Object.values(games)) {
        renderGames(game)
    }

}

function renderGames(game) {
    const name = game.name;
    const type = game.type;
    const players = game.players;
    const id = game._id;

    const divMain = document.createElement('div');
    divMain.className = 'board-game';

    const divContent = document.createElement('div');
    divContent.className = 'content';

    const btnContainer = document.createElement('div');
    btnContainer.className = 'buttons-container';

    const pName = document.createElement('p');
    pName.textContent = name

    const pPlayers = document.createElement('p');
    pPlayers.textContent = players

    const pType = document.createElement('p');
    pType.textContent = type;

    const changeBtn = document.createElement('button');
    changeBtn.className = 'change-btn';
    changeBtn.dataset.id = id;
    changeBtn.textContent = 'Change';

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.dataset.id = id;
    deleteBtn.textContent = 'Delete';


    divContent.appendChild(pName);
    divContent.appendChild(pPlayers);
    divContent.appendChild(pType);

    btnContainer.appendChild(changeBtn);
    btnContainer.appendChild(deleteBtn);

    divMain.appendChild(divContent);
    divMain.appendChild(btnContainer);

    divGamesList.appendChild(divMain);

    changeBtn.addEventListener('click', () => {
        addGameBtn.disabled = true;
        editGameBtn.disabled = false;
        editGameBtn.dataset.id = id

        nameInput.value = name;
        typeInput.value = type;
        maxPlayersInput.value = players;

        // divMain.remove(); // Check later if i should enable this
    })

    deleteBtn.addEventListener('click', async () => {
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
        await loadGames();
    })
}

function clearInputs() {
    nameInput.value = ''
    typeInput.value = ''
    maxPlayersInput.value = ''
}