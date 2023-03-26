// swapLexOrder
// LC: 1202. Smallest String With Swaps
// https://leetcode.com/problems/smallest-string-with-swaps/
/**
 * @param {string} str
 * @param {number[][]} pairs
 * @return {string}
 */
function swapLexOrder(str, pairs) {
  const n = str.length;
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array(n).fill(0);
  function find(x) {
    if (x !== parent[x]) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(x, y) {
    const rootX = find(x);
    const rootY = find(y);
    if (rootX === rootY) return;
    if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else if (rank[rootY] > rank[rootX]) {
      parent[rootX] = rootY;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
  }

  for (const [x, y] of pairs) {
    union(x - 1, y - 1);
  }

  for (let i = 0; i < n; i++) {
    parent[i] = find(parent[i]); // making sure that the connected components have a same parent in parent[i]
  }

  const map = new Map();
  for (let i = 0; i < n; i++) {
    const list = map.get(parent[i]) ?? [];
    list.push(str.charAt(i));
    map.set(parent[i], list);
  }

  for (const [p, list] of map) {
    list.sort((a, b) => (a < b ? -1 : 1));
    map.set(p, list);
  }

  let result = '';
  for (let i = 0; i < n; i++) {
    const ch = map.get(parent[i]).pop();
    result += ch;
  }
  return result;
}

var str = 'abdc',
  pairs = [
    [1, 4],
    [3, 4],
  ];
var expected = 'dbca';
var result = swapLexOrder(str, pairs);
console.log(result, result === expected);

var str = 'acxrabdz',
  pairs = [
    [1, 3],
    [6, 8],
    [3, 8],
    [2, 7],
  ];
var expected = 'zdxrabca';
var result = swapLexOrder(str, pairs);
console.log(result, result === expected);
