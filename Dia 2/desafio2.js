let elementoNome = document.querySelector("#nome");
let elementoIdade = document.querySelector("#idade");
let elementoLinguagem = document.querySelector("#linguagem");

let elementoBotao = document.querySelector("#botao");

let elementoAdicional = document.querySelector(".oculto");
elementoAdicional.style.display = 'none';

let elementoResultado = document.querySelector("#resultado");

elementoBotao.onclick = function () {
  elementoResultado.innerHTML = "<p>Olá " + elementoNome.value + ", você tem " + elementoIdade.value + " anos e já está aprendendo " + elementoLinguagem.value + "!</p>";

  elementoAdicional.style.display = 'block';

  apresentaAdicional();
}

function apresentaAdicional() {
  elementoAdicional.innerHTML = "<p>Você gosta de estudar " + elementoLinguagem.value + "? Responda com o número 1 para SIM ou 2 para NÃO.</p> <input id='resposta' type='number' class='campo-resposta'><br><button id='botao-resposta' class='botao-resposta'>Exibir resultado</button>"

  let elementoResposta = document.querySelector("#resposta");
  let elementoBotaoResposta = document.querySelector("#botao-resposta");

  elementoBotaoResposta.onclick = function () {
    if (elementoResposta.value == 1){
      document.querySelector("#resultado-resposta").innerHTML = "Muito bom! Continue estudando e você terá muito sucesso."
  } else if (elementoResposta.value == 2){
    document.querySelector("#resultado-resposta").innerHTML = "Ahh que pena... Já tentou aprender outras linguagens?" 
  } else {
    document.querySelector("#resultado-resposta").innerHTML = "Digite um número válido para sua resposta. Tente novamente."
  }
  }
}

