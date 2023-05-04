var vermelho = document.getElementById('vermelho');
var verde = document.getElementById('verde');
var azul = document.getElementById('azul');
var amarelo = document.getElementById('amarelo');

vermelho.onmouseover = function() {
  document.body.style.backgroundColor = 'red';
};

verde.onmouseover = function() {
  document.body.style.backgroundColor = 'green';
};

azul.onmouseover = function() {
  document.body.style.backgroundColor = 'blue';
};

amarelo.onmouseover = function() {
  document.body.style.backgroundColor = 'yellow';
};

