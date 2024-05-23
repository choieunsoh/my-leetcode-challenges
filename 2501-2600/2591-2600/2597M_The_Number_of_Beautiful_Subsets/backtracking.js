// 2597. The Number of Beautiful Subsets
// https://leetcode.com/problems/the-number-of-beautiful-subsets/
// T.C.: O(2^n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  nums.sort((a, b) => a - b);
  return countBeautifulSubsets(new Set(), 0) - 1;

  function countBeautifulSubsets(seen, index) {
    if (index === nums.length) return 1;

    const skipCount = countBeautifulSubsets(seen, index + 1);
    let takeCount = 0;

    if (!seen.has(nums[index] - k)) {
      seen.add(nums[index]);
      takeCount = countBeautifulSubsets(seen, index + 1);
      seen.delete(nums[index]);
    }

    return skipCount + takeCount;
  }
};

var nums = [10, 4, 5, 7, 2, 1],
  k = 3;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [2, 4, 6],
  k = 2;
var expected = 4;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [1],
  k = 1;
var expected = 1;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);

var nums = [4, 2, 5, 9, 10, 3],
  k = 1;
var expected = 23;
var result = beautifulSubsets(nums, k);
console.log(result, result === expected);
