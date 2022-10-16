// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
var trap = function (height: number[]): number {
  let count = 0;
  let [left, maxLeft] = [0, 0];
  let [right, maxRight] = [height.length - 1, 0];
  while (left < right) {
    if (height[left] < height[right]) {
      height[left] > maxLeft
        ? (maxLeft = height[left++])
        : (count += maxLeft - height[left++]);
    } else {
      height[right] > maxRight
        ? (maxRight = height[right--])
        : (count += maxRight - height[right--]);
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
