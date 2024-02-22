// 1245. Tree Diameter
// https://leetcode.com/problems/tree-diameter/description/
// T.C: O(N)
// S.C: 0(N)
/**
 * @param {number[][]} edges
 * @return {number}
 */
var treeDiameter = function (edges) {
  let diameter = 0;
  const visited = new Set();
  const graph = Array.from({ length: edges.length + 1 }, () => new Set());
  for (const [u, v] of edges) {
    graph[u].add(v);
    graph[v].add(u);
  }
  dfs(0);
  return diameter;

  function dfs(curr) {
    let topDistance1 = 0;
    let topDistance2 = 0;
    visited.add(curr);
    for (const neighbor of graph[curr]) {
      let distance = 0;
      if (!visited.has(neighbor)) {
        distance = 1 + dfs(neighbor);
      }

      if (distance > topDistance1) {
        topDistance2 = topDistance1;
        topDistance1 = distance;
      } else if (distance > topDistance2) {
        topDistance2 = distance;
      }
    }

    diameter = Math.max(diameter, topDistance1 + topDistance2);
    return topDistance1;
  }
};

var edges = [
  [0, 1],
  [0, 2],
];
var expected = 2;
var result = treeDiameter(edges);
console.log(result, result === expected);

var edges = [
  [0, 1],
  [1, 2],
  [2, 3],
  [1, 4],
  [4, 5],
];
var expected = 4;
var result = treeDiameter(edges);
console.log(result, result === expected);
