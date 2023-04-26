const isUpperCase = require('../utils/mayuscula');

/*test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})*/

describe('mayusculas', () => {
    test.each`
      sentence      | expectedResult    
      ${CURSO}      | ${true}
      ${CurSO}      | ${false}
      ${curso}      | ${false}
    `('$sentence should return $expectedResult', ({sentence, expectedResult}) => {
      expect(sentence).toBe(expectedResult);
    });
  });
