// 851. Loud and Rich
// https://leetcode.com/problems/loud-and-rich/description/
// T.C.: O(n^2)
// S.C.: O(n^2)
/**
 * @param {number[][]} richer
 * @param {number[]} quiet
 * @return {number[]}
 */
var loudAndRich = function (richer, quiet) {
  const graph = new Map();
  for (const [a, b] of richer) {
    if (!graph.has(b)) {
      graph.set(b, []);
    }
    graph.get(b).push(a);
  }
  const result = new Array(quiet.length).fill(-1);
  for (let i = 0; i < result.length; i++) {
    if (result[i] === -1) {
      dfs(i);
    }
  }
  return result;

  function dfs(node) {
    if (result[node] !== -1) return result[node];

    result[node] = node;
    for (const child of graph.get(node) ?? []) {
      const candidate = dfs(child);
      if (quiet[candidate] < quiet[result[node]]) {
        result[node] = candidate;
      }
    }
    return result[node];
  }
};

var richer = [
    [1, 0],
    [2, 1],
    [3, 1],
    [3, 7],
    [4, 3],
    [5, 3],
    [6, 3],
  ],
  quiet = [3, 2, 5, 4, 6, 1, 7, 0];
var expected = [5, 5, 2, 5, 4, 5, 6, 7];
var result = loudAndRich(richer, quiet);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));

var richer = [],
  quiet = [0];
var expected = [0];
var result = loudAndRich(richer, quiet);
console.log(result, JSON.stringify(result) === JSON.stringify(expected));
