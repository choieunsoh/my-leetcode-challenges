// 1248. Count Number of Nice Subarrays
// https://leetcode.com/problems/count-number-of-nice-subarrays/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  return atMostK(nums, k) - atMostK(nums, k - 1);

  function atMostK(nums, k) {
    let count = 0;
    let sum = 0;
    let left = 0;
    for (let right = 0; right < nums.length; right++) {
      sum += nums[right] & 1;
      while (sum > k) {
        sum -= nums[left++] & 1;
      }
      count += right - left + 1;
    }
    return count;
  }
};

var nums = [1, 1, 2, 1, 1],
  k = 3;
var expected = 2;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);

var nums = [2, 4, 6],
  k = 1;
var expected = 0;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);

var nums = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2],
  k = 2;
var expected = 16;
var result = numberOfSubarrays(nums, k);
console.log(result, result === expected);
