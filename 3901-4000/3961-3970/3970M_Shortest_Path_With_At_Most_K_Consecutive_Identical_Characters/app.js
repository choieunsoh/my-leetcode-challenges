// 3970. Shortest Path With At Most K Consecutive Identical Characters
// https://leetcode.com/problems/shortest-path-with-at-most-k-consecutive-identical-characters/description/
// T.C.: O(nk + mk log mk)
// S.C.: O(nk + mk)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function (n, edges, labels, k) {
  const g = Array.from({ length: n }, () => []);
  for (const [x, y, w] of edges) {
    g[x].push([y, w]);
  }

  const dis = Array.from({ length: n }, () => Array(k + 1).fill(Infinity));
  // {shortest path length, node index, number of consecutive identical letters at the end}
  const pq = new MinHeap();

  dis[0][1] = 0;
  pq.push([0, 0, 1]);

  while (pq.data.length > 0) {
    const [d, x, cnt] = pq.pop();

    if (d > dis[x][cnt]) {
      continue;
    }
    if (x === n - 1) {
      return d;
    }

    for (const [y, w] of g[x]) {
      const newCnt = labels[x] === labels[y] ? cnt + 1 : 1;
      if (newCnt > k) {
        continue;
      }

      const nd = d + w;
      if (nd < dis[y][newCnt]) {
        dis[y][newCnt] = nd;
        pq.push([nd, y, newCnt]);
      }
    }
  }

  return -1;
};

class MinHeap {
  constructor() {
    this.data = [];
  }

  push(s) {
    const a = this.data;
    let i = a.length;
    a.push(s);
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (a[p][0] <= s[0]) {
        break;
      }
      a[i] = a[p];
      i = p;
    }
    a[i] = s;
  }

  pop() {
    const a = this.data;
    const res = a[0];
    const last = a.pop();
    if (a.length === 0) {
      return res;
    }
    let i = 0;
    while (i * 2 + 1 < a.length) {
      let j = i * 2 + 1;
      if (j + 1 < a.length && a[j + 1][0] < a[j][0]) {
        j++;
      }
      if (last[0] <= a[j][0]) {
        break;
      }
      a[i] = a[j];
      i = j;
    }
    a[i] = last;
    return res;
  }
}

var n = 3,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
    [0, 2, 3],
  ],
  labels = 'aab',
  k = 1;
var expected = 3;
var result = shortestPath(n, edges, labels, k);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
    [0, 2, 3],
  ],
  labels = 'aab',
  k = 2;
var expected = 2;
var result = shortestPath(n, edges, labels, k);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1, 1],
    [1, 2, 1],
  ],
  labels = 'aaa',
  k = 2;
var expected = -1;
var result = shortestPath(n, edges, labels, k);
console.log(result, result === expected);
