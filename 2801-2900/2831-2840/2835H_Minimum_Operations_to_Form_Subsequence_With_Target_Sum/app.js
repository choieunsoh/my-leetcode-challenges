// 2835. Minimum Operations to Form Subsequence With Target Sum
// https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var minOperations = function (nums, target) {
  const counter = new Array(32).fill(0);
  let result = 0;
  let j = 32;
  for (const num of nums) {
    counter[Math.log2(num)]++;
  }

  for (let i = 0; i < 31; i++) {
    const bit = 1 << i;
    if (target & bit) {
      if (counter[i]) {
        counter[i]--;
      } else {
        j = Math.min(j, i);
      }
    }

    if (counter[i] && j < i) {
      counter[i]--;
      result += i - j;
      j = 32;
    }

    counter[i + 1] += (counter[i] / 2) | 0;
  }
  return j < 32 ? -1 : result;
};

var nums = [1, 2, 8],
  target = 7;
var expected = 1;
var result = minOperations(nums, target);
console.log(result, result === expected);

var nums = [1, 32, 1, 2],
  target = 12;
var expected = 2;
var result = minOperations(nums, target);
console.log(result, result === expected);

var nums = [1, 32, 1],
  target = 35;
var expected = -1;
var result = minOperations(nums, target);
console.log(result, result === expected);
