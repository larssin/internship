const inputElem = document.getElementById("input1");
const equalButton = document.getElementById("equal-button");
const plusButton = document.getElementById("plus-button");
const clearButton = document.getElementById("clear-button");

(() => {
  equalButton.addEventListener("click", equalHandler);
  plusButton.addEventListener("click", handlePlus);
  clearButton.addEventListener("click", clearHandler);
})();

let buffer = 0;

function clearHandler(event) {
  buffer = 0;
  inputElem.value = "0";
}

function equalHandler(event) {
  const number = parseInt(inputElem.value);
  console.log("EQUAL", number);

  if (Number.isInteger(number)) {
    inputElem.value = buffer + number;
  }
}

function handlePlus(event) {
  const number = parseInt(inputElem.value);
  console.log("PLUS", number);

  if (Number.isInteger(number)) {
    buffer = buffer + number;
    inputElem.value = "0";
  }
}
