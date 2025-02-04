import "./style.css"
import { home } from "./modules/home.js"

const actions = {
  home,
};

document.querySelector("nav").addEventListener("click", (event) => {
  const action = actions[event.target.id];
  if (action) {
    action();
  }
});

home()
