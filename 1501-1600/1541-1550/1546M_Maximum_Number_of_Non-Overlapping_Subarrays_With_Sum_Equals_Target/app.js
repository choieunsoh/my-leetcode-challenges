// 1546. Maximum Number of Non-Overlapping Subarrays With Sum Equals Target
// https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maxNonOverlapping = function (nums, target) {
  let result = 0;
  const seen = new Set([0]);
  let sum = 0;
  for (const num of nums) {
    sum += num;
    const remainder = sum - target;
    if (seen.has(remainder)) {
      result++;
      seen.clear();
      sum = 0;
    }
    seen.add(sum);
  }
  return result;
};

var nums = [1, 1, 1, 1, 1],
  target = 2;
var expected = 2;
var result = maxNonOverlapping(nums, target);
console.log(result, result === expected);

var nums = [-1, 3, 5, 1, 4, 2, -9],
  target = 6;
var expected = 2;
var result = maxNonOverlapping(nums, target);
console.log(result, result === expected);

var nums = [-2, 6, 6, 3, 5, 4, 1, 2, 8],
  target = 10;
var expected = 3;
var result = maxNonOverlapping(nums, target);
console.log(result, result === expected);
