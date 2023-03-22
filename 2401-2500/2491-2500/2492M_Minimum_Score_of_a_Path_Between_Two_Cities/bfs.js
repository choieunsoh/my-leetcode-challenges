// 2492. Minimum Score of a Path Between Two Cities
// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/
/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var minScore = function (n, roads) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [a, b, d] of roads) {
    graph[a].push([b, d]);
    graph[b].push([a, d]);
  }

  let result = Number.MAX_SAFE_INTEGER;
  const visited = new Set([1]);
  let queue = [1];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const city = queue[i];
      if (!visited.has(city)) continue;

      const nextCities = graph[city];
      for (const [nextCity, d] of nextCities) {
        result = Math.min(result, d);
        if (visited.has(nextCity)) continue;
        visited.add(nextCity);
        newQueue.push(nextCity);
      }
    }
    queue = newQueue;
  }
  return result;
};

var n = 4,
  roads = [
    [1, 2, 9],
    [2, 3, 6],
    [2, 4, 5],
    [1, 4, 7],
  ];
var expected = 5;
var result = minScore(n, roads);
console.log(result, result === expected);

var n = 4,
  roads = [
    [1, 2, 2],
    [1, 3, 4],
    [3, 4, 7],
  ];
var expected = 2;
var result = minScore(n, roads);
console.log(result, result === expected);
