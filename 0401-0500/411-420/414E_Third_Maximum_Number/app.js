// https://leetcode.com/problems/third-maximum-number/
// 414. Third Maximum Number
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  const [first, _, third] = [...new Set(nums)].sort((a, b) => b - a);
  return third === undefined ? first : third;
};

var nums = [3, 2, 1];
var expected = 1;

var nums = [1, 2];
expected = 2;

var nums = [2, 2, 3, 1];
expected = 1;
