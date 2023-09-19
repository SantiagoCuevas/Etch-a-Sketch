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
  addTileListener();
}

createGrid();

let mouseDown = false;

function addTileListener() {
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
}

const DELAY_MS = 500;
let timeoutID = null;

function updateGridSize() {
  clearTimeout(timeoutID);

  const sliderValue = document.getElementById("slider").value;

  document.getElementById(
    "gridSize"
  ).innerHTML = `Grid Size: ${sliderValue} x ${sliderValue}`;

  timeoutID = setTimeout(() => createGrid(sliderValue), DELAY_MS);
}
