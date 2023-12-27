// 1578. Minimum Time to Make Rope Colorful
// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function (colors, neededTime) {
  const n = colors.length;
  let result = 0;
  let left = 0;
  let right = 0;
  while (left < n && right < n) {
    let currTotal = 0;
    let currMax = 0;
    while (right < n && colors.charAt(left) === colors.charAt(right)) {
      currTotal += neededTime[right];
      currMax = Math.max(currMax, neededTime[right]);
      right++;
    }
    result += currTotal - currMax;
    left = right;
  }
  return result;
};

var colors = 'abaac',
  neededTime = [1, 2, 3, 4, 5];
var expected = 3;
var result = minCost(colors, neededTime);
console.log(result, result === expected);

var colors = 'abc',
  neededTime = [1, 2, 3];
var expected = 0;
var result = minCost(colors, neededTime);
console.log(result, result === expected);

var colors = 'aabaa',
  neededTime = [1, 2, 3, 4, 1];
var expected = 2;
var result = minCost(colors, neededTime);
console.log(result, result === expected);

var colors = 'aabbbcc',
  neededTime = [6, 7, 1, 2, 3, 6, 5];
var expected = 14;
var result = minCost(colors, neededTime);
console.log(result, result === expected);
