// 2078. Two Furthest Houses With Different Colors
// https://leetcode.com/problems/two-furthest-houses-with-different-colors/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
  const n = colors.length;
  let left = 0;
  let right = n - 1;
  while (colors[0] === colors[right]) {
    right--;
  }
  while (colors[left] === colors[n - 1]) {
    left++;
  }
  return Math.max(right, n - 1 - left);
};

var colors = [1, 1, 1, 6, 1, 1, 1];
var expected = 3;
var result = maxDistance(colors);
console.log(result, result === expected);

var colors = [1, 8, 3, 8, 3];
var expected = 4;
var result = maxDistance(colors);
console.log(result, result === expected);

var colors = [0, 1];
var expected = 1;
var result = maxDistance(colors);
console.log(result, result === expected);
