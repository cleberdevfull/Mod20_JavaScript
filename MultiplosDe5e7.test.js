const {somaMultiplos} = require('./MultiplosDe5e7');

describe('Multiplos de 5 e 7', () => {
  it('Deve retornar 0 para limite 1', () => {
    expect(somaMultiplos(1)).toBe(0);
  });

  it('Deve retornar 1580 para limite 100', () => {
    expect(somaMultiplos(100)).toBe(1580);
  });

  it('Deve retornar 9555 para limite 250', () => {
    expect(somaMultiplos(250)).toBe(9555);
  });

  it('Deve retornar 38967 para limite 500', () => {
    expect(somaMultiplos(500)).toBe(38967);
  });

  it('Deve retornar 88236 para limite 750', () => {
    expect(somaMultiplos(750)).toBe(88236);
  });

  it('Deve retornar 156361 para limite 1000', () => {
    expect(somaMultiplos(1000)).toBe(156361);
  });
});
