"use strict";

//Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnrollDice = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnReset = document.querySelector(".btn--new");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let currentScore0 = document.getElementById("current--0");
let currentScore1 = document.getElementById("current--1");

//starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");
let activePlayer = 0;

const switchPlayer = function () {
  activePlayer == 0 ? activePlayer++ : activePlayer--;
  //instead off adding and removing classes, we will use toggle. toggle if selected class is not
  //on player and removes that class if defined.
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

const currentScoreChanger = function () {
  const randNum = Math.trunc(Math.random() * 6) + 1;
  diceEl.src = `dice-${randNum}.png`;
  diceEl.classList.remove("hidden");

  if (randNum == 1) {
    switchPlayer();
  } else {
    if (activePlayer == 0) {
      currentScore0.textContent = Number(currentScore0.textContent) + randNum;
    } else {
      currentScore1.textContent = Number(currentScore1.textContent) + randNum;
    }
  }
};

const holdScore = function () {
  document.getElementById(`score--${activePlayer}`).textContent =
    Number(document.getElementById(`score--${activePlayer}`).textContent) +
    Number(document.getElementById(`current--${activePlayer}`).textContent);

  switchPlayer();
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
    player0El.classList.add("player--active");
  } else if (Number(score1El.textContent) >= 100) {
    document.querySelector(".player--0").classList.add("player--winner");
    document.querySelector(".player--1").classList.add(".name");
    player1El.classList.add("player--active");
  }
};

const reset = function () {
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  diceEl.classList.add("hidden");

  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");

  for (let i = 0; i < 2; i++) {
    document.querySelector(`.player--${i}`).classList.remove("player--winner");
    document.querySelector(`.player--${i}`).classList.remove(".name");
  }
  // document.querySelector(".player--0").classList.remove("player--winner");
  // document.querySelector(".player--0").classList.remove(".name");
  // document.querySelector(".player--1").classList.remove("player--winner");
  // document.querySelector(".player--1").classList.remove(".name");
  activePlayer = 0;
  btnrollDice.classList.remove("hidden");
  btnHold.classList.remove("hidden");
  diceEl.classList.remove("hidden");
};

btnrollDice.addEventListener("click", currentScoreChanger);
btnHold.addEventListener("click", holdScore);
btnReset.addEventListener("click", reset);
