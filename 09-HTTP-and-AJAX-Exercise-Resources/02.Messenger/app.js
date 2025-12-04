function attachEvents() {
    const textAreaEl = document.getElementById('messages');
    const inputNameEl = document.querySelector('div#controls > input[name="author"]');
    const inputMessageEl = document.querySelector('div#controls > input[name="content"]');

    const submitBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');

    submitBtn.addEventListener('click', sendMsg);
    refreshBtn.addEventListener('click', getAllMsg);

    async function sendMsg() {
        const authorName = inputNameEl.value;
        const message = inputMessageEl.value;

        await fetch('http://localhost:3030/jsonstore/messenger', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "author": authorName, "content": message }),
        });

        inputNameEl.value = ''
        inputMessageEl.value = ''
    };

    async function getAllMsg() {
        const res = await fetch('http://localhost:3030/jsonstore/messenger');
        const data = await res.json();

        textAreaEl.value = '';
        const messages = Object.values(data)
            .map(msg => `${msg.author}: ${msg.content}`)
            .join('\n');

        textAreaEl.value = messages
    };

}

attachEvents();