// 3620. Network Recovery Pathways
// https://leetcode.com/problems/network-recovery-pathways/description/
// T.C.: O((E+V) log U)
// S.C.: O(E+V)
/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function (edges, online, k) {
  const n = online.length;
  const g = Array.from({ length: n }, () => []);
  const deg = new Array(n).fill(0);
  let l = Infinity,
    r = 0;

  for (const [u, v, w] of edges) {
    if (!online[u] || !online[v]) {
      continue;
    }
    g[u].push([v, w]);
    deg[v]++;
    l = Math.min(l, w);
    r = Math.max(r, w);
  }

  // Delete unreachable nodes
  const q = [];
  for (let i = 1; i < n; i++) {
    if (deg[i] === 0) {
      q.push(i);
    }
  }
  while (q.length > 0) {
    const u = q.shift();
    for (const [v] of g[u]) {
      if (--deg[v] === 0 && v !== 0) {
        q.push(v);
      }
    }
  }

  const check = (mid) => {
    const dp = new Array(n).fill(Infinity);
    const cdeg = [...deg];
    dp[0] = 0;

    const q = [0];
    while (q.length > 0) {
      const u = q.shift();
      if (u === n - 1) {
        return dp[u] <= k;
      }

      for (const [v, w] of g[u]) {
        if (w >= mid) {
          dp[v] = Math.min(dp[v], dp[u] + w);
        }
        if (--cdeg[v] === 0) {
          q.push(v);
        }
      }
    }
    return false;
  };

  if (!check(l)) {
    return -1;
  }

  while (l <= r) {
    const mid = (l + r) >> 1;
    if (check(mid)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return r;
};

var edges = [
    [0, 1, 5],
    [1, 3, 10],
    [0, 2, 3],
    [2, 3, 4],
  ],
  online = [true, true, true, true],
  k = 10;
var expected = 3;
var result = findMaxPathScore(edges, online, k);
console.log(result, result === expected);

var edges = [
    [0, 1, 7],
    [1, 4, 5],
    [0, 2, 6],
    [2, 3, 6],
    [3, 4, 2],
    [2, 4, 6],
  ],
  online = [true, true, true, false, true],
  k = 12;
var expected = 6;
var result = findMaxPathScore(edges, online, k);
console.log(result, result === expected);
