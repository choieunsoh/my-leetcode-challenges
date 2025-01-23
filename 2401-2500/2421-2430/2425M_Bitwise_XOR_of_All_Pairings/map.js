// 2425. Bitwise XOR of All Pairings
// https://leetcode.com/problems/bitwise-xor-of-all-pairings/description/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function (nums1, nums2) {
  const freq = new Map();
  for (const num of nums1) {
    freq.set(num, (freq.get(num) ?? 0) + nums2.length);
  }
  for (const num of nums2) {
    freq.set(num, (freq.get(num) ?? 0) + nums1.length);
  }

  let result = 0;
  for (const [num, count] of freq) {
    if (count & 1) {
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
