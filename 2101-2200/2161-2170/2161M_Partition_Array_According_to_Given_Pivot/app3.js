// 2161. Partition Array According to Given Pivot
// https://leetcode.com/problems/partition-array-according-to-given-pivot/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  const result = new Array(nums.length);
  let lessI = 0;
  let greaterI = nums.length - 1;
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] < pivot) {
      result[lessI] = nums[i];
      lessI++;
    }
    if (nums[j] > pivot) {
      result[greaterI] = nums[j];
      greaterI--;
    }
  }
  while (lessI <= greaterI) {
    result[lessI] = pivot;
    lessI++;
  }
  return result;
};

var nums = [9, 12, 5, 10, 14, 3, 10],
  pivot = 10;
var expected = [9, 5, 3, 10, 10, 12, 14];
var result = pivotArray(nums, pivot);
console.log(result, result.join() === expected.join());

var nums = [-3, 4, 3, 2],
  pivot = 2;
var expected = [-3, 2, 4, 3];
var result = pivotArray(nums, pivot);
console.log(result, result.join() === expected.join());
