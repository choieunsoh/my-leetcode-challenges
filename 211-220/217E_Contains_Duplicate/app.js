// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

var nums = [1, 2, 3, 1];
console.log(nums.join(' '), containsDuplicate(nums));

nums = [1, 2, 3, 4];
console.log(nums.join(' '), containsDuplicate(nums));

nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log(nums.join(' '), containsDuplicate(nums));
