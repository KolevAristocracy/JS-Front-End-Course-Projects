document.addEventListener('DOMContentLoaded', solve);
function solve() {
    const emailInputEl = document.getElementById('email');

    emailInputEl.addEventListener('change', handleEmailChange);

    function handleEmailChange() {
        const email = emailInputEl.value.trim();
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/;

        if (!pattern.test(email)) {
            emailInputEl.classList.add('error');
        } else {
            emailInputEl.classList.remove('error');
        }
    }
}
