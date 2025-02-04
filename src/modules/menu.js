import heroImg from "../img/menu.webp"

export function menu() {
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
    title.textContent = "Our Signature Dishes"
    subtitle.textContent = "Indulge in curated selection of gourmet delights"
    content.append(title)
    content.append(subtitle)
    title.classList.remove("fade-out"); // Quita la animación de salida
    title.classList.add("fade-in"); // Aplica la animación de entrada
    subtitle.classList.remove("fade-out"); // Quita la animación de salida
    subtitle.classList.add("fade-in"); // Aplica la animación de entrada
  }, 300)
}
