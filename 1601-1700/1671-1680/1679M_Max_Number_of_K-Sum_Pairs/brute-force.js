// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let count = 0;
  for (let first = 0; first < nums.length; first++) {
    // Check if element pointed by first is already taken up
    if (nums[first] === 0) continue;
    for (let second = first + 1; second < nums.length; second++) {
      // Check if element pointed by second is already taken up
      if (nums[second] === 0) continue;
      if (nums[first] + nums[second] === k) {
        nums[first] = nums[second] = 0;
        count++;
        break;
      }
    }
  }
  return count;
};

var nums = [1, 2, 3, 4],
  k = 5;
var expected = 2;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [3, 1, 3, 4, 3],
  k = 6;
var expected = 1;
var result = maxOperations(nums, k);
console.log(result, result === expected);

var nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2],
  k = 3;
var expected = 4;
var result = maxOperations(nums, k);
console.log(result, result === expected);
