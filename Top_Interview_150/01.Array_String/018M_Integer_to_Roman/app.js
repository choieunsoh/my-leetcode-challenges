// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = '';
  for (const ch in roman) {
    const value = roman[ch];
    while (num >= value) {
      result += ch;
      num -= value;
    }
  }

  return result;
};

var num = 3;
var expected = 'III';
var result = intToRoman(num);
console.log(result, result === expected);

var num = 58;
var expected = 'LVIII';
var result = intToRoman(num);
console.log(result, result === expected);

var num = 1994;
var expected = 'MCMXCIV';
var result = intToRoman(num);
console.log(result, result === expected);
