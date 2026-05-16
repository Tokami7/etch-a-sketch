const container = document.querySelector("#container");
const rows = 16;
const columns = 16;

for (let i = 0; i < rows; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < columns; j++) {
        const column = document.createElement("div");
        column.className = "column";
        column.style.border = "2px solid black";
        column.textContent = `Cell ${i+1}-${j+1}`;
        row.appendChild(column);
    };
    container.appendChild(row);
};