// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate_SetSize(nums: number[]): boolean {
  return new Set<number>(nums).size !== nums.length;
}

var nums = [1, 2, 3, 1];
var expected = true;
var result = containsDuplicate_SetSize(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 3, 4];
var expected = false;
var result = containsDuplicate_SetSize(nums);
console.log(result, expected, result === expected);

var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
var expected = true;
var result = containsDuplicate_SetSize(nums);
console.log(result, expected, result === expected);
