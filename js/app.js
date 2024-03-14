const play = document.querySelector(".start");

const row = document.querySelector(".row.f-wrap");

const facile = document.querySelector("option[value=facile]");
const media = document.querySelector("option[value=media]");
const difficile = document.querySelector("option[value=difficile]");

let lato = 10;
let colMod = "col-facile";

facile.addEventListener("click", function () {
  colMod = "col-facile";
  lato = 10;
});
media.addEventListener("click", function () {
  colMod = "col-media";
  lato = 9;
});
difficile.addEventListener("click", function () {
  colMod = "col-difficile";
  lato = 7;
});

// console.log(row);

play.addEventListener("click", createGrid);

function createGrid() {
  row.innerHTML = ""; //reset
  let quadrato = lato ** 2;
  for (i = 0; i < quadrato; i++) {
    const cell = document.createElement("div");
    row.append(cell);
    cell.className = colMod;
    cell.innerHTML = i + 1;
    cell.addEventListener("click", function () {
      cell.classList.toggle("col-clicked");
    });
  }
}

let arrayBombe = [];
let arrayCampo = [];
createBombs();
console.log(arrayBombe, arrayCampo);

function createBombs() {
  for (i = 1; i < 17; i++) {
    arrayBombe.push(`bomba numero ${i}`);
  }
  let quadrato = lato ** 2;
  for (i = 1; i < quadrato + 1; i++) {
    arrayCampo.push(`cella numero ${i}`);
  }
}
