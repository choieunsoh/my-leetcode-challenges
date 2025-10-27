// 2032. Two Out of Three
// https://leetcode.com/problems/two-out-of-three/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  const counts = new Array(101).fill(0);
  countNums(nums1);
  countNums(nums2);
  countNums(nums3);

  const result = [];
  for (let num = 1; num <= 100; num++) {
    if (counts[num] >= 2) result.push(num);
  }
  return result;

  function countNums(nums) {
    const uniqueNums = new Set(nums);
    for (const num of uniqueNums) {
      counts[num]++;
    }
  }
};

var nums1 = [1, 1, 3, 2],
  nums2 = [2, 3],
  nums3 = [3];
var expected = [3, 2];
var result = twoOutOfThree(nums1, nums2, nums3);
console.log(result, result.sort().join() === expected.sort().join());

var nums1 = [3, 1],
  nums2 = [2, 3],
  nums3 = [1, 2];
var expected = [2, 3, 1];
var result = twoOutOfThree(nums1, nums2, nums3);
console.log(result, result.sort().join() === expected.sort().join());

var nums1 = [1, 2, 2],
  nums2 = [4, 3, 3],
  nums3 = [5];
var expected = [];
var result = twoOutOfThree(nums1, nums2, nums3);
console.log(result, result.sort().join() === expected.sort().join());
