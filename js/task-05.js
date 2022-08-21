const textInput = document.querySelector('#name-input');
const spanText = document.querySelector('#name-output');



textInput.addEventListener('input', newText)

function newText(event) {
    spanText.textContent = event.currentTarget.value.trim();
    if (event.currentTarget.value === "") {
        spanText.textContent = "Anonymous";
    }
}

