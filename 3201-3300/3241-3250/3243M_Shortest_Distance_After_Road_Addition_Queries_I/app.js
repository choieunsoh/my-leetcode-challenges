// 3243. Shortest Distance After Road Addition Queries I
// https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/description/
// T.C.: O(q * (n + q))
// S.C.: O(n + q)
/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const graphCity = Array.from({ length: n }, () => []);
  for (let city = 0; city < n - 1; city++) {
    graphCity[city].push(city + 1);
  }

  const result = new Array(queries.length);
  for (let i = 0; i < queries.length; i++) {
    const [city, nextCity] = queries[i];
    graphCity[city].push(nextCity);
    result[i] = shortestDistanceToLastCity(graphCity);
  }
  return result;

  function shortestDistanceToLastCity(graphCity) {
    const visited = new Array(n);
    visited[0] = true;
    let queue = [[0, 0]];
    while (queue.length) {
      const nextQueue = [];
      for (const [city, dist] of queue) {
        if (city === n - 1) return dist;

        for (const nextCity of graphCity[city]) {
          if (visited[nextCity]) continue;
          visited[nextCity] = true;
          nextQueue.push([nextCity, dist + 1]);
        }
      }
      queue = nextQueue;
    }
    return n - 1;
  }
};

var n = 5,
  queries = [
    [2, 4],
    [0, 2],
    [0, 4],
  ];
var expected = [3, 2, 1];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 4,
  queries = [
    [0, 3],
    [0, 2],
  ];
var expected = [1, 1];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());

var n = 14,
  queries = [
    [0, 6],
    [4, 12],
  ];
var expected = [8, 6];
var result = shortestDistanceAfterQueries(n, queries);
console.log(result, result.join() === expected.join());
