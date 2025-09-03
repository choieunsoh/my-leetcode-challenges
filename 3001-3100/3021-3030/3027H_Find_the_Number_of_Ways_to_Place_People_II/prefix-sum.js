// 3027. Find the Number of Ways to Place People II
// https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  const col = new Map();
  const row = new Map();
  const coordinatesMap = new Map();

  for (const [x, y] of points) {
    col.set(x, 0);
    row.set(y, 0);
  }

  mapKeysToOrder(col);
  mapKeysToOrder(row);

  const nc = col.size + 1;
  const nr = row.size + 1;
  const m = Array.from({ length: nc }, () => new Array(nr).fill(0));
  for (const point of points) {
    const [c, r] = [col.get(point[0]), row.get(point[1])];
    coordinatesMap.set(point, [c, r]);
    m[c][r] = 1;
  }

  const prefixSum = Array.from({ length: nc }, () => new Array(nr).fill(0));
  for (let i = 1; i < nc; i++) {
    for (let j = 1; j < nr; j++) {
      prefixSum[i][j] = prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1] + m[i][j];
    }
  }

  points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

  let count = 0;
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i][1] >= points[j][1]) {
        const [c1, r1] = coordinatesMap.get(points[i]);
        const [c2, r2] = coordinatesMap.get(points[j]);

        const cnt = prefixSum[c2][r1] - prefixSum[c1 - 1][r1] - prefixSum[c2][r2 - 1] + prefixSum[c1 - 1][r2 - 1];

        if (cnt === 2) count++;
      }
    }
  }

  return count;

  function mapKeysToOrder(m) {
    const sortedKeys = Array.from(m.keys()).sort((a, b) => a - b);
    sortedKeys.forEach((key, index) => {
      m.set(key, index + 1);
    });
  }
};

var points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
var expected = 0;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [6, 2],
  [4, 4],
  [2, 6],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [3, 1],
  [1, 3],
  [1, 1],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);

var points = [
  [0, 1],
  [1, 3],
  [6, 1],
];
var expected = 2;
var result = numberOfPairs(points);
console.log(result, result === expected);
