/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const palos = ["spade", "club", "heart", "diamond"];
  const simbolos = {
    spade: "♠︎",
    club: "♣︎",
    heart: "♥︎",
    diamond: "♦︎"
  };
  const valores = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  const cartaElement = document.querySelector(".card");
  const valorElement = document.querySelector(".value");
  const symbolTopLeftElement = document.querySelector(".symbol.top-left");
  const symbolBottomRightElement = document.querySelector(
    ".symbol.bottom-right"
  );

  function generarCarta() {
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const valor = valores[Math.floor(Math.random() * valores.length)];

    valorElement.innerHTML = valor;
    symbolTopLeftElement.innerHTML = simbolos[palo];
    symbolBottomRightElement.innerHTML = simbolos[palo];
    cartaElement.classList.add(palo);
    cartaElement.style.borderRadius = "10px";
    cartaElement.style.border = "2px solid black";
  }
  generarCarta();

  console.log("Hello Rigo from the console!");
};
