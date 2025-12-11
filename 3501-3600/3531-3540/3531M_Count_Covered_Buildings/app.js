// 3531. Count Covered Buildings
// https://leetcode.com/problems/count-covered-buildings/description/
// T.C.: O(m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  const minX = new Array(n + 1).fill(n + 1);
  const maxX = new Array(n + 1).fill(0);
  const minY = new Array(n + 1).fill(n + 1);
  const maxY = new Array(n + 1).fill(0);
  for (const [x, y] of buildings) {
    minX[y] = Math.min(minX[y], x);
    maxX[y] = Math.max(maxX[y], x);
    minY[x] = Math.min(minY[x], y);
    maxY[x] = Math.max(maxY[x], y);
  }

  let count = 0;
  for (const [x, y] of buildings) {
    if (x > minX[y] && x < maxX[y] && y > minY[x] && y < maxY[x]) {
      count++;
    }
  }
  return count;
};

var n = 3,
  buildings = [
    [1, 2],
    [3, 2],
    [2, 2],
    [2, 1],
    [2, 3],
  ];
var expected = 1;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);

var n = 3,
  buildings = [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ];
var expected = 0;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);

var n = 5,
  buildings = [
    [1, 3],
    [3, 2],
    [3, 3],
    [3, 5],
    [5, 3],
  ];
var expected = 1;
var result = countCoveredBuildings(n, buildings);
console.log(result, result === expected);
