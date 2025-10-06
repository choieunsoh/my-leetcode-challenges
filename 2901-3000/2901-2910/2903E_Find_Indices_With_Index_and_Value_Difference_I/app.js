// 2903. Find Indices With Index and Value Difference I
// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
  const n = nums.length;
  if (indexDifference >= n) {
    return [-1, -1];
  }

  let minIndex = 0;
  let maxIndex = 0;

  // Iterate j from indexDifference to n-1
  for (let j = indexDifference; j < n; j++) {
    // The potential candidate for i is at j - indexDifference
    let i = j - indexDifference;

    // Update min and max indices for the window ending at i
    if (nums[i] < nums[minIndex]) {
      minIndex = i;
    }
    if (nums[i] > nums[maxIndex]) {
      maxIndex = i;
    }

    // Check conditions with the current j
    if (Math.abs(nums[j] - nums[minIndex]) >= valueDifference) {
      return [minIndex, j];
    }
    if (Math.abs(nums[j] - nums[maxIndex]) >= valueDifference) {
      return [maxIndex, j];
    }
  }

  return [-1, -1];
};

var nums = [5, 1, 4, 1],
  indexDifference = 2,
  valueDifference = 4;
var expected = [0, 3];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());

var nums = [2, 1],
  indexDifference = 0,
  valueDifference = 0;
var expected = [0, 0];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 3],
  indexDifference = 2,
  valueDifference = 4;
var expected = [-1, -1];
var result = findIndices(nums, indexDifference, valueDifference);
console.log(result, result.join() === expected.join());
