// 2597. The Number of Beautiful Subsets
// https://leetcode.com/problems/the-number-of-beautiful-subsets/
// T.C.: O(n * 2^n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var beautifulSubsets = function (nums, k) {
  return countBeautifulSubsets(0, 0);

  function countBeautifulSubsets(index, mask) {
    if (index === nums.length) {
      return mask > 0 ? 1 : 0;
    }

    let isBeautiful = true;
    for (let j = 0; j < index && isBeautiful; j++) {
      isBeautiful = ((1 << j) & mask) === 0 || Math.abs(nums[index] - nums[j]) !== k;
    }

    const skipCount = countBeautifulSubsets(index + 1, mask);
    const takeCount = isBeautiful ? countBeautifulSubsets(index + 1, mask + (1 << index)) : 0;
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
