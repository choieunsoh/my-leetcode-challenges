// 2943. Maximize Area of Square Hole in Grid
// https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/description/
// T.C.: O(m log m + n log n)
// S.C.: O(m + n)
/**
 * @param {number} n
 * @param {number} m
 * @param {number[]} hBars
 * @param {number[]} vBars
 * @return {number}
 */
var maximizeSquareHoleArea = function (n, m, hBars, vBars) {
  hBars.sort((a, b) => a - b);
  vBars.sort((a, b) => a - b);

  let maxHBar = 1;
  let maxVBar = 1;
  let count = 1;
  for (let i = 1; i < hBars.length; i++) {
    if (hBars[i - 1] + 1 === hBars[i]) {
      count++;
    } else {
      count = 1;
    }
    maxHBar = Math.max(maxHBar, count);
  }

  count = 1;
  for (let i = 1; i < vBars.length; i++) {
    if (vBars[i - 1] + 1 === vBars[i]) {
      count++;
    } else {
      count = 1;
    }
    maxVBar = Math.max(maxVBar, count);
  }

  const minBars = 1 + Math.min(maxHBar, maxVBar);
  const maxSquareArea = minBars ** 2;
  return maxSquareArea;
};

var n = 2,
  m = 1,
  hBars = [2, 3],
  vBars = [2];
var expected = 4;
var result = maximizeSquareHoleArea(n, m, hBars, vBars);
console.log(result, result === expected);

var n = 1,
  m = 1,
  hBars = [2],
  vBars = [2];
var expected = 4;
var result = maximizeSquareHoleArea(n, m, hBars, vBars);
console.log(result, result === expected);

var n = 2,
  m = 3,
  hBars = [2, 3],
  vBars = [2, 4];
var expected = 4;
var result = maximizeSquareHoleArea(n, m, hBars, vBars);
console.log(result, result === expected);

var n = 2,
  m = 4,
  hBars = [3, 2],
  vBars = [4, 2];
var expected = 4;
var result = maximizeSquareHoleArea(n, m, hBars, vBars);
console.log(result, result === expected);
