// 995. Minimum Number of K Consecutive Bit Flips
// https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function (nums, k) {
  let count = 0;
  let flips = 0;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    if (end - start + 1 >= k && nums[end - k] < 0) {
      flips--;
      start++;
    }
    if (flips % 2 === nums[end]) {
      if (end + k > nums.length) return -1;
      flips++;
      count++;
      nums[end] = -1;
    }
  }
  return count;
};

var nums = [0, 1, 0],
  k = 1;
var expected = 2;
var result = minKBitFlips(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 0],
  k = 2;
var expected = -1;
var result = minKBitFlips(nums, k);
console.log(result, result === expected);

var nums = [0, 0, 0, 1, 0, 1, 1, 0],
  k = 3;
var expected = 3;
var result = minKBitFlips(nums, k);
console.log(result, result === expected);
