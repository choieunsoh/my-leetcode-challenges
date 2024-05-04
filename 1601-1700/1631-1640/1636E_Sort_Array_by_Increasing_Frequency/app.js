// 1636. Sort Array by Increasing Frequency
// https://leetcode.com/problems/sort-array-by-increasing-frequency/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const freq = new Map();
  for (const num of nums) {
    const count = freq.get(num) ?? 0;
    freq.set(num, count + 1);
  }
  nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a);
  return nums;
};

var nums = [1, 1, 2, 2, 2, 3];
var expected = [3, 1, 1, 2, 2, 2];
var result = frequencySort(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 3, 1, 3, 2];
var expected = [1, 3, 3, 2, 2];
var result = frequencySort(nums);
console.log(result, result.join() === expected.join());

var nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1];
var expected = [5, -1, 4, 4, -6, -6, 1, 1, 1];
var result = frequencySort(nums);
console.log(result, result.join() === expected.join());
