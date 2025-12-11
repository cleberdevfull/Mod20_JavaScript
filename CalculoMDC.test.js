const {mdc} = require('./CalculoMDC');  

describe('CalculoMDC', () => {
  it('MDC de 144 e 64', () => {
    expect(mdc(144, 64)).toBe(16);
  });
});