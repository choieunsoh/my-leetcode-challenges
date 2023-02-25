// 166. Fraction to Recurring Decimal
// https://leetcode.com/problems/fraction-to-recurring-decimal/
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let num = numerator;
  let den = denominator;
  if (num === 0) return '0';

  let result = '';
  if ((num < 0) ^ (den < 0)) result += '-';
  num = Math.abs(num);
  den = Math.abs(den);
  result += Math.floor(num / den).toString();
  if (num % den === 0) return result;

  result += '.';
  let rem = num % den;

  const map = new Map();
  while (rem > 0) {
    if (!map.has(rem)) {
      map.set(rem, result.length);
    } else {
      const index = map.get(rem);
      return result.substring(0, index) + '(' + result.substring(index) + ')';
    }
    rem *= 10;
    result += Math.floor(rem / den).toString();
    rem %= den;
  }

  return result;
};

var numerator = -2147483648,
  denominator = 1;
var expected = '-2147483648';
var result = fractionToDecimal(numerator, denominator);
console.log(result, result === expected);

var numerator = 1,
  denominator = 2;
var expected = '0.5';
var result = fractionToDecimal(numerator, denominator);
console.log(result, result === expected);

var numerator = 2,
  denominator = 1;
var expected = '2';
var result = fractionToDecimal(numerator, denominator);
console.log(result, result === expected);

var numerator = 4,
  denominator = 333;
var expected = '0.(012)';
var result = fractionToDecimal(numerator, denominator);
console.log(result, result === expected);
