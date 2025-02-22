import "./style.css"
import { home } from "./modules/home.js"
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";

const actions = {
  home,
  menu,
  about,
};

document.querySelector("nav").addEventListener("click", (event) => {
  const action = actions[event.target.id];
  if (action) {
    action();
  }
});

home()
