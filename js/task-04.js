

// let valueEl = Number(document.querySelector('#value').textContent);
let valueEL = 0;

const counterValue = document.querySelector('#value');
console.log(counterValue);

const btnDek = document.querySelector('#counter button[data-action = "decrement"]');
console.log(btnDek);

const btnInk = document.querySelector('#counter button[data-action = "increment"]');
console.log(btnInk);

btnInk.addEventListener('click', event => {
  
  valueEL += 1;

  counterValue.innerText = valueEL;
});

btnDek.addEventListener('click', event => {
 
  valueEL -= 1;

  counterValue.innerText = valueEL;
  
}); 