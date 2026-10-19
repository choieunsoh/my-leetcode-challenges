// 2089. Find Target Indices After Sorting Array
// https://leetcode.com/problems/find-target-indices-after-sorting-array/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function (nums, target) {
  let cnt1 = 0;
  let cnt2 = 0;

  for (const num of nums) {
    if (num < target) {
      cnt1++;
    } else if (num === target) {
      cnt2++;
    }
  }

  const result = [];
  for (let i = cnt1; i < cnt1 + cnt2; i++) {
    result.push(i);
  }
  return result;
};

var nums = [1, 2, 5, 2, 3],
  target = 2;
var expected = [1, 2];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 5, 2, 3],
  target = 3;
var expected = [3];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());

var nums = [1, 2, 5, 2, 3],
  target = 5;
var expected = [4];
var result = targetIndices(nums, target);
console.log(result, result.join() === expected.join());
