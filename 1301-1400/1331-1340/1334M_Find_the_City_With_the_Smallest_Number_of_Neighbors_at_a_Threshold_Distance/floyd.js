// 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
// https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/
// Floyd Warshall's Algorithm
// T.C: O(V^3)
// S.C: O(V^2)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const matrix = Array.from({ length: n }, () => new Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    matrix[i][i] = 0;
  }
  for (const [u, v, w] of edges) {
    matrix[u][v] = w;
    matrix[v][u] = w;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.min(matrix[i][j], matrix[i][k] + matrix[k][j]);
      }
    }
  }

  let result = 0;
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (let j = 0; j < n; j++) {
      if (i !== j && matrix[i][j] <= distanceThreshold) {
        count++;
      }
    }
    if (count <= min) {
      min = count;
      result = i;
    }
  }

  return result;
};

var n = 4,
  edges = [
    [0, 1, 3],
    [1, 2, 1],
    [1, 3, 4],
    [2, 3, 1],
  ],
  distanceThreshold = 4;
var expected = 3;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);

var n = 5,
  edges = [
    [0, 1, 2],
    [0, 4, 8],
    [1, 2, 3],
    [1, 4, 2],
    [2, 3, 1],
    [3, 4, 1],
  ],
  distanceThreshold = 2;
var expected = 0;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 3, 7],
    [2, 4, 1],
    [0, 1, 5],
    [2, 3, 10],
    [1, 3, 6],
    [1, 2, 1],
  ],
  distanceThreshold = 417;
var expected = 5;
var result = findTheCity(n, edges, distanceThreshold);
console.log(result, result === expected);
