function solve(arr) {
    const numOfFarmers = Number(arr.shift());
    const farmersDetails = {};

    for (let i = 0; i < numOfFarmers; i++) {
        const [name, workArea, tasks] = arr.shift().split(' ')
        farmersDetails[name] = {
            name,
            workArea,
            tasks: Array.from(tasks.split(','))
        };
    };

    let allCommands = arr.shift();
    while (allCommands !== "End") {
        const commands = allCommands.split(' / ');
        const action = commands[0]
        const farmerName = commands[1];
        const farmerObj = farmersDetails[farmerName];

        if (action === "Execute") {
            const workArea = commands[2];
            const task = commands[3];
            const skills = farmerObj.tasks;

            if (workArea === farmerObj.workArea && skills.includes(task)) {
                console.log(`${farmerName} has executed the task: ${task}!`);

            } else {
                console.log(`${farmerName} cannot execute the task: ${task}.`);
            }
        } else if (action === "Change Area") {
            const newWorkArea = commands[2];
            farmerObj.workArea = newWorkArea;
            console.log(`${farmerName} has changed their work area to: ${newWorkArea}`);

        } else if (action === "Learn Task") {
            const newTask = commands[2];
            if (farmerObj.tasks.includes(newTask)) {
                console.log(`${farmerName} already knows how to perform ${newTask}.`)
            } else {
                farmerObj['tasks'].push(newTask);
                console.log(`${farmerName} has learned a new task: ${newTask}.`);

            }
        }

        allCommands = arr.shift();
    }

    for (const key of Object.values(farmersDetails)) {
        const name = key.name;
        const workArea = key.workArea;
        const tasks = key.tasks.sort((a, b) => a.localeCompare(b)).join(', '); // key.tasks.sort().join(", ")

        console.log(`Farmer: ${name}, Area: ${workArea}, Tasks: ${tasks}`);

    }


}


solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]
)