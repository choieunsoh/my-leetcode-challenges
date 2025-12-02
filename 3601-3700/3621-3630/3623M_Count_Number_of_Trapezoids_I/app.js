// 3623. Count Number of Trapezoids I
// https://leetcode.com/problems/count-number-of-trapezoids-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var countTrapezoids = function (points) {
  const MOD = BigInt(1e9 + 7);
  const pointsMap = new Map();
  for (const [, y] of points) {
    pointsMap.set(y, (pointsMap.get(y) ?? 0) + 1);
  }

  let count = 0n;
  let sum = 0n;
  for (const [, yCount] of pointsMap) {
    const edges = (BigInt(yCount) * BigInt(yCount - 1)) / 2n;
    count = (count + edges * sum) % MOD;
    sum = (sum + edges) % MOD;
  }
  return Number(count);
};

var points = [
  [1, 0],
  [2, 0],
  [3, 0],
  [2, 2],
  [3, 2],
];
var expected = 3;
var result = countTrapezoids(points);
console.log(result, result === expected);

var points = [
  [0, 0],
  [1, 0],
  [0, 1],
  [2, 1],
];
var expected = 1;
var result = countTrapezoids(points);
console.log(result, result === expected);
