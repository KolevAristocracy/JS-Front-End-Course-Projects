function roadRadar(speed, area) {
    let speedLimit = 0
    let speedStatus
    let result

    if (area === "motorway") speedLimit = 130;
    else if (area === "interstate") speedLimit = 90;
    else if (area === "city") speedLimit = 50;
    else if (area === "residential") speedLimit = 20;

    if (speed <= speedLimit) result = `Driving ${speed} km/h in a ${speedLimit} zone`

    else if (speed > speedLimit) {
        const overLimitSpeed = speed - speedLimit
        if (overLimitSpeed <= 20) speedStatus = "speeding"
        else if (overLimitSpeed <= 40) speedStatus = "excessive speeding"
        else speedStatus = "reckless driving"

        result = `The speed is ${overLimitSpeed} km/h faster than the allowed speed of ${speedLimit} - ${speedStatus}`
    }
    console.log(result);
    
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')
