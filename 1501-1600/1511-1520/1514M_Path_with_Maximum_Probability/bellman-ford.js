// 1514. Path with Maximum Probability
// https://leetcode.com/problems/path-with-maximum-probability/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const maxProb = new Array(n).fill(0);
  maxProb[start] = 1;

  for (let i = 0; i < n - 1; i++) {
    let hasUpdate = false;
    for (let j = 0; j < edges.length; j++) {
      const [u, v] = edges[j];
      const prob = succProb[j];
      if (maxProb[u] * prob > maxProb[v]) {
        maxProb[v] = maxProb[u] * prob;
        hasUpdate = true;
      }
      if (maxProb[v] * prob > maxProb[u]) {
        maxProb[u] = maxProb[v] * prob;
        hasUpdate = true;
      }
    }

    if (!hasUpdate) {
      break;
    }
  }

  return maxProb[end];
};

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.2],
  start = 0,
  end = 2;
var expected = 0.25;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.3],
  start = 0,
  end = 2;
var expected = 0.3;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);

var n = 3,
  edges = [[0, 1]],
  succProb = [0.5],
  start = 0,
  end = 2;
var expected = 0.0;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);

var n = 5,
  edges = [
    [2, 3],
    [1, 2],
    [3, 4],
    [1, 3],
    [1, 4],
    [0, 1],
    [2, 4],
    [0, 4],
    [0, 2],
  ],
  succProb = [0.06, 0.26, 0.49, 0.25, 0.2, 0.64, 0.23, 0.21, 0.77],
  start = 0,
  end = 3;
var expected = 0.16;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);
