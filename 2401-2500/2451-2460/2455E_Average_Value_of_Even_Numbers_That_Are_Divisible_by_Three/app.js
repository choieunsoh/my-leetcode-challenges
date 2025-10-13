// 2455. Average Value of Even Numbers That Are Divisible by Three
// https://leetcode.com/problems/average-value-of-even-numbers-that-are-divisible-by-three/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function (nums) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 6 === 0) {
      sum += nums[i];
      count++;
    }
  }
  return (sum / count) | 0;
};

var nums = [1, 3, 6, 10, 12, 15];
var expected = 9;
var result = averageValue(nums);
console.log(result, result === expected);

var nums = [1, 2, 4, 7, 10];
var expected = 0;
var result = averageValue(nums);
console.log(result, result === expected);
