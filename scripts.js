function createGrid(gridSize = 16) {
  for (let i = 0; i < 16; i++) {
    const container = document.querySelector("#container");
    const row = document.createElement("div");

    row.classList.add("row");

    for (let i = 0; i < 16; i++) {
      const tile = document.createElement("div");

      tile.classList.add("tile");
      row.appendChild(tile);
    }

    container.appendChild(row);
  }
}
createGrid();
