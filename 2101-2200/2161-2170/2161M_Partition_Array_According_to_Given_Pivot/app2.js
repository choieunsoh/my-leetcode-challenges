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
  let less = 0;
  let equal = 0;
  for (const num of nums) {
    if (num < pivot) {
      less++;
    } else if (num == pivot) {
      equal++;
    }
  }

  const result = new Array(nums.length);
  let lessI = 0;
  let equalI = less;
  let greaterI = less + equal;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < pivot) {
      result[lessI] = num;
      lessI++;
    } else if (num > pivot) {
      result[greaterI] = num;
      greaterI++;
    } else {
      result[equalI] = num;
      equalI++;
    }
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
