let elementoNumeroSugerido = document.getElementById('numero-sugerido');

const elementoBtnConfirma = document.getElementById('btn-confirma');

let numeroAleatorio = parseInt(Math.random() * 11);

const elementoResultado = document.getElementById('resultado');
const elementoInvalidacao = document.getElementById('invalidacao');

let tentativas = 0;

function verificaNumero() {
  if (elementoNumeroSugerido.value == numeroAleatorio) {
    elementoResultado.innerHTML = "<p class='apresentacao'>Parabéns! Você acertou. O número secreto é "+ numeroAleatorio +".</p>"
  } else {
    tentativas++;
    
    if (tentativas <= 2) {
      elementoResultado.innerHTML = "<p class='apresentacao'>Você errou. Tente de novo</p>";
       
    } else if (tentativas > 2) {
      elementoResultado.innerHTML = "<p class='apresentacao'>Suas tentativas acabaram, o número aleatório foi "+ numeroAleatorio +".</p>" 
    }
    
  }

  if(elementoNumeroSugerido.value < 0 || elementoNumeroSugerido.value >= 11) {
    elementoInvalidacao.innerHTML = "<p class='apresentacao'>O número que você digitou não é válido. Por favor, tente novamente</p>"  
  }
}


elementoBtnConfirma.onclick = verificaNumero;
