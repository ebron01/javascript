"use strict";

//comments covers different usages

let randNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector(".score").textContent);
let hscore = Number(document.querySelector(".hscore").textContent);

//css change function
const cssChange = function (classes, message) {
  document.querySelector(`.${classes}`).textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const entry = Number(document.querySelector(".entry").value);
  let score = Number(document.querySelector(".score").textContent);
  //when no entry is done and check button clicked
  if (!entry) {
    cssChange("guess", "No Guess");
    // document.querySelector(".guess").textContent = "No Guess";
  }
  //when guess is correct
  else if (entry == randNumber) {
    // document.body.style.backgroundColor = "green";
    cssChange("box", randNumber);
    // document.querySelector(".box").textContent = randNumber;
    document.querySelector("body").style.backgroundColor = "green";
    cssChange("guess", "Correct Guess!!!");
    // document.querySelector(".guess").textContent = "Correct Guess!!!";
    score += 10;
    cssChange("score", score);
    // document.querySelector(".score").textContent = score;

    //sets the high score
    if (score > hscore) {
      hscore = score;
      cssChange("hscore", score);
      // document.querySelector(".hscore").textContent = score;
    }
  }
  //when the guess is different than the secret number
  else if (entry != randNumber) {
    if (score <= 0) {
      cssChange("guess", "You lost the game!");
      // document.querySelector(".guess").textContent = "You lost the game!";
    } else {
      score -= 1;
      cssChange("guess", entry > randNumber ? "Too high" : "Too low");
      // document.querySelector(".guess").textContent =
      // entry > randNumber ? "Too high" : "Too low";
      cssChange("score", score);
      // document.querySelector(".score").textContent = score;
    }
  }
  //when guess is higher than the secret number
  // else if (entry > randNumber) {
  //   if (score <= 0) {
  //     document.querySelector(".guess").textContent = "You lost the game!";
  //   } else {
  //     score -= 1;
  //     document.querySelector(".guess").textContent = "Too high";
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
  // //when guess is lower than the secret number
  // else if (entry < randNumber) {
  //   if (score <= 0) {
  //     document.querySelector(".guess").textContent = "You lost the game!";
  //   } else {
  //     score -= 1;
  //     document.querySelector(".guess").textContent = "Too low";
  //     document.querySelector(".score").textContent = score;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector("body").style.backgroundColor = "black";
  cssChange("guess", "Start Guessing...");
  // document.querySelector(".guess").textContent = "Start Guessing...";
  cssChange("score", score);
  // document.querySelector(".score").textContent = score;
  randNumber = Math.trunc(Math.random() * 20) + 1;
  cssChange("box", "?");
  // document.querySelector(".box").textContent = "?";
  document.querySelector(".entry").value = "";
});
