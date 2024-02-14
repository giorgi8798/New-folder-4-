const display = document.querySelector(".monitor");
function updateDisplay(value) {
  display.innerHTML += value;
}

function result() {
  display.innerHTML = eval(display.innerHTML);
}

function clearResult() {
  display.innerHTML = "";
}

function deleteResult() {
  if (display.innerHTML.endsWith(" ")) {
    display.innerHTML = display.innerHTML.slice(0, -3);
  } else {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }
}

function kvadrati() {
  display.innerHTML = display.innerHTML * display.innerHTML;
}

function procenti() {
  value1 = display.innerHTML;
  display.innerHTML = "";
}
