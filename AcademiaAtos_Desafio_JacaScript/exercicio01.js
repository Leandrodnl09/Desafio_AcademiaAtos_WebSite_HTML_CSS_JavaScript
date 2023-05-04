const vermelhoBtn = document.getElementById("vermelho");
const verdeBtn = document.getElementById("verde");
const azulBtn = document.getElementById("azul");
const amareloBtn = document.getElementById("amarelo");

vermelhoBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

verdeBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

azulBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});

amareloBtn.addEventListener("click", function() {
  document.body.style.backgroundColor = "yellow";
});