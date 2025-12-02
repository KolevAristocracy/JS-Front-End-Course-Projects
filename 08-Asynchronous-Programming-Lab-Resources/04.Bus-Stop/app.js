const stopIdInputEl = document.getElementById('stopId');
const stopNameDivEl = document.getElementById('stopName');
const busesUlEl = document.getElementById('buses');

async function getInfo() {
    const stopId = stopIdInputEl.value.trim();

    try {
        const res = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId}`);
        const data = await res.json();
        const busEntries = Object.entries(data.buses);
        
        stopNameDivEl.textContent = data.name;
        busesUlEl.innerHTML = '';

        for (const [busNo, arrivalTime] of busEntries) {
            const liEl = document.createElement('li');
            liEl.textContent = `Bus ${busNo} arrives in ${arrivalTime} minutes`
            busesUlEl.appendChild(liEl);
        };

    } catch (err) {
        stopNameDivEl.textContent = "Error"
    }
    

    
}