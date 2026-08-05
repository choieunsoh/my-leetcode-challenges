// 3310. Remove Methods From Project
// https://leetcode.com/problems/remove-methods-from-project/description/
// T.C.: O(n + m)
// S.C.: O(n + m)
const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number} n
 * @param {number} k
 * @param {number[][]} invocations
 * @return {number[]}
 */
var remainingMethods = function (n, k, invocations) {
  const edges = Array.from({ length: n }, () => []);
  const inDegree = new Array(n).fill(0);

  for (const [u, v] of invocations) {
    edges[u].push(v);
    inDegree[v]++;
  }

  const queue = new Queue([k]);
  const suspicious = new Uint8Array(n);
  suspicious[k] = 1;

  while (!queue.isEmpty()) {
    const u = queue.pop();
    for (let i = 0; i < edges[u].length; i++) {
      const v = edges[u][i];
      inDegree[v]--;

      if (suspicious[v] === 0) {
        queue.push(v);
        suspicious[v] = 1;
      }
    }
  }

  let canRemoveAll = true;
  const remaining = [];

  for (let i = 0; i < n; i++) {
    if (suspicious[i] === 1 && inDegree[i] > 0) {
      canRemoveAll = false;
      break;
    } else if (suspicious[i] === 0) {
      remaining.push(i);
    }
  }

  if (!canRemoveAll) {
    return Array.from({ length: n }, (_, i) => i);
  }

  return remaining;
};

var n = 4,
  k = 1,
  invocations = [
    [1, 2],
    [0, 1],
    [3, 2],
  ];
var expected = [0, 1, 2, 3];
var result = remainingMethods(n, k, invocations);
console.log(result, result.toString() === expected.toString());

var n = 5,
  k = 0,
  invocations = [
    [1, 2],
    [0, 2],
    [0, 1],
    [3, 4],
  ];
var expected = [3, 4];
var result = remainingMethods(n, k, invocations);
console.log(result, result.toString() === expected.toString());

var n = 3,
  k = 2,
  invocations = [
    [1, 2],
    [0, 1],
    [2, 0],
  ];
var expected = [];
var result = remainingMethods(n, k, invocations);
console.log(result, result.toString() === expected.toString());
