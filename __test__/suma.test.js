const sum = require('../utils/suma')


/*test("sumar 1+2 igual a 3", () =>{

    expect(sum(1,2)).toBe(3)

})

test("sumar -1+5 igual a 4", () =>{

    expect(sum(-1,5)).toBe(4)

})

test("sumar 10.5+2 igual a 12.5", () =>{

    expect(sum(10.5,2)).toBe(12.5)

})*/

describe('calculator', () => {
    test.each`
      firstValue | secondValue | expectedResult    
      ${3}       | ${1}        | ${4}
      ${-4}      | ${1}        | ${-3}
    `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
      expect(sum(firstValue, secondValue)).toBe(expectedResult);
    });
  });
