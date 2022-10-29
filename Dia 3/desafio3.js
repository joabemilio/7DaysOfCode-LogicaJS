let escolha = " ";

const elementosOcultos = document.querySelectorAll(".parte-2");

const botoesClasse1 = document.querySelectorAll('.botao-classe-1');

const botoesClasse2 = document.querySelectorAll('.botao-classe-2');

const botoesClasse3 = document. querySelectorAll('.botao-classe-3')

const elementoParte3 = document.querySelector("#parte-3");
const elementoParte4 = document.querySelector('#parte-4');

let botaoConfirmaParte4 = document.querySelector('.botao-parte-4');
let elementoConclusao = document.querySelector("#conclusao");
let elementoRespostaParte4 = document.getElementById('resposta-parte-4');


//Click Front
botoesClasse1[0].onclick = function () {
  elementosOcultos[0].classList.remove('oculto');
  escolha += "Front-End";
}

//Click Back
botoesClasse1[1].onclick = function () {
  elementosOcultos[1].classList.remove('oculto');
  escolha += 'Back-End';
}

//clicks genéricos para partes 3 e 4
for(i = 0; i < botoesClasse2.length; i++) {
  
  botoesClasse2[i].onclick = function () {
    elementoParte3.classList.remove('oculto');
  }

  botoesClasse3[i].onclick = function () {
    elementoParte4.classList.remove('oculto');
  }

  botoesClasse3[2].onclick = apresentaConclusao;
}

//apresentação de resultado final

function apresentaConclusao() {
  elementoConclusao.innerHTML = "Portanto, você tem interesse na área de tecnologia! Começando por"+ escolha +". Como também quer se especializar em " + elementoRespostaParte4.value + ".";
}

