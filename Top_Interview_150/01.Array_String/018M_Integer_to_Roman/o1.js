// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  const digits1 = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  const digits2 = ['', 'X', 'XX', 'XXX', 'LX', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const digits3 = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const digits4 = ['', 'M', 'MM', 'MMM'];

  return (
    digits4[(num / 1000) | 0] + digits3[((num % 1000) / 100) | 0] + digits2[((num % 100) / 10) | 0] + digits1[num % 10]
  );
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
