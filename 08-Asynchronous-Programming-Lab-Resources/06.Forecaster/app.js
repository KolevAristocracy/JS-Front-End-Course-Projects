function attachEvents() {
    const locationInputEl = document.getElementById('location');
    const inputBtnEl = document.getElementById('submit');
    const forecastDivEl = document.getElementById('forecast')
    const currentDivEl = document.getElementById('current');
    const upcomingDivEl = document.getElementById('upcoming');

    const weatherSymbols = {
        'Sunny': '&#x2600;',        // ☀️
        'Partly sunny': '&#x26C5;', // ⛅
        'Overcast': '&#x2601;',     // ☁️
        'Rain': '&#x2614;',         // ☔
        'Degrees': '&#176;'         // °
    };

    inputBtnEl.addEventListener('click', getSearchedTown);

    async function getSearchedTown() {
        try {
            // Get location code
            const locationName = locationInputEl.value.trim();

            const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');
            const data = await res.json();
            const location = data.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

            let code = location.code;

            const current = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
            const currentData = await current.json();

            const upcoming = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
            const upcomingData = await upcoming.json();

            // Display results
            forecastDivEl.style.display = 'block';
            displayCurrentWeather(currentData);
            displayUpcomingWeather(upcomingData);

        } catch (err) {
            forecastDivEl.style.display = 'block';
            // Clear previous results on error
            if (currentDivEl.children.length > 1) currentDivEl.children[1].remove();
            if (upcomingDivEl.children.length > 1) upcomingDivEl.children[1].remove();

            currentDivEl.querySelector('.label').textContent = "Error";
        };
    };

    function displayCurrentWeather(data) {
        // Clear previous results
        if (currentDivEl.children.length > 1) currentDivEl.children[1].remove();

        const { condition, high, low } = data.forecast;
        const forecastsDiv = document.createElement('div');
        forecastsDiv.className = 'forecasts';

        const symbolSpan = document.createElement('span');
        symbolSpan.className = 'conditional symbol';
        symbolSpan.innerHTML = weatherSymbols[condition]

        const conditionSpan = document.createElement('span');
        conditionSpan.className = 'condition';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'forecast-data';
        nameSpan.textContent = data.name;

        const tempSpan = document.createElement('span');
        tempSpan.className = 'forecast-data';
        tempSpan.innerHTML = `${low}${weatherSymbols.Degrees}/${high}${weatherSymbols.Degrees}`;

        const conditionTextSpan = document.createElement('span');
        conditionTextSpan.className = 'forecast-data';
        conditionTextSpan.textContent = condition;

        conditionSpan.append(nameSpan, tempSpan, conditionTextSpan);
        forecastsDiv.append(symbolSpan, conditionSpan);
        currentDivEl.appendChild(forecastsDiv);

    };

    function displayUpcomingWeather(data) {
        if(upcomingDivEl.children.length > 1) upcomingDivEl.children[1].remove();

        const forecastInfoDiv = document.createElement('div');
        forecastInfoDiv.className = 'forecast-info';

        data.forecast.forEach(day => {
            const upcomingSpan = document.createElement('span');
            upcomingSpan.className = 'upcoming';

            const symbol = document.createElement('span');
            symbol.className = 'symbol';
            symbol.innerHTML = weatherSymbols[day.condition];

            const temp = document.createElement('span');
            temp.className = 'forecast-data';
            temp.innerHTML = `${day.low}${weatherSymbols.Degrees}/${day.high}${weatherSymbols.Degrees}`;

            const condition = document.createElement('span');
            condition.className = 'forecast-data';
            condition.textContent = day.condition;

            upcomingSpan.append(symbol, temp, condition);
            forecastInfoDiv.appendChild(upcomingSpan);
        });

        upcomingDivEl.appendChild(forecastInfoDiv);

    }



};
attachEvents();