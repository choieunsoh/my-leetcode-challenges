// 1192. Critical Connections in a Network
// https://leetcode.com/problems/critical-connections-in-a-network/
// Tarjan's algorithms
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {
  const graph = Array.from({ length: n }, () => []);
  for (const [from, to] of connections) {
    graph[from].push(to);
    graph[to].push(from);
  }

  let id = 0;
  const ids = new Array(n).fill(0); // id for each node
  const lows = new Array(n).fill(0); // low - value
  const visited = new Array(n).fill(false);
  const bridges = [];

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i, -1);
    }
  }

  return bridges;

  function dfs(at, prev) {
    visited[at] = true;
    id++;
    lows[at] = ids[at] = id;

    for (const to of graph[at]) {
      if (to === prev) continue; // sanity check - in an undirected graph, an outward edge may come back right after
      if (!visited[to]) {
        dfs(to, at);
        // during the backtracking, propagate min low-value
        lows[at] = Math.min(lows[at], lows[to]);
        if (ids[at] < lows[to]) {
          // bridge found
          bridges.push([at, to]);
        }
      } else {
        // when the 'to' node is already visited, it might have a lower id than our low-value
        lows[at] = Math.min(lows[at], ids[to]);
      }
    }
  }
};

var n = 4,
  connections = [
    [0, 1],
    [1, 2],
    [2, 0],
    [1, 3],
  ];
var expected = [[1, 3]];
var result = criticalConnections(n, connections);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var n = 2,
  connections = [[0, 1]];
var expected = [[0, 1]];
var result = criticalConnections(n, connections);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
