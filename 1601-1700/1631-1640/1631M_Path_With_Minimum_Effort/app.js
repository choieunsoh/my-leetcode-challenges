// 1631. Path With Minimum Effort
// https://leetcode.com/problems/path-with-minimum-effort/
/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const dir = [1, 0, -1, 0, 1];

  let left = 0;
  let right = 1e6;
  let result = right;
  while (left <= right) {
    const mid = (left + right) >> 1;
    if (canReach(mid)) {
      result = Math.min(result, mid);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;

  function canReach(diff) {
    const visited = Array.from({ length: rows }, () => new Array(cols).fill(false));
    let q = [[0, 0]];
    visited[0][0] = true;
    while (q.length) {
      const qq = [];
      for (const [r, c] of q) {
        if (r === rows - 1 && c === cols - 1) return true;
        for (let d = 0; d < 4; d++) {
          const [nr, nc] = [r + dir[d], c + dir[d + 1]];
          if (nr < 0 || nr >= rows || nc < 0 || nc >= cols || visited[nr][nc]) continue;
          const currDiff = Math.abs(heights[r][c] - heights[nr][nc]);
          if (currDiff <= diff) {
            visited[nr][nc] = true;
            qq.push([nr, nc]);
          }
        }
      }
      q = qq;
    }
    return false;
  }
};

var heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];
var expected = 2;
var result = minimumEffortPath(heights);
heights.forEach((row) => console.log(row));
console.log(result, result === expected);

var heights = [
  [1, 2, 3],
  [3, 8, 4],
  [5, 3, 5],
];
var expected = 1;
var result = minimumEffortPath(heights);
heights.forEach((row) => console.log(row));
console.log(result, result === expected);

var heights = [
  [1, 2, 1, 1, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 2, 1, 2, 1],
  [1, 1, 1, 2, 1],
];
var expected = 0;
var result = minimumEffortPath(heights);
heights.forEach((row) => console.log(row));
console.log(result, result === expected);
