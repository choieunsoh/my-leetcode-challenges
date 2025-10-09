// 2605. Form Smallest Number From Two Digit Arrays
// https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function (nums1, nums2) {
  const counts = new Array(10).fill(0);
  let min1 = Infinity;
  for (const num of nums1) {
    counts[num]++;
    min1 = Math.min(min1, num);
  }

  let min2 = Infinity;
  for (const num of nums2) {
    counts[num]++;
    min2 = Math.min(min2, num);
  }

  let min = Infinity;
  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === 2) {
      min = i;
      break;
    }
  }
  return Math.min(min, min1 * 10 + min2, 10 * min2 + min1);
};

var nums1 = [4, 1, 3],
  nums2 = [5, 7];
var expected = 15;
var result = minNumber(nums1, nums2);
console.log(result, result === expected);

var nums1 = [3, 5, 2, 6],
  nums2 = [3, 1, 7];
var expected = 3;
var result = minNumber(nums1, nums2);
console.log(result, result === expected);
