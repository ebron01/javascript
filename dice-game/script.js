"use strict";

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const btnrollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector(".btn--new");

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let activePlayer = 0;

const currentScoreChanger = function () {
  const randNum = Math.trunc(Math.random() * 6 + 1);
  // const randNum = 1;
  console.log(randNum);
  diceEl.src = `dice-${randNum}.png`;
  diceEl.classList.remove("hidden");
  if (randNum == 1) {
    // console.log(`activePlayer : ${activePlayer}`);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    activePlayer == 0 ? activePlayer++ : activePlayer--;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add("player--active");
    currentScore0.textContent = 0;
    currentScore1.textContent = 0;
    // document.querySelector(`.player--${activePlayer}`).classList;
    // console.log(`changed activePlayer : ${activePlayer}`);
  } else {
    if (activePlayer == 0) {
      currentScore0.textContent = Number(currentScore0.textContent) + randNum;
    } else {
      currentScore1.textContent = Number(currentScore1.textContent) + randNum;
    }
  }
};
const holdScore = function () {
  if (activePlayer == 0) {
    score0El.textContent =
      Number(score0El.textContent) + Number(currentScore0.textContent);
  } else {
    score1El.textContent =
      Number(score1El.textContent) + Number(currentScore1.textContent);
  }
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");
  activePlayer == 0 ? activePlayer++ : activePlayer--;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
  if (
    Number(score0El.textContent) >= 100 ||
    Number(score1El.textContent) >= 100
  ) {
    btnrollDice.classList.add("hidden");
    btnHold.classList.add("hidden");
    diceEl.classList.add("hidden");
  }
  if (Number(score0El.textContent) >= 100) {
    document.querySelector(".player--1").classList.add("player--winner");
    document.querySelector(".player--0").classList.add(".name");
  } else if (Number(score1El.textContent) >= 100) {
    document.querySelector(".player--0").classList.add("player--winner");
    document.querySelector(".player--1").classList.add(".name");
    console.log("Player2 wins!!!");
  }
};
const reset = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.add("hidden");
  // console.log(
  //   document.querySelector(".player--0").classList,
  //   document.querySelector(".player--1").classList
  // );
  if (
    document.querySelector(".player--1").classList.contains("player--active")
  ) {
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
  }
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--0").classList.remove(".name");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove(".name");
  activePlayer = 0;
  btnrollDice.classList.remove("hidden");
  btnHold.classList.remove("hidden");
  diceEl.classList.remove("hidden");
};

btnrollDice.addEventListener("click", currentScoreChanger);
btnHold.addEventListener("click", holdScore);
btnReset.addEventListener("click", reset);
