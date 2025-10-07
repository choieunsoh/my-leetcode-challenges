// 2855. Minimum Right Shifts to Sort the Array
// https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  let pivotCount = 0;
  let pivotIndex = 0;
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      pivotCount++;
      pivotIndex = i;
    }
  }

  if (pivotCount > 1) return -1;
  if (pivotCount === 0) return 0;
  return nums[n - 1] > nums[0] ? -1 : n - pivotIndex;
};

var nums = [3, 4, 5, 1, 2];
var expected = 2;
var result = minimumRightShifts(nums);
console.log(result, result === expected);

var nums = [1, 3, 5];
var expected = 0;
var result = minimumRightShifts(nums);
console.log(result, result === expected);

var nums = [2, 1, 4];
var expected = -1;
var result = minimumRightShifts(nums);
console.log(result, result === expected);
