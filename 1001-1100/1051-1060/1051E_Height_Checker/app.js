// https://leetcode.com/problems/height-checker/
// 1051. Height Checker
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let count = 0;
  const expected = [...heights].sort((a, b) => a - b);
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== expected[i]) count++;
  }
  return count;
};

var heights = [1, 1, 4, 2, 1, 3];
var expected = 3;

var heights = [5, 1, 2, 3, 4];
var expected = 5;

var heights = [1, 2, 3, 4, 5];
var expected = 0;
