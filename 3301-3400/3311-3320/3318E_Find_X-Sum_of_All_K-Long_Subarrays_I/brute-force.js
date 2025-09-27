// 3318. Find X-Sum of All K-Long Subarrays I
// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-i/description/
// T.C.: O(n^2 log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findXSum = function (nums, k, x) {
  const result = [];
  const freq = new Array(51).fill(0);
  const n = nums.length;
  for (let i = 0; i < k; i++) {
    freq[nums[i]]++;
  }
  result.push(sumTopX());

  for (let i = k; i < n; i++) {
    freq[nums[i - k]]--;
    freq[nums[i]]++;
    result.push(sumTopX());
  }
  return result;

  function sumTopX() {
    return freq
      .map((count, val) => [count, val])
      .sort((a, b) => b[0] - a[0] || b[1] - a[1])
      .slice(0, x)
      .reduce((sum, [count, val]) => sum + count * val, 0);
  }
};

var nums = [1, 1, 2, 2, 3, 4, 2, 3],
  k = 6,
  x = 2;
var expected = [6, 10, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());

var nums = [3, 8, 7, 8, 7, 5],
  k = 2,
  x = 2;
var expected = [11, 15, 15, 15, 12];
var result = findXSum(nums, k, x);
console.log(result, result.join() === expected.join());
