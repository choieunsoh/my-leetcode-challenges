// 2791. Count Paths That Can Form a Palindrome in a Tree
// https://leetcode.com/problems/count-paths-that-can-form-a-palindrome-in-a-tree/
/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var countPalindromePaths = function (parent, s) {
  const a = 'a'.charCodeAt(0);
  const n = parent.length;
  const map = new Map();
  const xr = new Array(n);
  const graph = Array.from({ length: n }, () => []);
  for (let i = 1; i < n; i++) {
    const u = parent[i];
    const v = i;
    graph[u].push([v, s[i]]);
  }

  dfs(0, 0);
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 26; j++) {
      const mask = xr[i] ^ (1 << j);
      result += map.get(mask) ?? 0;
    }
    result += (map.get(xr[i]) ?? 0) - 1;
  }
  return result / 2;

  function dfs(u, mask) {
    const count = map.get(mask) ?? 0;
    map.set(mask, count + 1);
    xr[u] = mask;

    for (const v of graph[u]) {
      const id = v[1].charCodeAt(0) - a;
      dfs(v[0], mask ^ (1 << id));
    }
  }
};

var parent = [-1, 0, 0, 1, 1, 2],
  s = 'acaabc';
var expected = 8;
var result = countPalindromePaths(parent, s);
console.log(result, result === expected);

var parent = [-1, 0, 0, 0, 0],
  s = 'aaaaa';
var expected = 10;
var result = countPalindromePaths(parent, s);
console.log(result, result === expected);
