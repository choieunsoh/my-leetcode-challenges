// 2763. Sum of Imbalance Numbers of All Subarrays
// https://leetcode.com/problems/sum-of-imbalance-numbers-of-all-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumImbalanceNumbers = function (nums) {
  const n = nums.length;
  let result = 0;
  const left = new Array(n).fill(0);
  let seen = new Array(n + 10).fill(-1);
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    left[i] = Math.max(seen[num + 1], seen[num]);
    seen[num] = i;
  }
  seen = new Array(n + 10).fill(n);
  for (let i = n - 1; i >= 0; i--) {
    const num = nums[i];
    seen[num] = i;
    result += (i - left[i]) * (seen[num + 1] - i);
  }
  return result - (n * (n + 1)) / 2;
};

var nums = [2, 3, 1, 4];
var expected = 3;
var result = sumImbalanceNumbers(nums);
console.log(result, result === expected);

var nums = [1, 3, 3, 3, 5];
var expected = 8;
var result = sumImbalanceNumbers(nums);
console.log(result, result === expected);
