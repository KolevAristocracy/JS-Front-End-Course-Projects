document.addEventListener('DOMContentLoaded', solve);

function solve() {
    profileDivs = document.querySelectorAll("div.profile");

    for(let i = 0; i < profileDivs.length; i++) {
        const button = profileDivs[i].querySelector("button");
        const hiddenFieldDiv = profileDivs[i].querySelector(`div#user${i + 1}HiddenFields`)

        button.addEventListener("click", () => {
            const isLocked = profileDivs[i].querySelector(`input#user${i + 1}Lock`).checked;
            if (isLocked) return;

            if (hiddenFieldDiv.classList.contains("hidden-fields")) {
                hiddenFieldDiv.classList.remove("hidden-fields");
                button.textContent = "Show less";
            }else {
                hiddenFieldDiv.classList.add("hidden-fields");
                button.textContent = "Show more";
            };
        });
    };
};