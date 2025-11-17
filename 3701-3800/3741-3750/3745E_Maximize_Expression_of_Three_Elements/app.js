// 3745. Maximize Expression of Three Elements
// https://leetcode.com/problems/maximize-expression-of-three-elements/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximizeExpressionOfThree = function (nums) {
  let a = -Infinity;
  let b = -Infinity;
  let c = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > a) {
      b = a;
      a = nums[i];
    } else if (nums[i] > b) {
      b = nums[i];
    }
    if (nums[i] < c) {
      c = nums[i];
    }
  }
  return a + b - c;
};

var nums = [1, 4, 2, 5];
var expected = 8;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);

var nums = [-2, 0, 5, -2, 4];
var expected = 11;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);

var nums = [-4, -8, -10];
var expected = -2;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);

var nums = [4, 8, 10];
var expected = 14;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);

var nums = [1, 1, 1];
var expected = 1;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);

var nums = [-1, -1, -1];
var expected = -1;
var result = maximizeExpressionOfThree(nums);
console.log(result, result === expected);
