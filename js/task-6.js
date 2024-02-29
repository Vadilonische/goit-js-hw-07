function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlsRef = document.querySelector("#controls"); //div
const input = document.querySelector("input"); //input
const createBtn = controlsRef.querySelector("button[data-create]"); // кнопкa create
const destroyBtn = controlsRef.querySelector("button[data-destroy]"); //кнопкa del
const boxesRef = document.querySelector("#boxes"); //div box
createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", handleDestroy);
function handleCreate() {
  let inputValue = Number(input.value);
  if (inputValue < 1 || inputValue > 100) {
    return;
  }
  clearBoxes();
  createBoxes(inputValue);
  input.value = "";
}
function clearBoxes() {
  boxesRef.innerHTML = "";
}
function handleDestroy() {
  clearBoxes();
}
function createBoxes(inputValue) {
  let step = 30;
  for (let i = 0; i < inputValue; i++) {
    const square = document.createElement("div");
    square.style.width = `${step}px`;
    square.style.height = `${step}px`;
    square.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(square);
    step += 10;
  }
}
