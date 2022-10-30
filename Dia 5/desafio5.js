//apresentação inicial do SIM

const elementoCampoLista = document.getElementById('campo-lista');

const botoesIniciais = document.querySelectorAll(".btn-inicial");

botoesIniciais[0].onclick = function () {
  elementoCampoLista.classList.remove('oculto');
}

//implementação de item digitado para lista de sua categoria

let elementoCampoDigitacao = document.getElementById('campo-digitacao');

const listaBtnCategorias = document.querySelectorAll('.btn-categoria');
const elementoConfirmaAdicao = document.getElementById('confirmacao-adicao-item');

let lista = {
  Laticinios : [],
  VegFruta : [],
  Congelados : [],
  NPerecivel : [],
  UtenCasa : [],
  Outros : []
}

for (i = 0; i < listaBtnCategorias.length; i++) {
  listaBtnCategorias[i].onclick = function () {
    

    elementoConfirmaAdicao.innerHTML = "O item " + elementoCampoDigitacao.value + " foi adicionado com êxito."
  }
}
