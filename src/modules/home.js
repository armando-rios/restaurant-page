import heroImg from "../img/hero.jpg"

export function home() {
  const image = document.createElement("img")
  const title = document.createElement("h2")
  const subtitle = document.createElement("h3")

  title.classList.add("fade-out");
  subtitle.classList.add("fade-out");
  content.innerHTML = ""
  image.src = heroImg
  image.classList.add("content-bg")
  content.append(image)

  setTimeout(() => {
    title.textContent = "Michelin Star Experience"
    subtitle.textContent = "An unparalleled fine dining experience"
    title.classList.add("hero-title")
    subtitle.classList.add("hero-subtitle")
    content.append(title)
    content.append(subtitle)
    title.classList.remove("fade-out"); // Quita la animación de salida
    title.classList.add("fade-in"); // Aplica la animación de entrada
    subtitle.classList.remove("fade-out"); // Quita la animación de salida
    subtitle.classList.add("fade-in"); // Aplica la animación de entrada
  }, 300)
}
