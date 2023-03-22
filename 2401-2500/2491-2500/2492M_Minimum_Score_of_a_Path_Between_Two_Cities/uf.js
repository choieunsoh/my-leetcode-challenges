// 2492. Minimum Score of a Path Between Two Cities
// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const parents = Array.from({ length: n + 1 }, (_, i) => i);

  function find(x) {
    if (parents[x] !== x) {
      parents[x] = find(parents[x]);
    }
    return parents[x];
  }

  function union(x, y) {
    parents[find(y)] = find(x);
  }

  for (const [x, y] of roads) {
    union(x, y);
  }

  const goodGroup = find(parents[1]);
  let minDistance = Number.MAX_SAFE_INTEGER;
  for (const [x, , d] of roads) {
    if (find(x) === goodGroup) {
      minDistance = Math.min(minDistance, d);
    }
  }

  return minDistance;
};

var n = 4,
  roads = [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ];
var expected = 5;
var result = minScore(n, roads);
console.log(result, result === expected);

var n = 4,
  roads = [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ];
var expected = 2;
var result = minScore(n, roads);
console.log(result, result === expected);
