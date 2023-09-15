// 1584. Min Cost to Connect All Points
// https://leetcode.com/problems/min-cost-to-connect-all-points
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
  let cost = 0;
  let prev = 0;
  const n = points.length;
  const result = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  result[0] = 0;
  for (let j = 1; j < n; j++) {
    let minimum = Number.MAX_SAFE_INTEGER;
    let temp = -1;
    for (let i = 1; i < n; i++) {
      if (result[i] > 0) {
        result[i] = Math.min(
          result[i],
          Math.abs(points[i][0] - points[prev][0]) + Math.abs(points[i][1] - points[prev][1])
        );
        if (result[i] < minimum) {
          minimum = result[i];
          temp = i;
        }
      }
    }
    cost += minimum;
    result[temp] = 0;
    prev = temp;
  }
  return cost;
};

var points = [
  [0, 0],
  [2, 2],
  [3, 10],
  [5, 2],
  [7, 0],
];
var expected = 20;
var result = minCostConnectPoints(points);
console.log(result, result === expected);

var points = [
  [3, 12],
  [-2, 5],
  [-4, 1],
];
var expected = 18;
var result = minCostConnectPoints(points);
console.log(result, result === expected);
