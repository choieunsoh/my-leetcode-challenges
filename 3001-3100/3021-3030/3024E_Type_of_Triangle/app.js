// 3024. Type of Triangle
// https://leetcode.com/problems/type-of-triangle/description/
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = nums;
  if (a + b <= c || a + c <= b || b + c <= a) return 'none';
  if (a === b && b === c) return 'equilateral';
  if (a === b || a === c || b === c) return 'isosceles';
  return 'scalene';
};

var nums = [3, 3, 3];
var expected = 'equilateral';
var result = triangleType(nums);
console.log(result, result === expected);

var nums = [3, 4, 5];
var expected = 'scalene';
var result = triangleType(nums);
console.log(result, result === expected);
