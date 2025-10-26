// 2057. Smallest Index With Equal Value
// https://leetcode.com/problems/smallest-index-with-equal-value/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (index % 10 === nums[index]) return index;
  }
  return -1;
};

var nums = [0, 1, 2];
var expected = 0;
var result = smallestEqual(nums);
console.log(result, result === expected);

var nums = [4, 3, 2, 1];
var expected = 2;
var result = smallestEqual(nums);
console.log(result, result === expected);

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var expected = -1;
var result = smallestEqual(nums);
console.log(result, result === expected);
