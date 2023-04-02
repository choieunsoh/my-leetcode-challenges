// 2612. Minimum Reverse Operations
// https://leetcode.com/problems/minimum-reverse-operations/
/**
 * @param {number} n
 * @param {number} p
 * @param {number[]} banned
 * @param {number} k
 * @return {number[]}
 */
var minReverseOperations = function (n, p, banned, k) {
  const distances = new Array(n).fill(Number.MAX_SAFE_INTEGER);
  for (const x of banned) {
    distances[x] = -1;
  }

  const nodes = [p],
    newNodes = [];
  distances[p] = 0;

  while (nodes.length > 0) {
    let iMin = Number.MAX_SAFE_INTEGER;
    let iMax = Number.MIN_SAFE_INTEGER;

    for (const node of nodes) {
      const base = node - k + 1;

      // j: segment start position
      // i: update position
      const j2i = (j) => base + (j - base) * 2;

      const update = (i) => {
        if (distances[i] === Number.MAX_SAFE_INTEGER) {
          distances[i] = distances[node] + 1;
          newNodes.push(i);
        }
      };

      // inclusive
      const lo = j2i(Math.max(0, base));
      const hi = j2i(Math.min(node + k, n) - k);
      for (let i = lo; i <= Math.min(hi, iMin - 2); i += 2) {
        update(i);
      }
      for (let i = Math.max(lo, iMax + 2); i <= hi; i += 2) {
        update(i);
      }
      iMin = Math.min(iMin, lo);
      iMax = Math.max(iMax, hi);
    }

    nodes.splice(0, nodes.length, ...newNodes);
    newNodes.length = 0;
  }

  for (let i = 0; i < n; i++) {
    if (distances[i] === Number.MAX_SAFE_INTEGER) {
      distances[i] = -1;
    }
  }
  return distances;
};

var n = 4,
  p = 0,
  banned = [1, 2],
  k = 4;
var expected = [0, -1, -1, 1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());

var n = 5,
  p = 0,
  banned = [2, 4],
  k = 3;
var expected = [0, -1, -1, -1, -1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());

var n = 4,
  p = 2,
  banned = [0, 1, 3],
  k = 1;
var expected = [-1, -1, 0, -1];
var result = minReverseOperations(n, p, banned, k);
console.log(result, result.join() === expected.join());
