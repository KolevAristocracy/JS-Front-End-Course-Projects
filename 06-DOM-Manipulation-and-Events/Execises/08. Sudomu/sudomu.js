document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const sizeSelect = document.querySelector("select#size");
    const solutionForm = document.querySelector("form#solutionCheck");
    const sudokuTable = solutionForm.querySelector("table");
    const sudokuContainer = solutionForm.querySelector("table > tbody");
    const resultContainer = document.querySelector("p#check");

    sizeSelect.addEventListener("change", (event) => {
        event.preventDefault();
        event.stopPropagation();

        const size = Number(sizeSelect.value);

        const input = document.createElement("input");
        input.step = 1;
        input.min = 1;
        input.max = size;
        input.type = "number";
        input.required = true;

        const cell = document.createElement("td");
        cell.appendChild(input);

        const row = document.createElement("tr");
        for (let i = 0; i < size; i++) row.appendChild(cell.cloneNode(true));

        sudokuContainer.replaceChildren(...Array.from({ length: size }, () => row.cloneNode(true)));
    });

    solutionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (check()) {
            resultContainer.textContent = "Success!";
            sudokuTable.style.border = "2px solid green";
        } else {
            resultContainer.textContent = "Keep trying..."
            sudokuTable.style.border = "2px solid red";
        }
    });

    solutionForm.addEventListener("reset", () => {
        sudokuTable.style.border = "";
        resultContainer.textContent = "";
    });

    function check() {
        // columnIndex: { [number]: true }
        const verticalChecker = {};

        const rows = Array.from(sudokuContainer.querySelectorAll("tr"));
        for (let i = 0; i < rows.length; i++) {
            const values = Array.from(rows[i].querySelectorAll("td > input")).map(x => x.value);

            // rowIndex: { [number]: true }
            const horizontalChecker = {};
            for (let j = 0; j < values.length; j++) {
                if (horizontalChecker.hasOwnProperty(values[j])) return false;

                if (!verticalChecker.hasOwnProperty(j)) verticalChecker[j] = {};
                if (verticalChecker[j].hasOwnProperty(values[j])) return false;

                horizontalChecker[values[j]] = true;
                verticalChecker[j][values[j]] = true;
            }
        }
        return true;
    }

};