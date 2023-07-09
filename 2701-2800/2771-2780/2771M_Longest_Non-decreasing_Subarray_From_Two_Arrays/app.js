// 2771. Longest Non-decreasing Subarray From Two Arrays
// https://leetcode.com/problems/longest-non-decreasing-subarray-from-two-arrays/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxNonDecreasingLength = function (nums1, nums2) {
  const n = nums1.length;
  if (n === 1) return 1;

  let prev1 = 1;
  let prev2 = 1;
  let result = 0;
  for (let i = 1; i < n; i++) {
    let current1 = 1;
    let current2 = 1;

    if (nums1[i] >= nums1[i - 1]) {
      current1 = Math.max(current1, prev1 + 1);
    }

    if (nums2[i] >= nums2[i - 1]) {
      current2 = Math.max(current2, prev2 + 1);
    }

    if (nums1[i] >= nums2[i - 1]) {
      current1 = Math.max(current1, prev2 + 1);
    }

    if (nums2[i] >= nums1[i - 1]) {
      current2 = Math.max(current2, prev1 + 1);
    }

    result = Math.max(result, current1, current2);
    prev1 = current1;
    prev2 = current2;
  }

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
