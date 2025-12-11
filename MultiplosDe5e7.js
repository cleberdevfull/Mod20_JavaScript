console.log("--- Exercício 3: soma de todos os múltiplos de 5 ou 7 abaixo de 1000.");

function somaMultiplos(limite) {
  let soma = 0;

  for (let i = 1; i < limite; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
      soma += i;
    }
  }

  return soma;
}

console.log(`Números inteiros múltiplos de 5 ou 7 abaixo de 1000: ${somaMultiplos(1000)}`);

module.exports = {somaMultiplos};