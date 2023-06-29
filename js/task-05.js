const refs = {
  nameInput: document.getElementById('name-input'),
  nameOutput: document.getElementById('name-output'),
};
refs.nameInput.addEventListener('change', onInputName);

function onInputName(event) {
 if(refs.nameInput.value.trim() === ""){
  refs.nameOutput.textContent = "Anonymous";
 } else {
  refs.nameOutput.textContent = refs.nameInput.value;
 };
};