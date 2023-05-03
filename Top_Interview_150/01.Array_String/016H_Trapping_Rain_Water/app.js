// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let count = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    maxLeft = Math.max(maxLeft, height[left]);
    maxRight = Math.max(maxRight, height[right]);
    if (maxLeft < maxRight) {
      count += Math.max(0, maxLeft - height[left]);
      left++;
    } else {
      count += Math.max(0, maxRight - height[right]);
      right--;
    }
  }
  return count;
};

var height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
var expected = 6;
var result = trap(height);
console.log(result, expected, result === expected);

var height = [4, 2, 0, 3, 2, 5];
var expected = 9;
var result = trap(height);
console.log(result, expected, result === expected);
