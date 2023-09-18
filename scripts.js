// const

function createGrid(gridSize = 16) {
  const container = document.querySelector("#container");
  container.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");

    row.classList.add("row");

    for (let i = 0; i < gridSize; i++) {
      const tile = document.createElement("div");

      tile.classList.add("tile");
      row.appendChild(tile);
    }

    container.appendChild(row);
  }
}

createGrid();

let mouseDown = false;
const tileList = document.querySelectorAll(".tile");

tileList.forEach((tile) => {
  tile.addEventListener("mousedown", () => {
    mouseDown = true;
    tile.classList.add("colored");
  });

  tile.addEventListener("mouseup", () => {
    mouseDown = false;
  });

  tile.addEventListener("mouseover", () => {
    if (mouseDown) {
      tile.classList.add("colored");
    }
  });
});
