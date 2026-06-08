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
  const less = [];
  const equal = [];
  const greater = [];
  for (const num of nums) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  less.push(...equal);
  less.push(...greater);
  return less;
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
