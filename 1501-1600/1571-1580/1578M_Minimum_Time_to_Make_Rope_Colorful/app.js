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
  let totalTime = 0;
  let currMaxTime = 0;
  for (let i = 0; i < n; i++) {
    if (i > 0 && colors.charAt(i) !== colors.charAt(i - 1)) {
      currMaxTime = 0;
    }
    totalTime += Math.min(currMaxTime, neededTime[i]);
    currMaxTime = Math.max(currMaxTime, neededTime[i]);
  }
  return totalTime;
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
