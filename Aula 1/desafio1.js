let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

let resultado;

let elementoResultado = document.querySelector('#resultado');

function compara() {
  if (numeroUm == stringUm) {
    resultado = "<p>As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes</p><br>"
  } else {
    resultado = "<p>As variáveis numeroUm e stringUm não tem o mesmo valor</p><br>"
  }


  if (numeroTrinta === stringTrinta) {
    resultado += '<p>As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo</p><br>'
  } else {
    resultado += '<p>As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo</p><br>'
  }

  if (numeroDez !== stringDez) {
    resultado += '<p>As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes</p><br>'
  } else {
    resultado += '<p>As variáveis numeroDez e stringDez não tem o mesmo valor</p><br>'
  }

  elementoResultado.innerHTML = resultado;
}

compara();