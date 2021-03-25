const toggle = document.querySelector("nav button");
const signUp = document.querySelector(".cta");
const nav = document.querySelector("nav");
const modalContainer = document.querySelector(".modal-container");
const closeModal = document.querySelector(".modal-header button");

toggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
signUp.addEventListener("click", () => {
  modalContainer.classList.add("showModale");
});
closeModal.addEventListener("click", () => {
  modalContainer.classList.remove("showModale");
});
