function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widgetRef = document.querySelector(".widget");
const buttonRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const bodyRef = document.body;

buttonRef.addEventListener("click", handleButton);
function handleButton() {
  bodyRef.style.backgroundColor = getRandomHexColor();
  const randomColorBody = bodyRef.style.backgroundColor;
  colorRef.textContent = randomColorBody;
}
