// 1498. Number of Subsequences That Satisfy the Given Sum Condition
// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/
// T.O.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = 0;
  const MOD = 1e9 + 7;
  const power = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    power[i] = (power[i - 1] << 1) % MOD;
  }

  for (let left = 0; left < nums.length; left++) {
    const right = binarySearchRightmost(nums, target - nums[left]);
    if (right >= left) {
      result = (result + power[right - left]) % MOD;
    }
  }

  return result;

  function binarySearchRightmost(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let rightmost = -1;
    while (left <= right) {
      const middle = left + Math.floor((right - left) / 2);
      if (nums[middle] <= target) {
        left = middle + 1;
        rightmost = middle;
      } else {
        right = middle - 1;
      }
    }
    return rightmost;
  }
};

var nums = [3, 5, 6, 7],
  target = 9;
var expected = 4;
var result = numSubseq(nums, target);
console.log(result, result === expected);

var nums = [3, 3, 6, 8],
  target = 10;
var expected = 6;
var result = numSubseq(nums, target);
console.log(result, result === expected);

var nums = [2, 3, 3, 4, 6, 7],
  target = 12;
var expected = 61;
var result = numSubseq(nums, target);
console.log(result, result === expected);
