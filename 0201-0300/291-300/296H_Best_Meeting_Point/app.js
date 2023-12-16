// 296. Best Meeting Point
// https://leetcode.com/problems/best-meeting-point/description/
// T.C.: O(m * n)
// S.C.: O(m + n)
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minTotalDistance = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const rowPoints = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        rowPoints.push(i);
      }
    }
  }

  const colPoints = [];
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 1) {
        colPoints.push(j);
      }
    }
  }

  let result = getDistance(rowPoints);
  result += getDistance(colPoints);
  return result;

  function getDistance(points) {
    let distance = 0;
    let left = 0;
    let right = points.length - 1;
    while (left < right) {
      distance += points[right--] - points[left++];
    }
    return distance;
  }
};

var grid = [
  [1, 0, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
var expected = 6;
var result = minTotalDistance(grid);
console.log(result, result === expected);

var grid = [[1, 1]];
var expected = 1;
var result = minTotalDistance(grid);
console.log(result, result === expected);
