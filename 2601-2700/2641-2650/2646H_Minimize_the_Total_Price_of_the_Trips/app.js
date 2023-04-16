// 2646. Minimize the Total Price of the Trips
// https://leetcode.com/problems/minimize-the-total-price-of-the-trips/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} price
 * @param {number[][]} trips
 * @return {number}
 */
var minimumTotalPrice = function (n, edges, price, trips) {
  const adj = Array.from({ length: n }, () => []);
  for (const [a, b] of edges) {
    adj[a].push(b);
    adj[b].push(a);
  }

  const totalPrice = Array(n).fill(0);
  for (const [start, end] of trips) {
    const path = makeTrip(start, end);
    for (const node of path) {
      totalPrice[node] += price[node];
    }
  }

  const memo = new Map();
  return dfs(0, false, -1);

  function makeTrip(start, end) {
    const queue = [[start, [start]]];
    const seen = new Set([start]);
    while (queue.length) {
      const [node, path] = queue.shift();
      if (node === end) return path;
      for (let nei of adj[node]) {
        if (seen.has(nei)) continue;
        seen.add(nei);
        queue.push([nei, [...path, nei]]);
      }
    }
  }

  function dfs(node, parentIsHalfPrice, parent) {
    const key = `${node},${parentIsHalfPrice},${parent}`;
    if (memo.has(key)) return memo.get(key);

    if (parentIsHalfPrice) {
      let result = totalPrice[node];
      for (const nei of adj[node]) {
        if (nei === parent) continue;
        result += dfs(nei, false, node);
      }
      memo.set(key, result);
      return result;
    }

    let takeHalfPrice = totalPrice[node] / 2;
    let noHalfPrice = totalPrice[node];
    for (const nei of adj[node]) {
      if (nei === parent) continue;
      takeHalfPrice += dfs(nei, true, node);
      noHalfPrice += dfs(nei, false, node);
    }
    const result = Math.min(takeHalfPrice, noHalfPrice);
    memo.set(key, result);
    return result;
  }
};

var n = 4,
  edges = [
    [0, 1],
    [1, 2],
    [1, 3],
  ],
  price = [2, 2, 10, 6],
  trips = [
    [0, 3],
    [2, 1],
    [2, 3],
  ];
var expected = 23;
var result = minimumTotalPrice(n, edges, price, trips);
console.log(result, result === expected);

var n = 2,
  edges = [[0, 1]],
  price = [2, 2],
  trips = [[0, 0]];
var expected = 1;
var result = minimumTotalPrice(n, edges, price, trips);
console.log(result, result === expected);
