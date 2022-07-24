// https://leetcode.com/problems/median-of-two-sorted-arrays/
// 4. Median of Two Sorted Arrays
const findMedianSortedArrays = (nums1, nums2) => {
  //
  let nums = [...nums1, ...nums2].sort((a, b) => a - b);
  let N = nums.length;
  if (N % 2 === 0) {
    return (nums[N / 2] + nums[N / 2 - 1]) / 2;
  } else {
    return nums[Math.floor(N / 2)];
  }
};

var nums1 = [1, 3];
var nums2 = [2];
var expected = 2;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);

var nums1 = [1, 2];
var nums2 = [3, 4];
var expected = 2.5;
var result = findMedianSortedArrays(nums1, nums2);
console.log(result, result === expected);
