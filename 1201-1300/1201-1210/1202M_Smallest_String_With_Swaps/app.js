// 1202. Smallest String With Swaps
// https://leetcode.com/problems/smallest-string-with-swaps/
/**
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function (s, pairs) {
  const n = s.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0);

  for (const [x, y] of pairs) {
    union(x, y);
  }
  for (let i = 0; i < n; i++) {
    parent[i] = find(parent[i]);
  }

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const list = map.get(parent[i]) ?? [];
    list.push(s.charAt(i));
    map.set(parent[i], list);
  }
  for (const [ch, list] of map) {
    list.sort((a, b) => (a > b ? -1 : 1));
    map.set(ch, list);
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    result += map.get(parent[i]).pop();
  }
  return result;

  function find(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    const x = find(a);
    const y = find(b);
    if (x === y) return;
    if (rank[x] > rank[y]) {
      parent[y] = x;
    } else if (rank[y] > rank[x]) {
      parent[x] = y;
    } else {
      parent[y] = x;
      rank[x]++;
    }
  }
};

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
  ];
var expected = 'bacd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'dcab',
  pairs = [
    [0, 3],
    [1, 2],
    [0, 2],
  ];
var expected = 'abcd';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);

var s = 'cba',
  pairs = [
    [0, 1],
    [1, 2],
  ];
var expected = 'abc';
var result = smallestStringWithSwaps(s, pairs);
console.log(result, result === expected);
