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
    const [xi, yi] = points[i];
    for (let j = i + 1; j < N; j++) {
      const [xj, yj] = points[j];
      let count = 2;
      for (let k = j + 1; k < N; k++) {
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
