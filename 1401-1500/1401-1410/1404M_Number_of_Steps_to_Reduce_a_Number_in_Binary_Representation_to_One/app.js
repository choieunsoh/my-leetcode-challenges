// 1404. Number of Steps to Reduce a Number in Binary Representation to One
// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let result = 0;
  let carry = 0;
  for (let i = s.length - 1; i > 0; i--) {
    const num = Number(s.charAt(i)) + carry;
    if (num & 1) {
      result += 2;
      carry = 1;
    } else {
      result++;
    }
  }
  return result + carry;
};

var s = '1101';
var expected = 6;
var result = numSteps(s);
console.log(result, result === expected);

var s = '10';
var expected = 1;
var result = numSteps(s);
console.log(result, result === expected);
