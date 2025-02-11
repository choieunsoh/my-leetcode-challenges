// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function (n, connections) {
  let changes = 0;
  const roads = Array.from({ length: n }, () => []);
  for (const [a, b] of connections) {
    roads[a].push(b);
    roads[b].push(-a);
  }

  const visited = new Array(n).fill(false);
  const queue = [0];
  visited[0] = true;

  while (queue.length) {
    const city = queue.shift();
    if (roads[city].length === 0) continue;
    for (const nextCity of roads[city]) {
      if (visited[Math.abs(nextCity)]) continue;

      if (nextCity > 0) changes++;
      visited[Math.abs(nextCity)] = true;
      queue.push(Math.abs(nextCity));
    }
  }

  return changes;
};

var n = 6,
  connections = [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ];
var expected = 3;
var result = minReorder(n, connections);
console.log(result, result === expected);

var n = 5,
  connections = [
    [1, 0],
    [1, 2],
    [3, 2],
    [3, 4],
  ];
var expected = 2;
var result = minReorder(n, connections);
console.log(result, result === expected);

var n = 3,
  connections = [
    [1, 0],
    [2, 0],
  ];
var expected = 0;
var result = minReorder(n, connections);
console.log(result, result === expected);
