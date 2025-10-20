// 2283. Check if Number Has Equal Digit Count and Digit Value
// https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function (num) {
  const zero = '0'.charCodeAt(0);
  const freq = new Array(10).fill(0);
  for (let i = 0; i < num.length; i++) {
    freq[num[i].charCodeAt(0) - zero]++;
  }

  for (let i = 0; i < num.length; i++) {
    if (freq[i] !== Number(num[i])) return false;
  }
  return true;
};

var num = '1210';
var expected = true;
var result = digitCount(num);
console.log(result, result === expected);

var num = '030';
var expected = false;
var result = digitCount(num);
console.log(result, result === expected);
