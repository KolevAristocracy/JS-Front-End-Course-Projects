function inventory(arr) {
    const heroes = [];

    for (info of arr) {
        const [heroName, level, items] = info.split(" / ")
        const heroData = {
            "name": heroName,
            "level": Number(level),
            "items": items
        }

        heroes.push(heroData)
    }
    for (const hero of heroes.sort((a, b) => a.level - b.level)) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
        
    }
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])
