
const rev = {
    input: document.getElementById("font-size-control"),
    spanText: document.getElementById("text"),
}
rev.spanText.style.fontSize = rev.input.value+ "px" ;
rev.input.addEventListener('input', onInputHandRange);

function onInputHandRange(event) {
  rev.spanText.style.fontSize = event.currentTarget.value + "px";
}
