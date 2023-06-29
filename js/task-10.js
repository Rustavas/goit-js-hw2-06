function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  controlsDiv: document.getElementById('controls'),
  boxesDiv: document.getElementById('boxes'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create'),
  destroyBtn: document.querySelector('data-destroy'),
};
let amount = refs.input.value; 
  let sideLengthDiv = 30 ;
refs.createBtn.addEventListener('click', onCreateCollection);

function onCreateCollection(event){
  createBoxes(amount);
}

function createBoxes(amount) {
  const divEl = document.createElement('div');
for(let i = 0; i < amount; i = 1){
  
  divEl.style.width = `${sideLengthDiv + 'px'}`;
  divEl.style.height = `${sideLengthDiv + 'px'}`;
  divEl.style.backgroundColor = getRandomHexColor();
  // sideLengthDiv += 10;
}
console.log(divEl.style.width)

}


