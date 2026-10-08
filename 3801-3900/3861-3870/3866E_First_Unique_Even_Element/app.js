// 3866. First Unique Even Element
// https://leetcode.com/problems/first-unique-even-element/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  if (nums.length === 1 && nums[0] % 2 === 0) {
    return nums[0];
  }

  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue;
      }
      if (nums[i] === nums[j]) {
        found = true;
        break;
      }
    }

    if (!found && nums[i] % 2 === 0) {
      return nums[i];
    }
  }

  return -1;
};

var nums = [3, 4, 2, 5, 4, 6];
var expected = 2;
var result = firstUniqueEven(nums);
console.log(result, result === expected);

var nums = [4, 4];
var expected = -1;
var result = firstUniqueEven(nums);
console.log(result, result === expected);

var nums = [
  5, 34, 41, 34, 48, 21, 14, 43, 34, 35, 41, 12, 22, 30, 28, 39, 13, 20, 33, 25, 27, 8, 20, 44, 46, 8, 25, 47, 22, 45,
  7, 15, 24, 8, 31, 10, 15, 5, 48, 14, 29, 16, 19, 21, 33,
];
var expected = 12;
var result = firstUniqueEven(nums);
console.log(result, result === expected);
