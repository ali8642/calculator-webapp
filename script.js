// Calculator Functions

const diplay = document.getElementById("display");

function appendToDisplay(input) {
  diplay.value += input;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

function backSpace() {
  // display.value = display.substring(0, diplay.value.length-1);
  if (display.value.length > 1 && display.value !== "Error") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}
