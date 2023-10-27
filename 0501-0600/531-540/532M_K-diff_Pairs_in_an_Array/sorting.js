// 532. K-diff Pairs in an Array
// https://leetcode.com/problems/k-diff-pairs-in-an-array/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  nums.sort((a, b) => a - b);
  const result = new Set();
  let left = 0;
  let right = 0;
  while (right < nums.length) {
    const key = [nums[right], nums[left]].join();
    const diff = nums[right] - nums[left];
    if (left !== right && diff === k) {
      result.add(key);
      left++;
    } else if (diff > k) {
      left++;
    } else {
      right++;
    }
  }
  return result.size;
};

var nums = [3, 1, 4, 1, 5],
  k = 2;
var expected = 2;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5],
  k = 1;
var expected = 4;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 3, 1, 5, 4],
  k = 0;
var expected = 1;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1],
  k = 0;
var expected = 1;
var result = findPairs(nums, k);
console.log(result, result === expected);

var nums = [6, 7, 3, 6, 4, 6, 3, 5, 6, 9],
  k = 4;
var expected = 2;
var result = findPairs(nums, k);
console.log(result, result === expected);
