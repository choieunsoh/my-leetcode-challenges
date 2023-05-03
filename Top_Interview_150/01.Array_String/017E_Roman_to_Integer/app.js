// 13. Roman to Integer
// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const roman = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let value = 0;
  let index = s.length - 1;
  while (index > -1) {
    let start = index > 0 ? index - 1 : index;
    let end = index + 1;
    let num = s.substring(start, end);
    if (roman[num]) {
      value += roman[num];
      index -= 2;
    } else {
      num = s.substring(index, end);
      value += roman[num];
      index -= 1;
    }
  }

  return value;
};

var s = 'MCMXCIV';
var expected = 1994;
var result = romanToInt(s);
console.log(result, result === expected);

var s = 'IV';
var expected = 4;
var result = romanToInt(s);
console.log(result, result === expected);

var s = 'III';
var expected = 3;
var result = romanToInt(s);
console.log(result, result === expected);

var s = 'LVIII';
var expected = 58;
var result = romanToInt(s);
console.log(result, result === expected);
