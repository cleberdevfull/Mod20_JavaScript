
// Listando todos os números inteiros abaixo de 10 que são múltiplos de 3 ou 5, ficamos com 3, 5, 6 e 9. A soma desses múltiplos é 23. Crie uma função que retorne a soma de todos os múltiplos de 5 ou 7 abaixo de 1000.
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

// Exemplo de uso
console.log(`Números inteiros múltiplos de 5 ou 7 abaixo de 1000: ${somaMultiplos(1000)}`);
