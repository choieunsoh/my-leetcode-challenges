// 368. Largest Divisible Subset
// https://leetcode.com/problems/largest-divisible-subset/
// T.O.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  let _nums = [];

  // Container to keep the largest divisible subset
  //   that ends with each of the nums
  // key: the index of the element
  // eds = new Map(); // Initialize eds here
  const eds = new Map();

  // Sort the original list in ascending order.
  nums.sort((a, b) => a - b);
  _nums = nums;

  let maxSubset = [];
  /* Calculate the values of all EDS(X_i),
     while keeping track of the largest one as the result value. */
  for (let i = 0; i < n; ++i) {
    const subset = EDS(i);
    if (maxSubset.length < subset.length) maxSubset = subset;
  }

  // return the largest one
  return maxSubset;

  function EDS(i) {
    // memoization
    if (eds.has(i)) return eds.get(i);

    let maxSubset = [];
    // Find the largest divisible subset of previous elements.
    for (let k = 0; k < i; ++k) {
      if (_nums[i] % _nums[k] === 0) {
        const subset = EDS(k);
        if (maxSubset.length < subset.length) maxSubset = subset;
      }
    }
    // Extend the found subset with the element itself.
    const newEntry = [...maxSubset, _nums[i]];

    // update the cached values
    eds.set(i, newEntry);
    return newEntry;
  }
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
