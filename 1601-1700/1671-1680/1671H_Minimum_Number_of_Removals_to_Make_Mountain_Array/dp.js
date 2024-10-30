// 1671. Minimum Number of Removals to Make Mountain Array
// https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;
  const lisLength = new Array(n).fill(1);
  const ldsLength = new Array(n).fill(1);

  // left to i
  for (let i = 0; i < n; i++) {
    for (let left = i - 1; left >= 0; left--) {
      if (nums[i] > nums[left]) {
        lisLength[i] = Math.max(lisLength[i], lisLength[left] + 1);
      }
    }
  }

  // i to right
  for (let i = n - 1; i >= 0; i--) {
    for (let right = i + 1; right < n; right++) {
      if (nums[i] > nums[right]) {
        ldsLength[i] = Math.max(ldsLength[i], ldsLength[right] + 1);
      }
    }
  }

  let minRemovals = n;
  for (let i = 0; i < n; i++) {
    if (lisLength[i] > 1 && ldsLength[i] > 1) {
      minRemovals = Math.min(minRemovals, n - lisLength[i] - ldsLength[i] + 1);
    }
  }
  return minRemovals;
};

var nums = [1, 3, 1];
var expected = 0;
var result = minimumMountainRemovals(nums);
console.log(result, result === expected);

var nums = [2, 1, 1, 5, 6, 2, 3, 1];
var expected = 3;
var result = minimumMountainRemovals(nums);
console.log(result, result === expected);
