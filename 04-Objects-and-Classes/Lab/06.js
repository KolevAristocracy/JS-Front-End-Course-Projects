function meetings(arr) {
    const meetingsOrganizer = {};

    for (let data of arr) {
        const details = data.split(" ")
        const dayOfWeek = details[0]
        const name = details[1]

        if (dayOfWeek in meetingsOrganizer) {
            console.log(`Conflict on ${dayOfWeek}!`)
        }
        else {
            meetingsOrganizer[dayOfWeek] = name
            console.log(`Scheduled for ${dayOfWeek}`);

        }
    }

    for (let key in meetingsOrganizer) {
        console.log(`${key} -> ${meetingsOrganizer[key]}`)
    }
}



meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])

