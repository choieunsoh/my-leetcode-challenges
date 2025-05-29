// 3372. Maximize the Number of Target Nodes After Connecting Trees I
// https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/description/
// T.C.: O(m+n)
// S.C.: O(m+n)
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2, k) {
  const n = edges1.length + 1;
  const count1 = build(edges1, k);
  const count2 = build(edges2, k - 1);
  const maxCount2 = Math.max(...count2);
  const res = Array(n);
  for (let i = 0; i < n; i++) {
    res[i] = count1[i] + maxCount2;
  }
  return res;

  function dfs(node, parent, children, k) {
    if (k < 0) {
      return 0;
    }
    let res = 1;
    for (const child of children[node]) {
      if (child === parent) {
        continue;
      }
      res += dfs(child, node, children, k - 1);
    }
    return res;
  }

  function build(edges, k) {
    const n = edges.length + 1;
    const children = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
      children[u].push(v);
      children[v].push(u);
    }
    const res = Array(n);
    for (let i = 0; i < n; i++) {
      res[i] = dfs(i, -1, children, k);
    }
    return res;
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
  ],
  k = 2;
var expected = [9, 7, 9, 8, 8];
var result = maxTargetNodes(edges1, edges2, k);
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
  ],
  k = 1;
var expected = [6, 3, 3, 3, 3];
var result = maxTargetNodes(edges1, edges2, k);
console.log(result, result.join() === expected.join());
