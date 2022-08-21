
const rev = {
    input: document.getElementById("font-size-control"),
    spanText: document.getElementById("text"),
}

rev.input.addEventListener("input", onInputHandRange);

function onInputHandRange(event) {
  rev.spanText.style.fontSize = event.currentTarget.value + "px";
}