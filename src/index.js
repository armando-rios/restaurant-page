import "./style.css"
import { home } from "./modules/home.js"
import { menu } from "./modules/menu.js";

const actions = {
  home,
  menu,
  // about,
  // reservations,
  // contact,
};

document.querySelector("nav").addEventListener("click", (event) => {
  const action = actions[event.target.id];
  if (action) {
    action();
  }
});

home()
