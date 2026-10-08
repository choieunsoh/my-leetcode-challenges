// 3866. First Unique Even Element
// https://leetcode.com/problems/first-unique-even-element/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
  const seen = new Map();
  for (const num of nums) {
    if (num & 1) continue;
    seen.set(num, (seen.get(num) ?? 0) + 1);
  }
  for (const [num, count] of seen) {
    if (count === 1) return num;
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
