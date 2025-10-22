// 2235. Add Two Integers
// https://leetcode.com/problems/add-two-integers/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = function (num1, num2) {
  return num1 + num2;
};

var num1 = 12,
  num2 = 5;
var expected = 17;
var result = sum(num1, num2);
console.log(result, result === expected);

var num1 = -10,
  num2 = 4;
var expected = -6;
var result = sum(num1, num2);
console.log(result, result === expected);
