const cpfDiv = document.getElementById('cpfDiv');
const cnpjDiv = document.getElementById('cnpjDiv');
const dataNascimentoDiv = document.getElementById('dataNascimentoDiv');
const fisicaRadio = document.getElementById('fisica');
const juridicaRadio = document.getElementById('juridica');
const cpfInput = document.getElementById('cpf');
const cnpjInput = document.getElementById('cnpj');
const dataNascimentoInput = document.getElementById('dataNascimento');

// Ativa o campo CPF e desativa o campo CNPJ e Data de Nascimento
function ativarCPF() {
  cpfInput.disabled = false;
  cnpjInput.disabled = true;
  dataNascimentoInput.disabled = false;
}

// Ativa o campo CNPJ e desativa o campo CPF e Data de Nascimento
function ativarCNPJ() {
  cpfInput.disabled = true;
  cnpjInput.disabled = false;
  dataNascimentoInput.disabled = true;
}

fisicaRadio.addEventListener('click', ativarCPF);
juridicaRadio.addEventListener('click', ativarCNPJ);

// Verifica se o CNPJ contém somente números
function validarCNPJ() {
  const cnpj = cnpjInput.value;
  const regex = /^\d{14}$/;
  const valido = regex.test(cnpj);
  if (!valido) {
    alert('CNPJ inválido. Digite somente números.');
    cnpjInput.value = '';
  }
}

// Verifica se o CPF contém somente números
function validarCPF() {
  const cpf = cpfInput.value;
  const regex = /^\d{11}$/;
  const valido = regex.test(cpf);
  if (!valido) {
    alert('CPF inválido. Digite somente números.');
    cpfInput.value = '';
  }
}

cnpjInput.addEventListener('blur', validarCNPJ);
cpfInput.addEventListener('blur', validarCPF);

function validateForm() {
  var name = document.getElementById("nome").value;
  var isPhysicalPerson = document.getElementById("physicalPerson").checked;
  var cpf = document.getElementById("cpf").value;
  var cnpj = document.getElementById("cnpj").value;
  var birthdate = document.getElementById("dataNascimento").value;
  var address = document.getElementById("endereco").value;
  var cep = document.getElementById("cep").value;
  var phone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  if (name == "" || address == "" || cep == "" || phone == "" || email == "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  if (isPhysicalPerson) {
    if (cpf == "") {
      alert("Por favor, preencha o campo CPF.");
      return false;
    }

    if (!/^\d{11}$/.test(cpf)) {
      alert("CPF inválido. Por favor, digite apenas números.");
      return false;
    }

    if (birthdate == "") {
      alert("Por favor, preencha o campo Data de Nascimento.");
      return false;
    }
  } else {
    if (cnpj == "") {
      alert("Por favor, preencha o campo CNPJ.");
      return false;
    }

    if (!/^\d{14}$/.test(cnpj)) {
      alert("CNPJ inválido. Por favor, digite apenas números.");
      return false;
    }
  }

  if (!/^\d+$/.test(cep)) {
    alert("CEP inválido. Por favor, digite apenas números.");
    return false;
  }

  alert("Formulário enviado com sucesso!");
  return true;
}


function validateForm() {
  // Obter valores dos campos de entrada
  var nome = document.getElementById("nome").value;
  var cpf = document.getElementById("cpf").value;
  var endereco = document.getElementById("endereco").value;
  var cep = document.getElementById("cep").value;
  var telefone = document.getElementById("telefone").value;
  var email = document.getElementById("email").value;

  // Verificar se todos os campos obrigatórios estão preenchidos
  if (nome == "" || cpf == "" || endereco == "" || cep == "" || telefone == "" || email == "") {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return false;
  }

  // Exibir mensagem de sucesso e enviar formulário
  alert("Formulário enviado com sucesso!");
  return true;
}