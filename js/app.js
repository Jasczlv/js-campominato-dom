const play = document.querySelector(".start");

const row = document.querySelector(".row.f-wrap");

const facile = document.querySelector("option[value=facile]");
const media = document.querySelector("option[value=media]");
const difficile = document.querySelector("option[value=difficile]");

let lato = 10;
let colMod = "col-facile";
let arrayBombe = [];
let arrayCampo = [];

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
  // createBombs();
  // console.log(arrayBombe, arrayCampo);
  row.innerHTML = ""; //reset
  let quadrato = lato ** 2;
  for (i = 0; i < quadrato; i++) {
    const cell = document.createElement("div");
    row.append(cell);
    cell.className = colMod;
    cell.innerHTML = i + 1;
    cell.addEventListener("click", function () {
      cell.classList.add("col-clicked");
    });
  }
}
createBombs();
console.log(arrayBombe);

function createBombs() {
  arrayBombe = []; //reset del array
  let uniqueNumber = 0;

  //genera bombe in un array
  do {
    uniqueNumber = Math.floor(Math.random() * 100);
    if (!arrayBombe.includes(uniqueNumber) && arrayBombe.length < 100) {
      arrayBombe.splice(uniqueNumber, 1, uniqueNumber);
    } else {
      arrayBombe.push("0");
    }
  } while (arrayBombe.length < 100);
}

// function createBombs() {
//   arrayBombe = [];
//   arrayCampo = [];
//   let uniqueNumber = 0;
//   let quadrato = lato ** 2;

//   //genera bombe in un array
//   do {
//     uniqueNumber = Math.floor(Math.random() * 100);
//     if (!arrayBombe.includes(uniqueNumber) && arrayBombe.length < 17) {
//       arrayBombe.push(uniqueNumber);
//     } else {
//       arrayBombe.push("0");
//     }
//   } while (arrayBombe.length < 100);

//   //genera array del campo
//   for (i = 1; i < quadrato + 1; i++) {
//     if (arrayBombe[i] !== "0") {
//       arrayCampo.splice(i, 1, arrayBombe[i]);
//     } else {
//       arrayCampo.push("vuoto");
//     }
//   }
// }

// devo inserire le bombe
// per inserire le bombe come faccio?
// devo creare due array
// i due array devo confrontarli
// come faccio?
// devo creare due array uguali di grandezza
// nel array bombe pusho
