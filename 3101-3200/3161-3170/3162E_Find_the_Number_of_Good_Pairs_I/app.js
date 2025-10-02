// 3162. Find the Number of Good Pairs I
// https://leetcode.com/problems/find-the-number-of-good-pairs-i/description/
// T.C.: O(n*m)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
  let pairs = 0;
  for (const num1 of nums1) {
    for (const num2 of nums2) {
      if (num1 % (num2 * k) === 0) pairs++;
    }
  }
  return pairs;
};

var nums1 = [1, 3, 4],
  nums2 = [1, 3, 4],
  k = 1;
var expected = 5;
var result = numberOfPairs(nums1, nums2, k);
console.log(result, result === expected);

var nums1 = [1, 2, 4, 12],
  nums2 = [2, 4],
  k = 3;
var expected = 2;
var result = numberOfPairs(nums1, nums2, k);
console.log(result, result === expected);
