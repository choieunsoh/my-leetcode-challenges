// https://leetcode.com/problems/4sum-ii/
// 454. 4Sum II
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  let count = 0;
  const seen = new Map();
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      const sum = nums1[i] + nums2[j];
      seen.set(sum, seen.get(sum) + 1 || 1);
    }
  }

  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      const target = (nums3[i] + nums4[j]) * -1;
      count += seen.get(target) ?? 0;
    }
  }

  return count;
};

var nums1 = [-1, -1],
  nums2 = [-1, 1],
  nums3 = [-1, 1],
  nums4 = [1, -1];
var expected = 6;
console.log(fourSumCount(nums1, nums2, nums3, nums4), expected);

var nums1 = [1, 2],
  nums2 = [-2, -1],
  nums3 = [-1, 2],
  nums4 = [0, 2];
var expected = 2;
console.log(fourSumCount(nums1, nums2, nums3, nums4), expected);

var nums1 = [0],
  nums2 = [0],
  nums3 = [0],
  nums4 = [0];
var expected = 1;
console.log(fourSumCount(nums1, nums2, nums3, nums4), expected);
