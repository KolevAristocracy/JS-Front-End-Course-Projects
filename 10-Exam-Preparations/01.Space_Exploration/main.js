function solve(arr) {
    const astronautsCount = Number(arr.shift());
    let astronautsInfo = {};

    for (let i = 0; i < astronautsCount; i++) {
        const astronautStr = arr.shift();
        const [name, section, skills] = astronautStr.split(" ");

        astronautsInfo[name] = {
            name,
            section,
            skills: Array.from(skills.split(',')),
        };
    };

    let allCommands = arr.shift();
    while (allCommands !== 'End') {
        const commands = allCommands.split(' / ')
        const action = commands[0];
        const astronautName = commands[1];

        const astronautObj = astronautsInfo[astronautName];
        const currentSection = astronautObj['section']
        const currentSkills = astronautObj['skills']

        if (action === "Perform") {
            const spacecraftSection = commands[2];
            const skill = commands[3];
            if (spacecraftSection === currentSection && currentSkills.includes(skill)) {
                console.log(`${astronautName} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${astronautName} cannot perform the skill: ${skill}.`);
            }

        } else if (action === "Transfer") {
            const newSpacecraftSection = commands[2];
            astronautsInfo[astronautName].section = newSpacecraftSection
            console.log(`${astronautName} has been transferred to: ${newSpacecraftSection}`);


        } else if (action === "Learn Skill") {
            const newSkill = commands[2];
            if (currentSkills.includes(newSkill)) {
                console.log(`${astronautName} already knows the skill: ${newSkill}.`);
            } else {
                astronautsInfo[astronautName].skills.push(newSkill)
                console.log(`${astronautName} has learned a new skill: ${newSkill}.`);
            }
        }

        allCommands = arr.shift();
    }

    for (const ant of Object.values(astronautsInfo)) {
        console.log(`Astronaut: ${ant.name}, Section: ${ant.section}, Skills: ${ant.skills.sort((a, b) => a.localeCompare(b)).join(', ')}`);
    }

}


solve([
    "3",
    "Tom engineering_bay construction,maintenance",
    "Sara research_lab analysis,sampling",
    "Chris command_module piloting,communications",
    "Perform / Tom / engineering_bay / construction",
    "Learn Skill / Sara / robotics",
    "Perform / Sara / research_lab / robotics",
    "Transfer / Chris / research_lab",
    "Perform / Chris / research_lab / piloting",
    "Learn Skill / Tom / diagnostics",
    "Perform / Tom / engineering_bay / diagnostics",
    "End"]
);
