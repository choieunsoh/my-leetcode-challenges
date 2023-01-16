// 2538. Difference Between Maximum and Minimum Price Sum
// https://leetcode.com/problems/difference-between-maximum-and-minimum-price-sum/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @return {number}
 */
var maxOutput = function (n, edges, price) {
  const tree = [];
  const memo = [];
  for (let i = 0; i < n; i++) tree[i] = [];
  for (const [a, b] of edges) {
    tree[a].push(b);
    tree[b].push(a);
  }

  let result = 0;
  dfs(0, -1);

  function dfs(node, parent) {
    const max = [price[node], 0];
    const nodes = tree[node] ?? [];
    for (const child of nodes) {
      if (child === parent) continue;
      const sub = dfs(child, node);
      result = Math.max(result, max[0] + sub[1]);
      result = Math.max(result, max[1] + sub[0]);
      max[0] = Math.max(max[0], sub[0] + price[node]);
      max[1] = Math.max(max[1], sub[1] + price[node]);
    }
    return max;
  }

  return result;
};

var n = 6,
  edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5],
  ],
  price = [9, 8, 7, 6, 10, 5];
var expected = 24;
var result = maxOutput(n, edges, price);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
  ],
  price = [1, 1, 1];
var expected = 2;
var result = maxOutput(n, edges, price);
console.log(result, result === expected);

var n = 4,
  edges = [
    [2, 0],
    [0, 1],
    [1, 3],
  ],
  price = [2, 3, 1, 1];
var expected = 6;
var result = maxOutput(n, edges, price);
console.log(result, result === expected);
