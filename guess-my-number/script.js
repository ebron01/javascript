"use strict";

// console.log(document.querySelector(".message").textContent);
// const randNumber = Math.trunc(Math.random() * 20) + 1;
const randNumber = 1;
document.querySelector(".box").textContent = randNumber;
document.querySelector(".check").addEventListener("click", function () {
  const entry = Number(document.querySelector(".entry").value);
  if (!entry) {
    document.querySelector(".guess").textContent = "try new entry other than 0";
  }
  if (entry == randNumber) {
    document.body.style.backgroundColor = "green";
  }
});
