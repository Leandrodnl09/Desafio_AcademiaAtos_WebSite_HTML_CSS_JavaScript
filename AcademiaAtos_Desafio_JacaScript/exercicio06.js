var btnTextPreto = document.getElementById("btnTextPreto");
var btnTextBranco = document.getElementById("btnTextBranco");
var btnFundoPreto = document.getElementById("btnFundoPreto");
var btnFundoBranco = document.getElementById("btnFundoBranco");

btnTextPreto.addEventListener("click", function() {
  document.getElementById("conteudo").style.color = "black";
});

btnTextBranco.addEventListener("click", function() {
  document.getElementById("conteudo").style.color = "white";
});

btnFundoPreto.addEventListener("click", function() {
  document.getElementById("conteudo").style.backgroundColor = "black";
});

btnFundoBranco.addEventListener("click", function() {
  document.getElementById("conteudo").style.backgroundColor = "white";
});