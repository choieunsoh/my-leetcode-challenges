// 3331. Find Subtree Sizes After Changes
// https://leetcode.com/problems/find-subtree-sizes-after-changes/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number[]}
 */
var findSubtreeSizes = function (parent, s) {
  const n = parent.length;
  const adj = Array.from({ length: n }, () => []);
  const tree = Array.from({ length: n }, () => []);
  const result = Array(n).fill(0);
  const last = Array(26).fill(-1);

  for (let i = 1; i < n; i++) {
    adj[parent[i]].push(i);
  }

  dfs(0);

  for (let i = 1; i < n; i++) {
    tree[parent[i]].push(i);
  }

  calc(0);

  return result;

  function dfs(u) {
    const c = s.charCodeAt(u) - 97;
    const old = last[c];

    if (u && old !== -1) {
      parent[u] = old;
    }
    last[c] = u;

    for (const v of adj[u]) {
      dfs(v);
    }

    last[c] = old;
  }

  function calc(u) {
    result[u] = 1;
    for (const v of tree[u]) {
      result[u] += calc(v);
    }
    return result[u];
  }
};

var parent = [-1, 0, 0, 1, 1, 1],
  s = 'abaabc';
var expected = [6, 3, 1, 1, 1, 1];
var result = findSubtreeSizes(parent, s);
console.log(result, result.toString() === expected.toString());

var parent = [-1, 0, 4, 0, 1],
  s = 'abbba';
var expected = [5, 2, 1, 1, 1];
var result = findSubtreeSizes(parent, s);
console.log(result, result.toString() === expected.toString());
