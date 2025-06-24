// 2200. Find All K-Distant Indices in an Array
// https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const result = [];
  const n = nums.length;
  let left = 0;
  let right = 0;
  while (right < n) {
    if (nums[right] === key) {
      while (right - left > k) {
        left++;
      }
      while (left < n && left <= right + k) {
        result.push(left++);
      }
    }
    right++;
  }

  return result;
};

var nums = [3, 4, 9, 1, 3, 9, 5],
  key = 9,
  k = 1;
var expected = [1, 2, 3, 4, 5, 6];
var result = findKDistantIndices(nums, key, k);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 2, 2, 2],
  key = 2,
  k = 2;
var expected = [0, 1, 2, 3, 4];
var result = findKDistantIndices(nums, key, k);
console.log(result, result.join() === expected.join());
