// 1679. Max Number of K-Sum Pairs
// https://leetcode.com/problems/max-number-of-k-sum-pairs
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  const counter = new Map();
  let result = 0;
  for (const num of nums) {
    const target = k - num;
    const count = counter.get(target) ?? 0;
    if (count > 0) {
      result++;
      counter.set(target, count - 1);
    } else {
      const count = counter.get(num) ?? 0;
      counter.set(num, count + 1);
    }
  }
  return result;
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
