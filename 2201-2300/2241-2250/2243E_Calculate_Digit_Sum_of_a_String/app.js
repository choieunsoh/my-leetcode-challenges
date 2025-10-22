// 2243. Calculate Digit Sum of a String
// https://leetcode.com/problems/calculate-digit-sum-of-a-string/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  while (s.length > k) {
    let temp = '';
    for (let i = 0; i < s.length; i += k) {
      let sum = 0;
      for (let j = 0; j < k && i + j < s.length; j++) {
        sum += Number(s[i + j]);
      }
      temp += sum.toString();
    }

    s = temp;
  }
  return s;
};

var s = '11111222223',
  k = 3;
var expected = '135';
var result = digitSum(s, k);
console.log(result, result === expected);

var s = '00000000',
  k = 3;
var expected = '000';
var result = digitSum(s, k);
console.log(result, result === expected);
