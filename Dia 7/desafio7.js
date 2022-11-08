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

  formatarNumero(numero) {
    const stringNumero = numero.toString();

    const digitosInteiros = parseFloat(stringNumero.split('.')[0]);
    const digitosDecimais = stringNumero.split('.')[1];

    let displayInteiros;

    if (isNaN(digitosInteiros)) {
      displayInteiros = '';
    } else {
      displayInteiros = digitosInteiros.toLocaleString('en', {
        maximumFractionDigits: 0
      })
    }

    if (digitosDecimais != null) {
      return `${displayInteiros}.${digitosDecimais}`;
    } else {
      return displayInteiros;
    }
  }

  deletar() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  calcular() {
    let resultado;

    const previousOperandFloat = parseFloat(this.previousOperand);
    const currentOperandFloat = parseFloat(this.currentOperand);

    if (isNaN(previousOperandFloat) || isNaN(currentOperandFloat)) return

    switch (this.operador) {
      case '+':
        resultado = previousOperandFloat + currentOperandFloat;
        break;

      case '-':
        resultado = previousOperandFloat - currentOperandFloat;
        break;

      case '&divide':
        resultado = previousOperandFloat / currentOperandFloat;
        break;

      case '*':
        resultado = previousOperandFloat * currentOperandFloat;
        break;

      default:
        return;
    }

    this.currentOperand = resultado;
    this.operador = undefined;
    this.previousOperand = '';
  }

  addOperacao(operador) {
    if (this.currentOperand === '') return

    if (this.previousOperand !== '') {
      this.calcular();
    }

    this.operador = operador;

    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  addNumero(numero) {
    if (this.currentOperand.includes(".") && numero === ".") return;

    this.currentOperand = `${this.currentOperand}${numero.toString()}`;
  }

  limpar() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operador = undefined;
  }

  atualizarDisplay() {
    this.previousOperandTexto.innerText = `${this.formatarNumero(this.previousOperand)} ${this.operador || ''}`;
    this.currentOperandTexto.innerText = this.formatarNumero(this.currentOperand);
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

botaoIgual.addEventListener('click', () => {
  calculator.calcular();
  calculator.atualizarDisplay();
})

botaoDeletar.addEventListener('click', () => {
  calculator.deletar();
  calculator.atualizarDisplay();
})