"use strict";

const openMenu = document.querySelector(".open");
const closeMenu = document.querySelector(".close");
const menu = document.querySelector(".list");

const openHandler = function () {
  menu.classList.remove("hidden");
  menu.classList.add("move-in");
};

const closeHandler = function () {
  // menu.classList.add("hidden");
  menu.classList.add("move-out");
};

openMenu.addEventListener("click", openHandler);

closeMenu.addEventListener("click", closeHandler);
