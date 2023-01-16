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
  for (let i = 0; i < n; i++) {
    if (tree[i].length === 1) {
      const max = dfs(-1, i);
      result = Math.max(result, max - price[i]);
    }
  }

  function dfs(parent, node) {
    const key = parent * 1e6 + node;
    if (memo[key]) return memo[key];

    let max = price[node];
    const nodes = tree[node] ?? [];
    for (const child of nodes) {
      if (child !== parent) {
        max = Math.max(max, price[node] + dfs(node, child));
      }
    }
    memo[key] = max;
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
