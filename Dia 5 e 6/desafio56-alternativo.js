//apresentação inicial do SIM

const elementoCampoLista = document.getElementById('campo-lista');

const botoesIniciais = document.querySelectorAll(".btn-inicial");

const btnADD = botoesIniciais[0];
const btnREM = botoesIniciais[1];
const btnCONFIRMA = botoesIniciais[2];

btnADD.onclick = function () {
  elementoCampoLista.classList.remove('oculto');
  elementoListaCompleta.classList.add('oculto');
}

btnREM.onclick = function () {
  for(i=0; i < listaBtnCategorias; i++) {
    listaDeCategorias[i].splice(listaDeCategorias[i].indexOf(elementoCampoDigitacao.value), 1);
  }
  
}


//implementação de item digitado para lista de sua categoria

let elementoCampoDigitacao = document.getElementById('campo-digitacao');

const listaBtnCategorias = document.querySelectorAll('.btn-categoria');
const elementoConfirmaAdicao = document.getElementById('confirmacao-adicao-item');


let Laticinios = [];
let VegFruta = [];
let Congelados = [];
let NPerecivel = [];
let UtenCasa = [];
let Outros = [];

let listaDeCategorias = [Laticinios, VegFruta, Congelados, NPerecivel, UtenCasa, Outros];

  listaBtnCategorias[0].onclick = function () {  
    listaDeCategorias[0].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito.";
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

  listaBtnCategorias[1].onclick = function () {
    listaDeCategorias[1].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito.";
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

  listaBtnCategorias[2].onclick = function () {
    listaDeCategorias[2].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito.";
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

  listaBtnCategorias[3].onclick = function () {
    listaDeCategorias[3].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito.";
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

  listaBtnCategorias[4].onclick = function () {
    listaDeCategorias[4].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito."
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

  listaBtnCategorias[5].onclick = function () {
    listaDeCategorias[5].push(" " + elementoCampoDigitacao.value)
    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito."
    elementoCampoDigitacao.value = "";
    elementoCampoDigitacao.focus();
  }

// apresentação de resultado = clique 'NÃO'

const elementoListaCompleta = document.getElementById('lista-completa');

btnCONFIRMA.onclick = function () {
  elementoCampoLista.classList.add('oculto');
  elementoListaCompleta.classList.remove('oculto');

  elementoListaCompleta.innerHTML = "<h2 class='titulo-pergunta'>Esta é a sua lista de compras:</h2><ul class='lista-final'> <li>Laticínios: " + listaDeCategorias[0] + "</li> <li>Vegetais e Frutas: " + listaDeCategorias[1] + "</li> <li>Congelados: " + listaDeCategorias[2] + "</li> <li>Não perecíveis: " + listaDeCategorias[3] + "</li> <li>Utensílios de casa: " + listaDeCategorias[4] + "</li> <li>Outros: " + listaDeCategorias[5] + "</li> </ul>"
}