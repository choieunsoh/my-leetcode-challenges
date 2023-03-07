// 149. Max Points on a Line
// https://leetcode.com/problems/max-points-on-a-line/description/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const n = points.length;
  if (n < 3) return n;

  let max = 2;
  for (let i = 0; i < n; i++) {
    const slopMap = new Map();
    const [x1, y1] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [x2, y2] = points[j];
      const slop = x1 === x2 ? Number.MAX_SAFE_INTEGER : (y2 - y1) / (x2 - x1);
      if (!slopMap.has(slop)) {
        slopMap.set(slop, 2);
      } else {
        const count = slopMap.get(slop) + 1;
        slopMap.set(slop, count);
        max = Math.max(max, count);
      }
    }
  }

  return max;
};

var points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
var expected = 3;
var result = maxPoints(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
];
var expected = 4;
var result = maxPoints(points);
console.log(result, result === expected);
