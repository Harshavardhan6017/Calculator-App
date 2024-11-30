let display = document.getElementById("calcDisplay");

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

function resetDisplay() {
  display.value = "0";
}

function calculateResult() {
  let expression = display.value.replace(/x/g, "*");
  try {
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}
