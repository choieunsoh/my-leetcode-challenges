// 2176. Count Equal and Divisible Pairs in an Array
// https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
  const n = nums.length;
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] !== nums[j]) continue;
      if ((i * j) % k === 0) count++;
    }
  }
  return count;
};

var nums = [3, 1, 2, 2, 2, 1, 3],
  k = 2;
var expected = 4;
var result = countPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4],
  k = 1;
var expected = 0;
var result = countPairs(nums, k);
console.log(result, result === expected);
