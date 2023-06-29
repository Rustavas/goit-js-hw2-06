let counterValue = 0;
const refs = {
  decrement: document.querySelector('[data-action=decrement]'),
  increment: document.querySelector('[data-action=increment]'),
  value: document.getElementById('value'),
};

refs.decrement.addEventListener('click', onDecrement);
refs.increment.addEventListener('click', onIncrement);

function onDecrement(event) {
  counterValue -= 1;
  console.log(counterValue)
  refs.value.textContent = counterValue;
};
function onIncrement(event) {
  counterValue += 1;
  refs.value.textContent = counterValue;
};