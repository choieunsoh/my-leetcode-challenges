// 11. Container With Most Water
// https://leetcode.com/problems/container-with-most-water/
// T.C.: O(n^2)
// S.C.: O(1)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = (heights) => {
  let maxArea = 0;
  for (let left = 0; left < height.length; left++) {
    for (let right = left + 1; right < height.length; right++) {
      const width = right - left;
      maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * width);
    }
  }
  return maxArea;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var expected = 49;
var result = maxArea(height);
console.log(result, result === expected);

var height = [2, 3, 4, 5, 18, 17, 6];
var expected = 17;
var result = maxArea(height);
console.log(result, result === expected);

var height = [1, 2, 3, 4, 5, 25, 24, 3, 4];
var expected = 24;
var result = maxArea(height);
console.log(result, result === expected);
