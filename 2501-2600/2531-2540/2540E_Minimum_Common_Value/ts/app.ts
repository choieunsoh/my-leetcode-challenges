// 2540. Minimum Common Value
// https://leetcode.com/problems/minimum-common-value/
// T.C.: O(n)
// S.C.: O(1)
var getCommon = function (nums1: number[], nums2: number[]): number {
  if (nums1[nums1.length - 1] < nums2[0] || nums1[0] > nums2[nums2.length - 1]) return -1;
  let index1 = 0;
  let index2 = 0;
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] === nums2[index2]) return nums1[index1];
    if (nums1[index1] < nums2[index2]) {
      index1++;
    } else {
      index2++;
    }
  }
  return -1;
};

var nums1 = [1, 2, 3],
  nums2 = [2, 4];
var expected = 2;
var result = getCommon(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 2, 3, 6],
  nums2 = [2, 3, 4, 5];
var expected = 2;
var result = getCommon(nums1, nums2);
console.log(result, result === expected);
