/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function (nums1, nums2) {
  let result = 0;
  return result;
};

var nums1 = [90, 27, 26],
  nums2 = [37, 92, 15];
var expected = 2;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [2, 3, 1],
  nums2 = [1, 2, 1];
var expected = 2;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 2],
  nums2 = [1, 2];
var expected = 2;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [12, 10],
  nums2 = [16, 2];
var expected = 1;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [12, 10, 1, 2, 3, 4],
  nums2 = [16, 2, 2, 3, 4, 5];
var expected = 5;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 3, 2, 1],
  nums2 = [2, 2, 3, 4];
var expected = 4;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);

var nums1 = [11, 7, 7, 9],
  nums2 = [19, 19, 1, 7];
var expected = 3;
var result = maxNonDecreasingLength(nums1, nums2);
console.log(result, result === expected);
