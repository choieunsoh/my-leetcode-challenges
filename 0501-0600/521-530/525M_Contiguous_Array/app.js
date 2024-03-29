// 525. Contiguous Array
// https://leetcode.com/problems/contiguous-array/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function (nums) {
  const map = new Map();
  let result = 0;
  let count = 0;
  map.set(count, -1);
  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (!map.has(count)) {
      map.set(count, i);
    } else {
      result = Math.max(result, i - map.get(count));
    }
  }
  return result;
};

var nums = [0, 1];
var expected = 2;
var result = findMaxLength(nums);
console.log(result, result === expected);

var nums = [0, 1, 0];
var expected = 2;
var result = findMaxLength(nums);
console.log(result, result === expected);

var nums = [1, 1, 0, 0, 1, 1, 0, 1, 1];
var expected = 6;
var result = findMaxLength(nums);
console.log(result, result === expected);
