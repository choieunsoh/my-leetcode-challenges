// 2425. Bitwise XOR of All Pairings
// https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  let result = 0;
  if (nums1.length & 1) {
    for (const num of nums2) {
      result ^= num;
    }
  }
  if (nums2.length & 1) {
    for (const num of nums1) {
      result ^= num;
    }
  }
  return result;
};

var nums1 = [2, 1, 3],
  nums2 = [10, 2, 5, 0];
var expected = 13;
var result = xorAllNums(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 2],
  nums2 = [3, 4];
var expected = 0;
var result = xorAllNums(nums1, nums2);
console.log(result, result === expected);
