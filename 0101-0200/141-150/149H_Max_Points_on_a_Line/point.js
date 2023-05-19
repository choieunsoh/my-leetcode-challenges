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
    const [xi, yi] = points[i];
    for (let j = i + 1; j < n; j++) {
      const [xj, yj] = points[j];
      let count = 2;
      for (let k = j + 1; k < n; k++) {
        const [xk, yk] = points[k];
        const slopIJ = (yj - yi) * (xk - xi);
        const slopJK = (yk - yi) * (xj - xi);
        if (slopIJ === slopJK) count++;
      }
      if (count > max) max = count;
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

var points = [[0, 0]];
var expected = 1;
var result = maxPoints(points);
console.log(result, result === expected);
