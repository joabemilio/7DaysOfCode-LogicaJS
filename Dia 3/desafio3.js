const elementosOcultos = document.querySelectorAll(".oculto");

const botoesClasse1 = document.querySelectorAll('.botao-classe-1');

const botoesClasse2 = document.querySelectorAll('.botao-classe-2');

for (i = 0; i < elementosOcultos.length; i++) {

  botoesClasse1[i].onclick = function () {
    elementosOcultos[i].classList.remove("oculto");
  }
}






