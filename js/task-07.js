
const rev = {
    input: document.getElementById("font-size-control"),
    spanText: document.getElementById("text"),
}
rev.spanText.style.fontSize = "56px";
rev.input.addEventListener('change', onInputHandRange);

function onInputHandRange(event) {
  rev.spanText.style.fontSize = event.currentTarget.value + "px";
}

