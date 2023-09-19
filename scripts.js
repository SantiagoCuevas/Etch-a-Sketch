const BLACK = "black";
let rainbowMode = false;

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

      color = rainbowMode ? randomColor() : BLACK;
      tile.style.backgroundColor = color;
    });

    tile.addEventListener("mouseup", () => {
      mouseDown = false;
    });

    tile.addEventListener("mouseover", () => {
      if (!mouseDown) {
        return;
      }

      color = rainbowMode ? randomColor() : BLACK;
      tile.style.backgroundColor = color;
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

const clearGridBtn = document.querySelector(".clearGrid");

clearGridBtn.addEventListener("click", () => {
  const tileList = document.querySelectorAll(".tile");

  tileList.forEach((tile) => (tile.style.backgroundColor = ""));
});

const rainbowModeBtn = document.querySelector(".rainbow");

rainbowModeBtn.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
});

function randomColor() {
  let r = Math.floor(Math.random() * 256);

  let g = Math.floor(Math.random() * 256);

  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
