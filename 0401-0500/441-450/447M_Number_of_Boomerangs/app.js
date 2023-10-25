// 447. Number of Boomerangs
// https://leetcode.com/problems/number-of-boomerangs/
// T.C.: O(n ^ 2)
// S.C.: O(n)
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
  let result = 0;
  for (let i = 0; i < points.length; i++) {
    const map = new Map();
    for (let j = 0; j < points.length; j++) {
      if (i === j) continue;
      const distance = calcDistance(points[i], points[j]);
      const count = map.get(distance) ?? 0;
      result += count * 2;
      map.set(distance, count + 1);
    }
  }
  return result;

  function calcDistance(a, b) {
    return (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2;
  }
};

var points = [
  [0, 0],
  [1, 0],
  [2, 0],
];
var expected = 2;
var result = numberOfBoomerangs(points);
console.log(result, result === expected);

var points = [
  [1, 1],
  [2, 2],
  [3, 3],
];
var expected = 2;
var result = numberOfBoomerangs(points);
console.log(result, result === expected);

var points = [[1, 1]];
var expected = 0;
var result = numberOfBoomerangs(points);
console.log(result, result === expected);
