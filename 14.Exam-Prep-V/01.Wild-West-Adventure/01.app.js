function solve(arr) {
    const maxHP = 100;
    const maxBulletCapacity = 6;

    const n = Number(arr[0]);
    const posseInfo = {};

    for (let i = 1; i <= n; i++) {
        const [name, hp, bullets] = arr[i].split(' ');
        posseInfo[name] = { name, hp: Number(hp), bullets: Number(bullets) };
    }

    for (let i = n + 1; arr[i] !== 'Ride Off Into Sunset'; i++) {
        const currentCommand = arr[i].split(' - ');
        const action = currentCommand[0];
        const charName = currentCommand[1];

        const currentCharacter = posseInfo[charName];

        if (action === 'FireShot') {
            const target = currentCommand[2];
            if (currentCharacter.bullets !== 0) {
                currentCharacter.bullets -= 1
                console.log(`${charName} has successfully hit ${target} and now has ${currentCharacter.bullets} bullets!`);

            } else {
                console.log(`${charName} doesn't have enough bullets to shoot at ${target}!`)
            }
        } else if (action === 'TakeHit') {
            const damage = Number(currentCommand[2]);
            const attacker = currentCommand[3];

            if (currentCharacter.hp - damage > 0) {
                currentCharacter.hp -= damage;
                console.log(`${charName} took a hit for ${damage} HP from ${attacker} and now has ${currentCharacter.hp} HP!`);

            } else {
                delete posseInfo[charName];
                console.log(`${charName} was gunned down by ${attacker}!`);
            }
        } else if (action === 'Reload') {
            if (currentCharacter.bullets >= maxBulletCapacity) {
                console.log(`${charName}'s pistol is fully loaded!`);

            } else {
                const bulletsReloaded = maxBulletCapacity - currentCharacter.bullets;
                currentCharacter.bullets = maxBulletCapacity;
                console.log(`${charName} reloaded ${bulletsReloaded} bullets!`);

            }
        } else if (action === 'PatchUp') {
            const amount = Number(currentCommand[2]);
            if (currentCharacter.hp >= maxHP) {
                console.log(`${charName} is in full health!`);
            } else {
                currentCharacter.hp += amount
                if (currentCharacter.hp > maxHP) {
                    const recoveredAmount = currentCharacter.hp - maxHP;
                    currentCharacter.hp = maxHP;
                    console.log(`${charName} patched up and recovered ${recoveredAmount} HP!`);

                } else {
                    console.log(`${charName} patched up and recovered ${amount} HP!`);

                }
            }

        }
    }

    for (member of Object.values(posseInfo)) {
        console.log(`${member.name}\n HP: ${member.hp}\n Bullets: ${member.bullets}`);

    }
}

solve(["2",
    "Gus 100 0",
    "Walt 100 6",
    "TakeHit - Gus - 80 - Bandit",
    "PatchUp - Gus - 20",
    "Ride Off Into Sunset"])

