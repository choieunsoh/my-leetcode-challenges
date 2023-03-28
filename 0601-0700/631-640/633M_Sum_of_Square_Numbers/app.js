// 633. Sum of Square Numbers
// https://leetcode.com/problems/sum-of-square-numbers/
/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  let small = 0;
  let large = Math.floor(Math.sqrt(c));

  while (small <= large) {
    let sum = small * small + large * large;
    if (sum > c) {
      large--;
    } else if (sum < c) {
      small++;
    } else {
      return true;
    }
  }
  return false;
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
