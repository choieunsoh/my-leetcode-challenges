// 1874. Minimize Product Sum of Two Arrays
// https://leetcode.com/problems/minimize-product-sum-of-two-arrays/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function (nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);

  let product = 0;
  for (let i = 0; i < nums1.length; i++) {
    product += nums1[i] * nums2[i];
  }
  return product;
};

var nums1 = [5, 3, 4, 2],
  nums2 = [4, 2, 2, 5];
var expected = 40;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 1, 4, 5, 7],
  nums2 = [3, 2, 4, 8, 6];
var expected = 65;
var result = minProductSum(nums1, nums2);
console.log(result, result === expected);
