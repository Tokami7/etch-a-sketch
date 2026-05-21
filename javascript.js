const container = document.querySelector("#container");
const squares = document.querySelectorAll(".column");
const sketch = document.querySelector("#sketch");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
let size = 40;


function createGrid() {

    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < size; j++) {
            const column = document.createElement("div");
            column.className = "column";
            column.style.border = "1px solid black";
            column.addEventListener("mouseenter", (e) => e.target.style.backgroundColor = "gray");
            row.appendChild(column);
        };
        sketch.appendChild(row);
    };
};

leftButton.addEventListener("click", () => {
    let input = Number(prompt("Enter a grid size (max 100)", 16))
    if (input <= 100 && input > 0) {
        sketch.innerHTML = "";
        size = input;
        createGrid();
    } else {
        alert("Invalid size");
    };
});

rightButton.addEventListener("click", () => {
    sketch.innerHTML = "";
    createGrid();
});

createGrid();