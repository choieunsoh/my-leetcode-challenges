// 2242. Maximum Score of a Node Sequence
// https://leetcode.com/problems/maximum-score-of-a-node-sequence/description/
// T.C.: O(E)
// S.C.: O(N)
/**
 * @param {number[]} scores
 * @param {number[][]} edges
 * @return {number}
 */
var maximumScore = function (scores, edges) {
  const n = scores.length;
  scores.push(0);
  const bestNeighbors = Array.from({ length: n }, () => new Array(3).fill(n));
  for (const [u, v] of edges) {
    addNeighbor(u, v);
    addNeighbor(v, u);
  }

  let result = -1;
  for (const [b, c] of edges) {
    for (const a of bestNeighbors[b]) {
      if (a === c || a === n) continue;

      for (const d of bestNeighbors[c]) {
        if (d === b || d === a || d === n) continue;
        result = Math.max(result, scores[a] + scores[b] + scores[c] + scores[d]);
      }
    }
  }
  return result;

  function addNeighbor(target, newNeighbor) {
    const neighbors = bestNeighbors[target];
    if (scores[newNeighbor] > scores[neighbors[0]]) {
      neighbors[2] = neighbors[1];
      neighbors[1] = neighbors[0];
      neighbors[0] = newNeighbor;
    } else if (scores[newNeighbor] > scores[neighbors[1]]) {
      neighbors[2] = neighbors[1];
      neighbors[1] = newNeighbor;
    } else if (scores[newNeighbor] > scores[neighbors[2]]) {
      neighbors[2] = newNeighbor;
    }
  }
};

var scores = [5, 2, 9, 8, 4],
  edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 2],
    [1, 3],
    [2, 4],
  ];
var expected = 24;
var result = maximumScore(scores, edges);
console.log(result, result === expected);

var scores = [9, 20, 6, 4, 11, 12],
  edges = [
    [0, 3],
    [5, 3],
    [2, 4],
    [1, 3],
  ];
var expected = -1;
var result = maximumScore(scores, edges);
console.log(result, result === expected);
