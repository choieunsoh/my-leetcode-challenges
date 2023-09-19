// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/
// Solution: Floyd's Tortoise and Hare (Cycle Detection)
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  // Find the intersection point of the two runners.
  let tortoise = nums[0];
  let hare = nums[0];
  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise !== hare);

  // Find the "entrance" to the cycle.
  tortoise = nums[0];

  while (tortoise !== hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return hare ?? -1;
};

var nums = [1, 3, 4, 2, 2];
var expected = 2;
var result = findDuplicate(nums);
console.log(result, result === expected);

var nums = [3, 1, 3, 4, 2];
var expected = 3;
var result = findDuplicate(nums);
console.log(result, result === expected);

var nums = [3, 1, 5, 4, 2];
var expected = -1;
var result = findDuplicate(nums);
console.log(result, result === expected);
