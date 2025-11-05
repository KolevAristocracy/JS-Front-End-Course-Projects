function loadingBar(number) {
    initialLoadinBar = `[${'.'.repeat(10)}]`

    for (let i = 1; i <= number / 10; i++) {
        initialLoadinBar = initialLoadinBar.replace('.', '%')
    }

    if (number === 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]")
    }
    else {
        console.log(`${number}% ${initialLoadinBar}\nStill loading...`);
    }
}


loadingBar(30)
loadingBar(50)
loadingBar(100)
