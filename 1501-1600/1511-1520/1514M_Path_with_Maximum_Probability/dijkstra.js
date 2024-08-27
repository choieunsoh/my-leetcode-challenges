// 1514. Path with Maximum Probability
// https://leetcode.com/problems/path-with-maximum-probability/
// T.C.: O(n*m log n)
// S.C.: O(n+m)
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start
 * @param {number} end
 * @return {number}
 */
var maxProbability = function (n, edges, succProb, start, end) {
  const adj = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    const [u, v] = edges[i];
    const prob = succProb[i];
    adj[u].push([v, prob]);
    adj[v].push([u, prob]);
  }

  const maxProb = new Array(n).fill(0);
  maxProb[start] = 1;

  const pq = new MaxPriorityQueue();
  pq.enqueue([1, start], 1);
  while (!pq.isEmpty()) {
    const [currProb, currNode] = pq.dequeue().element;

    if (currNode === end) {
      return currProb;
    }

    for (const [nextNode, pathProb] of adj[currNode]) {
      const nextProb = currProb * pathProb;
      if (nextProb > maxProb[nextNode]) {
        maxProb[nextNode] = nextProb;
        pq.enqueue([nextProb, nextNode], nextProb);
      }
    }
  }

  return 0;
};

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.2],
  start = 0,
  end = 2;
var expected = 0.25;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);

var n = 3,
  edges = [
    [0, 1],
    [1, 2],
    [0, 2],
  ],
  succProb = [0.5, 0.5, 0.3],
  start = 0,
  end = 2;
var expected = 0.3;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);

var n = 3,
  edges = [[0, 1]],
  succProb = [0.5],
  start = 0,
  end = 2;
var expected = 0.0;
var result = maxProbability(n, edges, succProb, start, end);
console.log(result, result === expected);
