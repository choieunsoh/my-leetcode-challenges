// 2729. Check if The Number is Fascinating
// https://leetcode.com/problems/check-if-the-number-is-fascinating/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const seen = new Array(10).fill(false);
  for (let num of [n, n * 2, n * 3]) {
    console.log(num);
    while (num) {
      const digit = num % 10;
      if (digit === 0 || seen[digit]) return false;
      seen[digit] = true;
      num = (num / 10) | 0;
    }
  }
  return true;
};

var n = 192;
var expected = true;
var result = isFascinating(n);
console.log(result, result === expected);

var n = 100;
var expected = false;
var result = isFascinating(n);
console.log(result, result === expected);

var n = 267;
var expected = false;
var result = isFascinating(n);
console.log(result, result === expected);
