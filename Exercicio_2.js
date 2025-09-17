
// 2. Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
console.log("--- Exercício 2: dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.");
const numeros = [100, 5, 80, 200, 3333, 1, 90, 150, 3000];

let indiceMaior = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[indiceMaior]) {
    indiceMaior = i;
  }
}
console.log(`Índice do maior valor: ${indiceMaior}`);


let indiceMenor = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] < numeros[indiceMenor]) {
    indiceMenor = i;
  }
}
console.log(`Índice do menor valor: ${indiceMenor}`); 
