// 149. Max Points on a Line
// https://leetcode.com/problems/max-points-on-a-line/description/
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  let max = 2;
  const N = points.length;
  if (N === 2) return max;

  for (let i = 0; i < N; i++) {
    const map = new Map();
    for (let j = i + 1; j < N; j++) {
      const key = equation(points[i], points[j]);
      const count = map.get(key) ?? 1;
      map.set(key, count + 1);
    }
    max = Math.max(max, ...map.values());
  }

  function equation(p1, p2) {
    // y = a*x + b
    const [x1, y1] = p1;
    const [x2, y2] = p2;
    if (x1 === x2) return `${x1}`;
    const a = (y2 - y1) / (x2 - x1);
    const b = y1 - a * x1;
    return `${a}-${b}`;
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
