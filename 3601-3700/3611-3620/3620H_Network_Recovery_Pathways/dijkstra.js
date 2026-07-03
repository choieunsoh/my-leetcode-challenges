// 3620. Network Recovery Pathways
// https://leetcode.com/problems/network-recovery-pathways/description/
// T.C.: O((E+V) log V log U)
// S.C.: O(E+V)
const { PriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} edges
 * @param {boolean[]} online
 * @param {number} k
 * @return {number}
 */
var findMaxPathScore = function (edges, online, k) {
  const n = online.length;
  const g = Array.from({ length: n }, () => []);
  let l = Infinity;
  let r = 0;

  for (const [u, v, w] of edges) {
    if (!online[u] || !online[v]) {
      continue;
    }
    g[u].push([v, w]);
    l = Math.min(l, w);
    r = Math.max(r, w);
  }

  const check = (mid) => {
    const dis = new Array(n).fill(Infinity);
    const pq = new PriorityQueue((a, b) => a[0] - b[0]);

    dis[0] = 0;
    pq.enqueue([0, 0]);

    while (!pq.isEmpty()) {
      const [d, u] = pq.dequeue();

      if (d > k) {
        return false;
      }
      if (u === n - 1) {
        return true;
      }
      if (d !== dis[u]) {
        continue;
      }

      for (const [v, w] of g[u]) {
        if (w < mid) {
          continue;
        }
        const nd = d + w;
        if (nd < dis[v]) {
          dis[v] = nd;
          pq.enqueue([nd, v]);
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
