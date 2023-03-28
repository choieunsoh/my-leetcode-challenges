// 633. Sum of Square Numbers
// https://leetcode.com/problems/sum-of-square-numbers/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  // a*a + b*b = c
  // b*b = c - a*a
  for (let a = 0; a * a <= c; a++) {
    const bb = c - a * a;
    if (binarySearch(0, bb, bb)) return true;
  }
  return false;

  function binarySearch(left, right, num) {
    if (left > right) return false;
    const mid = Math.floor((right - left) / 2) + left;
    const bb = mid * mid;
    if (bb === num) return true;
    if (bb < num) return binarySearch(mid + 1, right, num);
    return binarySearch(left, mid - 1, num);
  }
};

var c = 5;
var expected = true;
var result = judgeSquareSum(c);
console.log(result, result === expected);

var c = 3;
var expected = false;
var result = judgeSquareSum(c);
console.log(result, result === expected);

var c = 4;
var expected = true;
var result = judgeSquareSum(c);
console.log(result, result === expected);
