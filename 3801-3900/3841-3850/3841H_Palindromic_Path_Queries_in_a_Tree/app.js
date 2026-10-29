// 3841. Palindromic Path Queries in a Tree
// https://leetcode.com/problems/palindromic-path-queries-in-a-tree/description/
// T.C.: O((n + q) * log(n))
// S.C.: O(n log n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function (n, edges, s, queries) {
  const g = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    g[u].push(v);
    g[v].push(u);
  }

  const LOG = 32 - Math.clz32(n);
  const fa = Array.from({ length: n }, () => new Array(LOG).fill(0));
  const dep = new Array(n).fill(0);
  const l = new Array(n).fill(0);
  const r = new Array(n).fill(0);
  let timer = 0;

  dfs(0, 0);

  for (let j = 1; j < LOG; j++) {
    for (let i = 0; i < n; i++) {
      fa[i][j] = fa[fa[i][j - 1]][j - 1];
    }
  }

  const bit = new BIT(n + 1);
  const chars = s.split('');
  for (let i = 0; i < n; i++) {
    bit.updateRange(l[i], r[i], 1 << (chars[i].charCodeAt(0) - 97));
  }

  const result = [];
  for (const q of queries) {
    const parts = q.split(' ');
    if (parts[0] === 'update') {
      const u = parseInt(parts[1]);
      const c = parts[2];
      bit.updateRange(l[u], r[u], (1 << (chars[u].charCodeAt(0) - 97)) ^ (1 << (c.charCodeAt(0) - 97)));
      chars[u] = c;
    } else {
      const u = parseInt(parts[1]);
      const v = parseInt(parts[2]);
      const w = lca(u, v);
      const mask = bit.query(l[u]) ^ bit.query(l[v]) ^ (1 << (chars[w].charCodeAt(0) - 97));
      let cnt = 0,
        m = mask;
      while (m) {
        cnt += m & 1;
        m >>>= 1;
      }
      result.push(cnt <= 1);
    }
  }
  return result;

  function dfs(u, p) {
    l[u] = ++timer;
    fa[u][0] = p;
    for (const v of g[u]) {
      if (v === p) {
        continue;
      }
      dep[v] = dep[u] + 1;
      dfs(v, u);
    }
    r[u] = timer;
  }

  function lca(u, v) {
    if (dep[u] < dep[v]) [u, v] = [v, u];
    const diff = dep[u] - dep[v];
    for (let i = 0; i < LOG; i++) {
      if ((diff >> i) & 1) {
        u = fa[u][i];
      }
    }
    if (u === v) return u;
    for (let i = LOG - 1; i >= 0; i--) {
      if (fa[u][i] !== fa[v][i]) {
        u = fa[u][i];
        v = fa[v][i];
      }
    }
    return fa[u][0];
  }
};

class BIT {
  constructor(n) {
    this.n = n;
    this.tree = new Array(n + 1).fill(0);
  }

  static lowbit(x) {
    return x & -x;
  }

  update(x, v) {
    while (x <= this.n) {
      this.tree[x] ^= v;
      x += BIT.lowbit(x);
    }
  }

  query(x) {
    let ret = 0;
    while (x > 0) {
      ret ^= this.tree[x];
      x -= BIT.lowbit(x);
    }
    return ret;
  }

  updateRange(l, r, v) {
    this.update(l, v);
    this.update(r + 1, v);
  }
}

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
  ],
  s = 'aac',
  queries = ['query 0 2', 'update 1 b', 'query 0 2'];
var expected = [true, false];
var result = palindromePath(n, edges, s, queries);
console.log(result, result.toString() === expected.toString());

var n = 4,
  edges = [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  s = 'abca',
  queries = ['query 1 2', 'update 0 b', 'query 2 3', 'update 3 a', 'query 1 3'];
var expected = [false, false, true];
var result = palindromePath(n, edges, s, queries);
console.log(result, result.toString() === expected.toString());
