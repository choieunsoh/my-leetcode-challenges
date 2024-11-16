// 3254. Find the Power of K-Size Subarrays I
// https://leetcode.com/problems/find-the-power-of-k-size-subarrays-i/description/
// T.C.: O(n)
// S.C.: O(k)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const n = nums.length;
  const result = new Array(n - k + 1).fill(-1);
  const indexDeque = [];
  for (let index = 0; index < n; index++) {
    // Remove elements that are out of the window
    if (indexDeque.length > 0 && indexDeque[0] < index - k + 1) {
      indexDeque.shift();
    }

    // Check if current element breaks the consecutive and sorted condition
    if (indexDeque.length > 0 && nums[index] !== nums[index - 1] + 1) {
      indexDeque.length = 0; // Invalidate the entire deque if condition breaks
    }

    // Add current element index to the deque
    indexDeque.push(index);

    if (index >= k - 1) {
      if (indexDeque.length === k) {
        result[index - k + 1] = nums[indexDeque[indexDeque.length - 1]];
      }
    }
  }
  return result;
};

var nums = [1, 2, 3, 4, 3, 2, 5],
  k = 3;
var expected = [3, 4, -1, -1, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [2, 2, 2, 2, 2],
  k = 4;
var expected = [-1, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [3, 2, 3, 2, 3, 2],
  k = 2;
var expected = [-1, 3, -1, 3, -1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1],
  k = 1;
var expected = [1];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());

var nums = [1, 4],
  k = 1;
var expected = [1, 4];
var result = resultsArray(nums, k);
console.log(result, result.join() === expected.join());
