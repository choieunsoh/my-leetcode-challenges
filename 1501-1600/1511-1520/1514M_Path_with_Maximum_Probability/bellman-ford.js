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
      if (!hasUpdate) {
        break;
      }
    }
  }

  console.log(maxProb);
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
