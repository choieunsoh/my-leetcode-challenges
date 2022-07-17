// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/
// 1342. Number of Steps to Reduce a Number to Zero
/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let steps = 0;
  while (num !== 0) {
    num % 2 === 0 ? (num = num / 2) : (num = num - 1);
    steps++;
  }
  return steps;
};

var num = 14,
  expected = 6;
console.log(numberOfSteps(num), expected);

var num = 8,
  expected = 4;
console.log(numberOfSteps(num), expected);

var num = 123,
  expected = 12;
console.log(numberOfSteps(num), expected);
