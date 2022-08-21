const textInput = document.querySelector('#validation-input');
console.log(textInput);


textInput.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const inp = event.currentTarget;
    const inpLength = Number(inp.dataset.length);
   
    if (inp.value.length === inpLength) {
        inp.classList.remove('invalid');
        inp.classList.add('valid');
    }
    else  {
        inp.classList.remove('valid');
        inp.classList.add('invalid');
    }

}