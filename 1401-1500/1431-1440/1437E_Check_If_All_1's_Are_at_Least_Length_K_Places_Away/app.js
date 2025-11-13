// 1437. Check If All 1's Are at Least Length K Places Away
// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
  let zeroCount = k;
  for (const num of nums) {
    if (num === 1) {
      if (zeroCount < k) return false;
      zeroCount = 0;
    } else {
      zeroCount++;
    }
  }
  return true;
};

var nums = [1, 0, 0, 0, 1, 0, 0, 1],
  k = 2;
var expected = true;
var result = kLengthApart(nums, k);
console.log(result, result === expected);

var nums = [1, 0, 0, 1, 0, 1],
  k = 2;
var expected = false;
var result = kLengthApart(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1, 1],
  k = 2;
var expected = false;
var result = kLengthApart(nums, k);
console.log(result, result === expected);

var nums = [1, 1, 1, 1, 1, 1],
  k = 0;
var expected = true;
var result = kLengthApart(nums, k);
console.log(result, result === expected);
