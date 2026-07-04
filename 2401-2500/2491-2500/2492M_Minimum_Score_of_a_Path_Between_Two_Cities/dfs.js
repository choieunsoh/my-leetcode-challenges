// 2492. Minimum Score of a Path Between Two Cities
// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
// T.C.: O(n + m)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const adj = new Map();
  let answer = Number.MAX_SAFE_INTEGER;

  for (const [u, v, w] of roads) {
    if (!adj.has(u)) {
      adj.set(u, []);
    }
    if (!adj.has(v)) {
      adj.set(v, []);
    }

    adj.get(u).push([v, w]);
    adj.get(v).push([u, w]);
  }

  const visited = new Array(n + 1).fill(false);

  const dfs = (node) => {
    visited[node] = true;

    if (!adj.has(node)) {
      return;
    }

    for (const [nextNode, weight] of adj.get(node)) {
      answer = Math.min(answer, weight);

      if (!visited[nextNode]) {
        dfs(nextNode);
      }
    }
  };

  dfs(1);
  return answer;
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
