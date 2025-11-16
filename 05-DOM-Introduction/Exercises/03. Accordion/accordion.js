function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    const divContainer = document.getElementById('extra');

    if (btn.textContent === 'More') {
        btn.textContent = 'Less'
        divContainer.style.display = 'block'
    } else {
        btn.textContent = 'More'
        divContainer.style.display = 'none'
    }
    

}