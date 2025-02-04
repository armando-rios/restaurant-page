import heroImg from "../img/hero.jpg"

export function home() {
  content.innerHTML = ""
  const image = document.createElement("img")
  const title = document.createElement("h2")
  const subtitle = document.createElement("h3")
  image.src = heroImg
  image.classList.add("content-bg")
  title.textContent = "Michelin Star Experience"
  subtitle.textContent = "An unparalleled fine dining experience"
  title.classList.add("hero-title")
  subtitle.classList.add("hero-subtitle")
  content.append(image)
  content.append(title)
  content.append(subtitle)
}
