var btnTextPreto = document.getElementById("btnTextPreto");
var btnTextBranco = document.getElementById("btnTextBranco");
var btnFundoPreto = document.getElementById("btnFundoPreto");
var btnFundoBranco = document.getElementById("btnFundoBranco");
var btnMais = document.getElementById("btnMais");
var btnMenos = document.getElementById("btnMenos");
var conteudo = document.getElementById("conteudo");
var tamanhoFonte = 16;

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

btnMais.addEventListener("click", function() {
  tamanhoFonte += 2;
  conteudo.style.fontSize = tamanhoFonte + "px";
});

btnMenos.addEventListener("click", function() {
  tamanhoFonte -= 2;
  conteudo.style.fontSize = tamanhoFonte + "px";
});