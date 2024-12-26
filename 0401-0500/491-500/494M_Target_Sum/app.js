// 494. Target Sum
// https://leetcode.com/problems/target-sum/
// Time Limit Exceeded
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const q = [0];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const newQ = [];
    while (q.length) {
      let val = q.pop();
      newQ.push(...[val + num, val - num]);
    }
    q.push(...newQ);
  }

  return q.filter((n) => n === target).length;
};

var nums = [1, 1, 1, 1, 1],
  target = 3;
var expected = 5;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [1],
  target = 1;
var expected = 1;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);

var nums = [0, 0, 0, 0, 0, 0, 0, 0, 1],
  target = 1;
var expected = 256;
var result = findTargetSumWays(nums, target);
console.log(result, result === expected);
