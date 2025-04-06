// 368. Largest Divisible Subset
// https://leetcode.com/problems/largest-divisible-subset/
// T.O.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  // Sort the original list in ascending order.
  nums.sort((a, b) => a - b);
  const n = nums.length;
  let maxSubsetIndex = 0;
  let maxSubsetSize = 0;

  // EDS: ending divisible subset
  // Container to keep the size of the largest divisible subset
  //   that ends with each of the nums.
  const dpEDSSize = new Array(n).fill(1);

  for (let i = 0; i < n; ++i) {
    let subsetSize = 0;

    // Find the largest divisible subset of previous elements.
    for (let k = 0; k < i; k++) {
      if (nums[i] % nums[k] === 0 && subsetSize < dpEDSSize[k]) {
        subsetSize = dpEDSSize[k];
      }
    }

    // Extend the found subset with the element itself.
    dpEDSSize[i] = subsetSize + 1;

    // Update the largest subset size and index if needed.
    if (maxSubsetSize < dpEDSSize[i]) {
      maxSubsetSize = dpEDSSize[i];
      maxSubsetIndex = i;
    }
  }

  const subset = [];
  let currSize = maxSubsetSize;
  let currTail = nums[maxSubsetIndex];
  for (let i = maxSubsetIndex; i >= 0; --i) {
    if (currSize === 0) break;

    if (currTail % nums[i] === 0 && currSize === dpEDSSize[i]) {
      subset.push(nums[i]);
      currTail = nums[i];
      currSize--;
    }
  }

  return subset.reverse();
};

var nums = [1, 2, 3];
var expected = [1, 2];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 4, 8];
var expected = [1, 2, 4, 8];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [1];
var expected = [1];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [3, 17];
var expected = [3];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());

var nums = [2, 4, 7, 8];
var expected = [2, 4, 8];
var result = largestDivisibleSubset(nums);
console.log(result, result.join() === expected.join());
