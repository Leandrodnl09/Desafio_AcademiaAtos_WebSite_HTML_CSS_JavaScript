function validateForm() {
  var password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm_password").value;

  if (password !== confirm_password) {
    alert("As senhas não conferem.");
    return false;
  }

  if (password.length < 6 || password.length > 10) {
    alert("A senha deve ter entre 6 e 10 caracteres.");
    return false;
  }

  alert("Usuário cadastrado com sucesso!");
  return true;
}