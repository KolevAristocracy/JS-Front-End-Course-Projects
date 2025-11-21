function focused() {
    const allInputEls = document.querySelectorAll('input[type="text"]');
    for (const inputEl of allInputEls) {
        inputEl.addEventListener('focus', addFocusClass);
        inputEl.addEventListener('blur', removeFocusClass);
    }

    function addFocusClass(e) {
        e.target.parentElement.classList.add('focused')
    };

    function removeFocusClass(e) {
        e.target.parentElement.classList.remove('focused');
    };
}
