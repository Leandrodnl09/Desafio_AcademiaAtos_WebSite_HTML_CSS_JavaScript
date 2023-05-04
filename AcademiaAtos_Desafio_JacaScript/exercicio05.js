const checkboxes = document.querySelectorAll('input[type=checkbox]');
const button = document.querySelector('button');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const selectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
    const colors = [];
    
    selectedCheckboxes.forEach(selectedCheckbox => {
      colors.push(selectedCheckbox.value);
    });
    
    document.body.style.backgroundColor = colors.join(' ');
    
    if (selectedCheckboxes.length > 1) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  });
});

button.addEventListener('click', () => {
  const selectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
  const colors = [];
  
  selectedCheckboxes.forEach(selectedCheckbox => {
    colors.push(selectedCheckbox.value);
  });
  
  alert(`As cores selecionadas são: ${colors.join(', ')}`);
});

function verificaCoresSelecionadas() {
  var checkboxList = document.querySelectorAll('input[name="cor"]:checked');
  if (checkboxList.length >= 2) {
    botaoEnviar.removeAttribute('disabled');
    botaoEnviar.classList.add('enabled');
  } else {
    botaoEnviar.setAttribute('disabled', '');
    botaoEnviar.classList.remove('enabled');
  }
}