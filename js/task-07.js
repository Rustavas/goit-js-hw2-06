const refs = {
  inputRange: document.getElementById('font-size-control'),
  text: document.getElementById('text')
};

refs.inputRange.addEventListener('input', onRangeInput);

function onRangeInput(event) {
refs.text.style.fontSize = event.currentTarget.value + 'px';
};
