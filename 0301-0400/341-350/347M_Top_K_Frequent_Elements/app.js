// https://leetcode.com/problems/top-k-frequent-elements/
// 347. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const freq = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  return [...freq.entries()]
    .sort((a, b) => b[1] - a[1])
    .filter((n, i) => i < k)
    .map((a) => a[0]);
};

var nums = [1, 1, 1, 2, 2, 3],
  k = 2;
var expected = [1, 2];
var result = topKFrequent(nums, k);
console.log(result, result.join('') === expected.join(''));

var nums = [1],
  k = 1;
var expected = [1];
var result = topKFrequent(nums, k);
console.log(result, result.join('') === expected.join(''));

var nums = [1, 2],
  k = 2;
var expected = [1, 2];
var result = topKFrequent(nums, k);
console.log(result, result.join('') === expected.join(''));
