// 1. Calcule o MDC (máximo divisor comum) entre dois números.
console.log("--- Exercício 1: cálculo do MDC (máximo divisor comum) entre dois números.");
function mdc(a = 144, b = 64) {
  while (b !== 0) {
    let resto = a % b;
    a = b;
    b = resto;
  }
  return a;
}

let x = 144
let y = 64

console.log(`O MDC do número ${x} e ${y} é : ${mdc(x, y)}`);
