import heroImg from "../img/menu.webp"

export function menu() {
  content.innerHTML = ""
  const image = document.createElement("img")
  const title = document.createElement("h2")
  const subtitle = document.createElement("h3")
  image.src = heroImg
  image.classList.add("content-bg")
  title.textContent = "Our Signature Dishes"
  subtitle.textContent = "Indulge in curated selection of gourmet delights"
  content.append(image)
  content.append(title)
  content.append(subtitle)
}
