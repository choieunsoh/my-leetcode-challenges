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
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  let sum = 0;
  for (const x of nums) {
    sum ^= x;
  }

  let result = Number.MAX_SAFE_INTEGER;
  dfs(0, -1);
  return result;

  function dfs(node, parent) {
    let value = nums[node];
    for (const child of graph[node]) {
      if (child === parent) {
        continue;
      }
      value ^= dfs(child, node);
    }

    for (const child of graph[node]) {
      if (child === parent) {
        dfs2(child, node, value, node);
      }
    }
    return value;
  }

  function dfs2(node, parent, other, ancestor) {
    let value = nums[node];
    for (const child of graph[node]) {
      if (child === parent) {
        continue;
      }
      value ^= dfs2(child, node, other, ancestor);
    }

    if (parent === ancestor) {
      return value;
    }

    result = Math.min(result, calc(other, value, sum ^ other ^ value));
    return value;
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
