// 2824. Count Pairs Whose Sum is Less than Target
// https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function (nums, target) {
  let result = 0;
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] < target) result++;
    }
  }
  return result;
};

var nums = [-1, 1, 2, 3, 1],
  target = 2;
var expected = 3;
var result = countPairs(nums, target);
console.log(result, result === expected);

var nums = [-6, 2, 5, -2, -7, -1, 3],
  target = -2;
var expected = 10;
var result = countPairs(nums, target);
console.log(result, result === expected);
