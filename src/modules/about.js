import aboutImg from "../img/about.jpg"

export function about() {
  const image = document.createElement("img")
  const title = document.createElement("h2")
  const subtitle = document.createElement("h3")
  title.classList.add("fade-out");
  subtitle.classList.add("fade-out");
  content.innerHTML = ""
  image.src = aboutImg
  image.classList.add("content-bg")
  content.append(image)
  setTimeout(() => {
    title.textContent = "About Gourmet Elegance"
    subtitle.textContent = `Gourmet Elegance offers a refined dining experience where exquisite flavors meet sophisticated presentation. With the finest ingredients and a touch of creativity, we bring culinary excellence to every plate.
`
    content.append(title)
    content.append(subtitle)
    title.classList.remove("fade-out"); // Quita la animación de salida
    title.classList.add("fade-in"); // Aplica la animación de entrada
    subtitle.classList.remove("fade-out"); // Quita la animación de salida
    subtitle.classList.add("fade-in"); // Aplica la animación de entrada
    // debido a que el texot es largo debemos balancear este
    subtitle.style.textAlign = "center";
    subtitle.style.fontSize = "20px";
    subtitle.style.lineHeight = "1.5";
  }, 300)
}
