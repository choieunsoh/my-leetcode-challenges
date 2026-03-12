// 3600. Maximize Spanning Tree Stability with Upgrades
// https://leetcode.com/problems/maximize-spanning-tree-stability-with-upgrades/description/
// T.C.: O(m \log m+(n+m⋅α(n))⋅\log v)
// S.C.: O(m + n)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} k
 * @return {number}
 */
var maxStability = function (n, edges, k) {
  const MAX_STABILITY = 2e5;
  let result = -1;

  if (edges.length < n - 1) {
    return -1;
  }

  const mustEdges = edges.filter(([, , , must]) => must === 1);
  const optionalEdges = edges.filter(([, , , must]) => must !== 1);

  if (mustEdges.length > n - 1) {
    return -1;
  }
  optionalEdges.sort((a, b) => b[2] - a[2]);

  let selectedInit = 0;
  let mustMinStability = MAX_STABILITY;
  const dsuInit = new DSU(Array.from({ length: n }, (_, i) => i));

  for (const [u, v, s] of mustEdges) {
    if (dsuInit.find(u) === dsuInit.find(v) || selectedInit === n - 1) {
      return -1;
    }

    dsuInit.join(u, v);
    selectedInit++;
    mustMinStability = Math.min(mustMinStability, s);
  }

  let left = 0;
  let right = mustMinStability;

  while (left < right) {
    const mid = left + ((right - left + 1) >>> 1);

    const dsu = new DSU(dsuInit.parent.slice());

    let selected = selectedInit;
    let doubledCount = 0;

    for (const [u, v, s] of optionalEdges) {
      if (dsu.find(u) === dsu.find(v)) {
        continue;
      }

      if (s >= mid) {
        dsu.join(u, v);
        selected++;
      } else if (doubledCount < k && s * 2 >= mid) {
        doubledCount++;
        dsu.join(u, v);
        selected++;
      } else {
        break;
      }

      if (selected === n - 1) {
        break;
      }
    }

    if (selected !== n - 1) {
      right = mid - 1;
    } else {
      result = left = mid;
    }
  }

  return result;
};

class DSU {
  constructor(parent) {
    this.parent = parent;
  }

  find(x) {
    return this.parent[x] === x ? x : (this.parent[x] = this.find(this.parent[x]));
  }

  join(x, y) {
    const px = this.find(x);
    const py = this.find(y);
    this.parent[px] = py;
  }
}

var n = 3,
  edges = [
    [0, 1, 2, 1],
    [1, 2, 3, 0],
  ],
  k = 1;
var expected = 2;
var result = maxStability(n, edges, k);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1, 4, 0],
    [1, 2, 3, 0],
    [0, 2, 1, 0],
  ],
  k = 2;
var expected = 6;
var result = maxStability(n, edges, k);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1, 1, 1],
    [1, 2, 1, 1],
    [2, 0, 1, 1],
  ],
  k = 0;
var expected = -1;
var result = maxStability(n, edges, k);
console.log(result, result === expected);
