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

  const seen = new Set();
  const counter = Array(n).fill(0);
  let result = dfs1(0, -1);
  console.log(tree);
  console.log(counter);
  dfs2(0);

  function dfs1(node, parent) {
    let max = 0;
    const nodes = tree[node] ?? [];
    for (const child of nodes) {
      if (child === parent) continue;
      max = Math.max(max, price[child] + dfs1(child, node));
    }
    counter[node] = max;
    return max;
  }

  function dfs2(node) {
    let tmpX = counter[node];
    seen.add(node);
    const nodes = tree[node] ?? [];
    for (const neighbor of nodes) {
      if (seen.has(neighbor)) continue;

      let childCount = 0;
      for (const child of nodes) {
        if (child === neighbor) continue;
        childCount = Math.max(childCount, price[child] + counter[child]);
      }
      counter[node] = childCount;

      // child -> root
      let tmpY = counter[neighbor];
      counter[neighbor] = Math.max(price[node] + childCount, counter[neighbor]);
      result = Math.max(result, counter[neighbor]);

      seen.add(neighbor);
      dfs2(neighbor);
      counter[neighbor] = tmpY;
    }
    counter[node] = tmpX;
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
