// 3876. Construct Uniform Parity Array II
// https://leetcode.com/problems/construct-uniform-parity-array-ii/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function (nums1) {
  let min = nums1[0];
  let hasOdd = false;
  for (const num of nums1) {
    if (num < min) {
      min = num;
    }
    if (num & 1) {
      hasOdd = true;
    }
  }
  if (min & 1) {
    return true;
  }
  return !hasOdd;
};

var nums1 = [1, 4, 7];
var expected = true;
var result = uniformArray(nums1);
console.log(result, result === expected);

var nums1 = [2, 3];
var expected = false;
var result = uniformArray(nums1);
console.log(result, result === expected);

var nums1 = [4, 6];
var expected = true;
var result = uniformArray(nums1);
console.log(result, result === expected);
