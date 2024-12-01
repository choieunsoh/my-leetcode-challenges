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
  const m = edges2.length + 1;

  const adj1 = Array.from({ length: n }, () => []);
  const adj2 = Array.from({ length: m }, () => []);

  for (const [u, v] of edges1) {
    adj1[u].push(v);
    adj1[v].push(u);
  }
  for (const [u, v] of edges2) {
    adj2[u].push(v);
    adj2[v].push(u);
  }

  const good1 = new Array(n).fill(0);
  const good2 = new Array(m).fill(0);
  for (let i = 0; i < n; i++) {
    dfs(i, -1, 0, i, k + 1, good1, adj1);
  }

  for (let i = 0; i < m; i++) {
    dfs(i, -1, 0, i, k, good2, adj2);
  }

  const max = Math.max(...good2);
  return good1.map((value) => value + max);

  function dfs(node, parent, distance, root, k, good, adj) {
    if (distance >= k) return;
    good[root]++;
    for (const neighbor of adj[node]) {
      if (neighbor !== parent) {
        dfs(neighbor, node, distance + 1, root, k, good, adj);
      }
    }
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
