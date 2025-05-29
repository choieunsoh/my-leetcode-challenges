// 3373. Maximize the Number of Target Nodes After Connecting Trees II
// https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-ii/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const color1 = new Array(n).fill(0);
  const color2 = new Array(m).fill(0);
  const count1 = build(edges1, color1);
  const count2 = build(edges2, color2);
  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    res[i] = count1[color1[i]] + Math.max(count2[0], count2[1]);
  }
  return res;

  function dfs(node, parent, depth, children, color) {
    let res = 1 - (depth % 2);
    color[node] = depth % 2;
    for (let child of children[node]) {
      if (child === parent) {
        continue;
      }
      res += dfs(child, node, depth + 1, children, color);
    }
    return res;
  }

  function build(edges, color) {
    const n = edges.length + 1;
    const children = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
      children[u].push(v);
      children[v].push(u);
    }
    const res = dfs(0, -1, 0, children, color);
    return [res, n - res];
  }
};

var edges1 = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 7],
    [1, 4],
    [4, 5],
    [4, 6],
  ];
var expected = [8, 7, 7, 8, 8];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  edges2 = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];
var expected = [3, 6, 6, 6, 6];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());
