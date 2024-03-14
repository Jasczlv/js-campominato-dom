//
// UTILITY
//

function createBombs() {
  let arrayBombe = [];
  let uniqueNumber = 0;

  //genera bombe in un array
  do {
    uniqueNumber = Math.floor(Math.random() * 100);
    if (!arrayBombe.includes(uniqueNumber)) {
      arrayBombe.splice(uniqueNumber, 1, uniqueNumber);
    }
  } while (arrayBombe.length < 16);

  return arrayBombe;
}

function createGrid(bombs) {
  // createBombs();
  // console.log(arrayBombe, arrayCampo);
  row.innerHTML = ""; //reset
  let quadrato = lato ** 2;
  for (i = 0; i < quadrato; i++) {
    punteggio.innerHTML;
    const cell = document.createElement("div");
    row.append(cell);
    cell.className = colMod;
    let indexPlus = i + 1;
    cell.innerHTML = indexPlus;
    cell.addEventListener("click", function () {
      if (bombs.includes(indexPlus)) {
        cell.classList.add("col-bomb");
        row.classList.add("perso");
        console.log("hai perso");
      } else {
        cell.classList.add("col-clicked");
        punteggio.innerHTML = parseInt(punteggio.innerHTML.valueOf()) + 100;
      }
    });
  }
}

//
// MAIN
//

const play = document.querySelector(".start");

const row = document.querySelector(".row.f-wrap");

const facile = document.querySelector("option[value=facile]");
const media = document.querySelector("option[value=media]");
const difficile = document.querySelector("option[value=difficile]");
const punteggio = document.querySelector("span[class=punteggio]");
//valori di default
let lato = 10;
let colMod = "col-facile";
let bombe = createBombs();

//modalità facile imposta lato a 10
facile.addEventListener("click", function () {
  colMod = "col-facile";
  lato = 10;
});
//modalità media imposta lato a 9
media.addEventListener("click", function () {
  colMod = "col-media";
  lato = 9;
});
//modalità difficile imposta lato a 7
difficile.addEventListener("click", function () {
  colMod = "col-difficile";
  lato = 7;
});

// Creo il gioco
play.addEventListener("click", function () {
  createGrid(bombe);
});

// devo inserire le bombe
// per inserire le bombe come faccio?
// devo creare due array
// i due array devo confrontarli
// come faccio?
// devo creare due array uguali di grandezza
// nel array bombe pusho 16 numeri random
// pusho dal array bombe al array campo le bombe in x posizione
