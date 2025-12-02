function solve() {
    const stopNameSpanEl = document.querySelector('.info');
    const departBtnEl = document.querySelector('#depart');
    const arriveBtnEl = document.querySelector('#arrive');

    let stopId = 'depot';
    let stopName = '';

    async function depart() {
        try {
            const res = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stopId}`);
            const data = await res.json();
            stopId = data.next;
            stopName = data.name;

            stopNameSpanEl.textContent = `Next stop ${stopName}`;
            departBtnEl.disabled = true;
            arriveBtnEl.disabled = false;
        } catch (err) {
            stopNameSpanEl.textContent = 'Error';
            departBtnEl.disabled = true;
            arriveBtnEl.disabled = true;
        }
    };

    function arrive() {
        stopNameSpanEl.textContent = `Next stop ${stopName}`;
        departBtnEl.disabled = false;
        arriveBtnEl.disabled = true;
    };

    return {
        depart,
        arrive
    };
}

let result = solve();