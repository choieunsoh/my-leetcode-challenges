// 1615. Maximal Network Rank
// https://leetcode.com/problems/maximal-network-rank
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const degrees = Array(n).fill(0);
  for (const [a, b] of roads) {
    degrees[a]++;
    degrees[b]++;
  }

  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < n; i++) {
    if (degrees[i] > max) {
      secondMax = max;
      max = degrees[i];
    } else if (degrees[i] > secondMax) {
      secondMax = degrees[i];
    }
  }

  const maxNodes = new Set();
  const secondMaxNodes = new Set();
  for (let i = 0; i < n; i++) {
    const degree = degrees[i];
    if (degree === max) maxNodes.add(i);
    else if (degree === secondMax) secondMaxNodes.add(i);
  }

  if (maxNodes.size > 1) {
    let edges = 0;
    for (const [a, b] of roads) {
      if (maxNodes.has(a) && maxNodes.has(b)) edges++;
    }
    const maxEdges = (maxNodes.size * (maxNodes.size - 1)) / 2;
    const connected = maxEdges === edges ? 1 : 0;
    return 2 * max - connected;
  }

  let edges = 0;
  for (const [a, b] of roads) {
    if (maxNodes.has(a) && secondMaxNodes.has(b)) edges++;
    if (maxNodes.has(b) && secondMaxNodes.has(a)) edges++;
  }
  const connected = secondMaxNodes.size === edges ? 1 : 0;
  return max + secondMax - connected;
};

var n = 4,
  roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
  ];
var expected = 4;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);

var n = 5,
  roads = [
    [0, 1],
    [0, 3],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
  ];
var expected = 5;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);

var n = 8,
  roads = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
    [5, 6],
    [5, 7],
  ];
var expected = 5;
var result = maximalNetworkRank(n, roads);
console.log(result, result === expected);
