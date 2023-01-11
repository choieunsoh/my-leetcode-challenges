// 1443. Minimum Time to Collect All Apples in a Tree
// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  if (n === 1) return 0;

  const graph = new Map();
  for (const [a, b] of edges) {
    let vertices = graph.get(a) ?? [];
    vertices.push(b);
    graph.set(a, vertices);

    vertices = graph.get(b) ?? [];
    vertices.push(a);
    graph.set(b, vertices);
  }

  function dfs(node, parent) {
    if (!graph.has(node)) return 0;

    let total = 0;
    const children = graph.get(node);
    for (const child of children) {
      if (child === parent) continue;
      const count = dfs(child, node);
      if (count > 0 || hasApple[child]) {
        total += count + 2;
      }
    }

    return total;
  }

  return dfs(0, -1);
};

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, true, true, false];
var expected = 8;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, true, false, false, true, false];
var expected = 6;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);

var n = 7,
  edges = [
    [0, 1],
    [0, 2],
    [1, 4],
    [1, 5],
    [2, 3],
    [2, 6],
  ],
  hasApple = [false, false, false, false, false, false, false];
var expected = 0;
var result = minTime(n, edges, hasApple);
console.log(result, result === expected);
