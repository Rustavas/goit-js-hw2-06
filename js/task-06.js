
 const inputTextRef = document.getElementById('validation-input');

const dataLength = Number(inputTextRef.dataset.length);

inputTextRef.addEventListener('blur', onCheckNumber);

function onCheckNumber(event) {
  const inputLength = event.target.value.trim().length

  if(inputLength === dataLength){
    inputTextRef.classList.remove('invalid');
    inputTextRef.classList.add('valid');
    return;
  }
  inputTextRef.classList.remove('valid');
  inputTextRef.classList.add('invalid');
};





