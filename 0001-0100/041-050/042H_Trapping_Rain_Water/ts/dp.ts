// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/
var trap = function (height: number[]): number {
  let count = 0;
  const N = height.length;
  const leftHeight: number[] = [];
  const rightHeight: number[] = [];

  leftHeight[0] = height[0];
  for (let i = 1; i < N; i++) {
    leftHeight[i] = Math.max(height[i], leftHeight[i - 1]);
  }

  rightHeight[N - 1] = height[N - 1];
  for (let i = N - 2; i >= 0; i--) {
    rightHeight[i] = Math.max(height[i], rightHeight[i + 1]);
  }

  for (let i = 1; i < N - 1; i++) {
    count += Math.min(leftHeight[i], rightHeight[i]) - height[i];
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
