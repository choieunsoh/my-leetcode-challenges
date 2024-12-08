// 3380. Maximum Area Rectangle With Point Constraints I
// https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/description/
// T.C.: O(n^3)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxRectangleArea = function (points) {
  const pointSet = new Set(points.map(([x, y]) => `${x},${y}`));
  let maxArea = -1;

  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [x1, y1] = points[i];
      const [x2, y2] = points[j];
      if (x1 === x2 || y1 === y2) continue;

      const corner1 = `${x1},${y2}`;
      const corner2 = `${x2},${y1}`;
      if (!pointSet.has(corner1) || !pointSet.has(corner2)) continue;

      let hasInnerPoints = false;
      const minX = Math.min(x1, x2);
      const maxX = Math.max(x1, x2);
      const minY = Math.min(y1, y2);
      const maxY = Math.max(y1, y2);

      for (const [x, y] of points) {
        if (x === x1 && y === y1) continue; // point-1
        if (x === x2 && y === y2) continue; // point-2
        if (x === x1 && y === y2) continue; // corner-1
        if (x === x2 && y === y1) continue; // corner-2

        if (x >= minX && x <= maxX && y >= minY && y <= maxY) {
          hasInnerPoints = true;
          break;
        }
      }

      if (hasInnerPoints) continue;

      const area = Math.abs(x2 - x1) * Math.abs(y2 - y1);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
];
var expected = 4;
var result = maxRectangleArea(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [2, 2],
];
var expected = -1;
var result = maxRectangleArea(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [1, 3],
  [3, 1],
  [3, 3],
  [1, 2],
  [3, 2],
];
var expected = 2;
var result = maxRectangleArea(points);
console.log(result, result === expected);
