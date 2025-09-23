// 3678. Smallest Absent Positive Greater Than Average
// https://leetcode.com/problems/smallest-absent-positive-greater-than-average/description/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestAbsent = function (nums) {
  const average = nums.reduce((sum, num) => sum + num, 0) / nums.length;
  let result = (average | 0) + 1;
  if (result < 1) result = 1;
  while (true) {
    if (!nums.includes(result)) {
      return result;
    }
    result++;
  }
};

var nums = [3, 5];
var expected = 6;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [-1, 1, 2];
var expected = 3;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [4, -1];
var expected = 2;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [-34];
var expected = 1;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [98, 100];
var expected = 101;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [1, -39, 9];
var expected = 2;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [-89, 43, 27, 86, 19, 32, 83, 10, 53, 3, 40];
var expected = 28;
var result = smallestAbsent(nums);
console.log(result, result === expected);

var nums = [-1];
var expected = 1;
var result = smallestAbsent(nums);
console.log(result, result === expected);
