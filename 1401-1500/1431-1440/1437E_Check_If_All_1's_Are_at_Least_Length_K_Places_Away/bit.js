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
  let x = 0;
  for (const num of nums) {
    x = (x << 1) | num;
  }

  if (x == 0 || k == 0) {
    return true;
  }

  while ((x & 1) == 0) {
    x = x >> 1;
  }

  while (x != 1) {
    let count = 0;
    x = x >> 1;
    while ((x & 1) == 0) {
      x = x >> 1;
      count++;
    }

    if (count < k) {
      return false;
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
