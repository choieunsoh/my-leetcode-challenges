// 1671. Minimum Number of Removals to Make Mountain Array
// https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;

  const lisLength = getLIS(nums);
  const reversedNums = [...nums].reverse();
  const ldsLength = getLIS(reversedNums).reverse();

  let minRemovals = n;
  for (let i = 0; i < n; i++) {
    if (lisLength[i] > 1 && ldsLength[i] > 1) {
      minRemovals = Math.min(minRemovals, n - lisLength[i] - ldsLength[i] + 1);
    }
  }
  return minRemovals;

  // Longest Increasing Subsequence Length
  function getLIS(nums) {
    const n = nums.length;
    const lisLength = new Array(n).fill(1);
    const lis = [nums[0]];
    for (let i = 1; i < n; i++) {
      const index = lowerBound(lis, nums[i]);

      // Add to the list if nums[i] is greater than the last element
      if (index === lis.length) {
        lis.push(nums[i]);
      } else {
        // Replace the element at index with nums[i]
        lis[index] = nums[i];
      }

      lisLength[i] = lis.length;
    }
    return lisLength;
  }

  function lowerBound(lis, target) {
    let left = 0;
    let right = lis.length - 1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (lis[mid] >= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
};

var nums = [1, 3, 1];
var expected = 0;
var result = minimumMountainRemovals(nums);
console.log(result, result === expected);

var nums = [2, 1, 1, 5, 6, 2, 3, 1];
var expected = 3;
var result = minimumMountainRemovals(nums);
console.log(result, result === expected);

var nums = [4, 3, 2, 1, 1, 2, 3, 1];
var expected = 4;
var result = minimumMountainRemovals(nums);
console.log(result, result === expected);
