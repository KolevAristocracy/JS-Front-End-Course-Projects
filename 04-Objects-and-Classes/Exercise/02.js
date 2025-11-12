function towns(arr) {
    const townsObjects = []

    for (const data of arr) {
        let [townName, latitude, longitude] = data.split(" | ");
        latitude = Number(latitude);
        longitude = Number(longitude);
        
        const townsInfo = {
            "town": townName,
            "latitude": latitude.toFixed(2),
            "longitude": longitude.toFixed(2)
        };

        townsObjects.push(townsInfo)
    }
    for (obj of townsObjects) {
        console.log(obj);
    }

}


towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])

towns(['Plovdiv | 136.45 | 812.575'])
