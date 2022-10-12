// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate_SetLoop(nums: number[]): boolean {
  const duplicateSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (duplicateSet.has(nums[i])) return true;
    duplicateSet.add(nums[i]);
  }
  return false;
}

var nums = [1, 2, 3, 1];
var expected = true;
var result = containsDuplicate_SetLoop(nums);
console.log(result, expected, result === expected);

var nums = [1, 2, 3, 4];
var expected = false;
var result = containsDuplicate_SetLoop(nums);
console.log(result, expected, result === expected);

var nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
var expected = true;
var result = containsDuplicate_SetLoop(nums);
console.log(result, expected, result === expected);
