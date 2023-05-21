"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

//index.html has 3 elements with show-modal class. To iterate each element we
//can create a loop and manipulate the classes and elements.
const btnShowModal = document.querySelectorAll(".show-modal");
// for (let i = 0; i < btnShowModal.length; i++) {
//   console.log(btnShowModal[i].textContent);
// }

//when clicked on any of the buttons. it will turn on modal pop up and background overlay by removing "hidden" class from it.
const openModal = function () {
  //using modal.classList.remove we get hidden class deleted from
  // "modal hidden". css class hidden was keeping modal window to be visible, by deleting that classes association with modal, DOM started to display modal pop-up
  modal.classList.remove("hidden");
  //deleting hidden from "overlay hidden" combo, we have only overlay class for that div
  overlay.classList.remove("hidden");
};

//we will create a function that hides pop up and overlay when called
const closeModal = function () {
  //when clicked x on pop up or clicked on overlaythis func will work. it will turn of modal pop up and background overlay by adding "hidden" class to it.
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnShowModal.length; i++) {
  console.log(btnShowModal[i].textContent);
  //by getting document.querySelector('.modal').classList we get class names assosiated with first encountered modal element
  console.log(modal.classList);
  //when clicked on any of the buttons openModal func will work.it will turn on
  //modal pop up and background overlay by removing 'hidden' class from it.
  btnShowModal[i].addEventListener("click", openModal);

  //when clicked x on pop up, btnCloseModals click func will work. it will turn off modal pop up and background overlay by adding "hidden" class to it.
  btnCloseModal.addEventListener("click", closeModal);
  //when clicked outside of popup,  click func of overlay will work. it will turn of modal pop up and background overlay by adding "hidden" class to it.
  overlay.addEventListener("click", closeModal);
  //by adding a event listener to whole document we can get when a key is down or in other words key is pressed. if we define a parameter like event(name
  //do not matter) we can get pressed key information by accessing ["key"] object. event['key'] == event.key
  document.addEventListener("keydown", function (event) {
    // console.log(event["key"]);
    // console.log(modal.checkVisibility());
    if (event.key == "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}
