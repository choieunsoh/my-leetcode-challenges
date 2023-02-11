// 2549. Count Distinct Numbers on Board
// https://leetcode.com/problems/count-distinct-numbers-on-board/
/**
 * @param {number} n
 * @return {number}
 */
var distinctIntegers = function (n) {
  return n === 1 ? 1 : n - 1;
};

var n = 5;
var expected = 4;
var result = distinctIntegers(n);
console.log(result, result === expected);

var n = 3;
var expected = 2;
var result = distinctIntegers(n);
console.log(result, result === expected);
