// 992. Subarrays with K Different Integers
// https://leetcode.com/problems/subarrays-with-k-different-integers/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  const kDistinctCount = subarraysAtMostKDistinct(nums, k);
  const k1DistinctCount = subarraysAtMostKDistinct(nums, k - 1);
  return kDistinctCount - k1DistinctCount;

  function subarraysAtMostKDistinct(nums, k) {
    let result = 0;
    const freq = new Map();
    for (let left = 0, right = 0; right < nums.length; right++) {
      freq.set(nums[right], (freq.get(nums[right]) ?? 0) + 1);
      while (freq.size > k) {
        freq.set(nums[left], freq.get(nums[left]) - 1);
        if (freq.get(nums[left]) === 0) {
          freq.delete(nums[left]);
        }
        left++;
      }
      result += right - left + 1;
    }
    return result;
  }
};

var nums = [1, 2, 1, 2, 3],
  k = 2;
var expected = 7;
var result = subarraysWithKDistinct(nums, k);
console.log(result, result === expected);

var nums = [1, 2, 1, 3, 4],
  k = 3;
var expected = 3;
var result = subarraysWithKDistinct(nums, k);
console.log(result, result === expected);
