const display = document.getElementById("display");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");
const btn6 = document.getElementById("btn-6");
const btn7 = document.getElementById("btn-7");
const btn8 = document.getElementById("btn-8");
const btn9 = document.getElementById("btn-9");
const btn0 = document.getElementById("btn-0");
const btnAdd = document.getElementById("btn-add");
const btnSubtract = document.getElementById("btn-sub");
const btnMultiply = document.getElementById("btn-mul");
const btnEquals = document.getElementById("btn-eq");
const btnClear = document.getElementById("btn-clear");

let value = "0";
display.innerHTML = value;

btn1.addEventListener("click", function () {
  if (value === "0") {
    value = "1";
  } else {
    value = value + "1";
  }
  display.innerHTML = value;
});

const operatorSelect = document.getElementById("operator");
let currentOperator = operatorSelect.value;

operatorSelect.addEventListener("change", operatorChange);
function operatorChange(event) {
  currentOperator = event.target.value;
}

btnEquals.addEventListener("click", () => {
  if (currentOperator == "+") {
    //
  } else if (currentOperator == "-") {
    //
  }
});
