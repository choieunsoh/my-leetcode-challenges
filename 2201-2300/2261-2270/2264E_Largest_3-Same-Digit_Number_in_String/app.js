// 2264. Largest 3-Same-Digit Number in String
// https://leetcode.com/problems/largest-3-same-digit-number-in-string/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function (num) {
  let largest = '';
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      const value = num.substring(i, i + 3);
      if (value > largest) largest = value;
    }
  }
  return largest;
};

var num = '6777133339';
var expected = '777';
var result = largestGoodInteger(num);
console.log(result, result === expected);

var num = '2300019';
var expected = '000';
var result = largestGoodInteger(num);
console.log(result, result === expected);

var num = '42352338';
var expected = '';
var result = largestGoodInteger(num);
console.log(result, result === expected);
