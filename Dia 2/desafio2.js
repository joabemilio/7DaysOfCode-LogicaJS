let elementoNome = document.querySelector("#nome");
let elementoIdade = document.querySelector("#idade");
let elementoLinguagem = document.querySelector("#linguagem");

let elementoBotao = document.querySelector("#botao");

let elementoResultado = document.querySelector("#resultado");

elementoBotao.onclick = function () {
  elementoResultado.innerHTML = "<p>Olá " + elementoNome.value + ", você tem " + elementoIdade.value + " anos e já está aprendendo " + elementoLinguagem.value + "!</p>";
}