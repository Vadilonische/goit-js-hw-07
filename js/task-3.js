const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
input.addEventListener("input", handleInput);
function handleInput(event) {
  const eCurrentValue = event.currentTarget.value.trim();
  output.textContent = eCurrentValue;
  if (eCurrentValue === "") {
    output.textContent = "Anonymous";
  }
}
