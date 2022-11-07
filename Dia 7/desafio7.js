//declaração de botoes html

const botoesNumericos = document.querySelectorAll('[data-numero]');
const botoesOperadores = document.querySelectorAll('[data-operador]');
const botaoIgual = document.querySelector('[data-igual]');
const botaoLimpar = document.querySelector('[data-limpar]');
const botaoDeletar = document.querySelector('[data-deletar]');

const previousOperandTexto = document.querySelector('[data-previous]');
const currentOperandTexto = document.querySelector('[data-current]');

class Calculator {
  constructor(previousOperandTexto, currentOperandTexto) {
    this.previousOperandTexto = previousOperandTexto;
    this.currentOperandTexto = currentOperandTexto;
    this.limpar();
  }

  addOperacao(operador) {
    if(this.previousOperand !== '') {
      this.calcular();
    }

    this.operador = operador;

    this.previousOperand = `${this.currentOperand} ${this.operador}`;
    this.currentOperand = '';
  }
  
  addNumero(numero) {
    if(this.currentOperand.includes(".") && numero === '.') return;

    this.currentOperand = `${this.currentOperand}${numero.toString()}`;
  }

  limpar() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  atualizarDisplay() {
    this.previousOperandTexto.innerText = this.previousOperand;
    this.currentOperandTexto.innerText = this.currentOperand;
  }
}

const calculator = new Calculator(
  previousOperandTexto,
  currentOperandTexto
);

for (const btnNumber of botoesNumericos) {
  btnNumber.addEventListener('click', () => {
    calculator.addNumero(btnNumber.innerText);
    calculator.atualizarDisplay();  
  })
}

for (const btnOperador of botoesOperadores) {
  btnOperador.addEventListener("click", () => {
    calculator.addOperacao(btnOperador.innerText);
    calculator.atualizarDisplay();
  })
}

botaoLimpar.addEventListener("click", () => {
  calculator.limpar();
  calculator.atualizarDisplay();
});