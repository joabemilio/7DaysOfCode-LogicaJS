//apresentação inicial do SIM

const elementoCampoLista = document.getElementById('campo-lista');

const botoesIniciais = document.querySelectorAll(".btn-inicial");

const btnSIM = botoesIniciais[0];
const btnCONFIRMA = botoesIniciais[1];

btnSIM.onclick = function () {
  elementoCampoLista.classList.remove('oculto');
  elementoListaCompleta.classList.add('oculto');
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

let lista = [Laticinios, VegFruta, Congelados, NPerecivel, UtenCasa, Outros];

function adicionaItem(indice) {

    lista[indice].push(elementoCampoDigitacao.value);

}

for (i = 0; i < listaBtnCategorias.length; i++) {
  listaBtnCategorias[i].onclick = function () {
    adicionaItem(i);

    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito."
  }
}

// apresentação de resultado = clique 'NÃO'

const elementoListaCompleta = document.getElementById('lista-completa');

btnCONFIRMA.onclick = function () {
  elementoCampoLista.classList.add('oculto');
  elementoListaCompleta.classList.remove('oculto');

  elementoListaCompleta.innerHTML = "<h2 class='titulo-pergunta'>Esta é a sua lista de compras:</h2><ul> <li>Laticínios: "+ lista[0] +".</li> <li>Vegetais e Frutas: " + lista[1] + ".</li> <li>Congelados: " + lista[2] + ".</li> <li>Não perecíveis: " + lista[3] + ".</li> <li>Utensílios de casa: " + lista[4] + ".</li> <li>Outros: " + lista[5] + ".</li> </ul>"
}