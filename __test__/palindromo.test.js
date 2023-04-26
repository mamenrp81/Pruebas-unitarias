const palindromo = require('../utils/palindromo.js')

/*test ('palindromo de fran', () => {
    const result = palindromo('fran')
    expect(result).toBe('narf')
})*/

describe('palindromo', () => {
    test.each`
      string        | expectedResult    
      ${roma}       | ${amor}
      ${ojo}        | ${ojo}
      ${rata}       | ${atar}
    `('$string should return $expectedResult', ({string, expectedResult}) => {
      expect(string).toBe(expectedResult);
    });
  });

