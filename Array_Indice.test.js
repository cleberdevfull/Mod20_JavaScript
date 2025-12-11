const {indiceMaior, indiceMenor} = require('./Array_Indice');

describe('Array_Indice', () => {
  it('Índice do maior valor', () => {
    expect(indiceMaior).toBe(4);
  });
  
  it('Índice do menor valor', () => {
    expect(indiceMenor).toBe(5);
  });
});