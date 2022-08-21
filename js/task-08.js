const form = document.querySelector("form.login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    

    const email = formElements.email.value;
    const password = formElements.password.value;
    

  if (this.email.value === "" || this.password.value === "") {
    return console.log("Please enter your Email address or Password");
  }

    const formRev = `email: ${this.email.value}, Password: ${this.password.value}`; 
  console.log(formRev);
  event.currentTarget.reset();
}

