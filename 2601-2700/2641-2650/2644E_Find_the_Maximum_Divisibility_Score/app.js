// 2644. Find the Maximum Divisibility Score
// https://leetcode.com/problems/find-the-maximum-divisibility-score/
/**
 * @param {number[]} nums
 * @param {number[]} divisors
 * @return {number}
 */
var maxDivScore = function (nums, divisors) {
  let maxCount = 0;
  let result = divisors[0];
  for (const div of divisors) {
    const count = nums.reduce((count, num) => (num % div === 0 ? count + 1 : count), 0);
    if (count === maxCount) {
      result = Math.min(result, div);
    } else if (count > maxCount) {
      maxCount = count;
      result = div;
    }
  }
  return result;
};

var nums = [4, 7, 9, 3, 9],
  divisors = [5, 2, 3];
var expected = 3;
var result = maxDivScore(nums, divisors);
console.log(result, result === expected);

var nums = [20, 14, 21, 10],
  divisors = [5, 7, 5];
var expected = 5;
var result = maxDivScore(nums, divisors);
console.log(result, result === expected);

var nums = [12],
  divisors = [10, 16];
var expected = 10;
var result = maxDivScore(nums, divisors);
console.log(result, result === expected);
