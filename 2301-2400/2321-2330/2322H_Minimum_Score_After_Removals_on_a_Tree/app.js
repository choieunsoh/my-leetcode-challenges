// 2322. Minimum Score After Removals on a Tree
// https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var minimumScore = function (nums, edges) {
  const n = nums.length;
  const adj = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    adj[u].push(v);
    adj[v].push(u);
  }

  const sum = new Array(n).fill(0);
  const in_ = new Array(n).fill(0);
  const out = new Array(n).fill(0);
  let count = 0;

  dfs(0, -1);

  let result = Number.MAX_SAFE_INTEGER;
  for (let u = 1; u < n; u++) {
    for (let v = u + 1; v < n; v++) {
      if (in_[v] > in_[u] && in_[v] < out[u]) {
        result = Math.min(result, calc(sum[0] ^ sum[u], sum[u] ^ sum[v], sum[v]));
      } else if (in_[u] > in_[v] && in_[u] < out[v]) {
        result = Math.min(result, calc(sum[0] ^ sum[v], sum[v] ^ sum[u], sum[u]));
      } else {
        result = Math.min(result, calc(sum[0] ^ sum[u] ^ sum[v], sum[u], sum[v]));
      }
    }
  }
  return result;

  function dfs(node, parent) {
    in_[node] = count++;
    sum[node] = nums[node];
    for (const child of adj[node]) {
      if (child === parent) continue;
      dfs(child, node);
      sum[node] ^= sum[child];
    }
    out[node] = count;
  }

  function calc(part1, part2, part3) {
    return Math.max(part1, part2, part3) - Math.min(part1, part2, part3);
  }
};

var nums = [1, 5, 5, 4, 11],
  edges = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
  ];
var expected = 9;
var result = minimumScore(nums, edges);
console.log(result, result === expected);

var nums = [5, 5, 2, 4, 4, 2],
  edges = [
    [0, 1],
    [1, 2],
    [5, 2],
    [4, 3],
    [1, 3],
  ];
var expected = 0;
var result = minimumScore(nums, edges);
console.log(result, result === expected);
