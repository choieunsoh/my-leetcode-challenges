// 2638. Count the Number of K-Free Subsets
// https://leetcode.com/problems/count-the-number-of-k-free-subsets/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countTheNumOfKFreeSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);

  let maxChain = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const prev = num - k;
    let value = 1;
    if (map.has(prev)) {
      value += map.get(prev);
      map.delete(prev);
    }
    map.set(num, value);
    if (value > maxChain) {
      maxChain = value;
    }
  }

  const dp = new Array(maxChain + 1);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i <= maxChain; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  let count = 1;
  for (const size of map.values()) {
    count *= dp[size];
  }

  return count;
};

var nums = [5, 4, 6],
  k = 1;
var expected = 5;
var result = countTheNumOfKFreeSubsets(nums, k);
console.log(result, result === expected);

var nums = [2, 3, 5, 8],
  k = 5;
var expected = 12;
var result = countTheNumOfKFreeSubsets(nums, k);
console.log(result, result === expected);

var nums = [10, 5, 9, 11],
  k = 20;
var expected = 16;
var result = countTheNumOfKFreeSubsets(nums, k);
console.log(result, result === expected);
