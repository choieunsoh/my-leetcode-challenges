// 3203. Find Minimum Diameter After Merging Two Trees
// https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/description/
// T.C.: O(n+m)
// S.C.: O(n+m)
/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const graph1 = buildGraph(n, edges1);
  const graph2 = buildGraph(m, edges2);

  const { diameter: diameter1 } = findDiameter(graph1, 0, -1);
  const { diameter: diameter2 } = findDiameter(graph2, 0, -1);
  const connectedDiameter = Math.ceil(diameter1 / 2) + Math.ceil(diameter2 / 2) + 1;

  return Math.max(diameter1, diameter2, connectedDiameter);

  function buildGraph(n, edges) {
    const graph = Array.from({ length: n }, () => []);
    for (const [a, b] of edges) {
      graph[a].push(b);
      graph[b].push(a);
    }
    return graph;
  }

  function findDiameter(graph, node, parent) {
    let maxDepth1 = 0;
    let maxDepth2 = 0; // Tracks the two largest depths from the current node
    let diameter = 0; // Tracks the diameter of the subtree

    for (const neighbor of graph[node]) {
      if (neighbor === parent) continue; // Skip the parent to avoid cycles

      // Recursively calculate the diameter and depth of the neighbor's subtree
      const result = findDiameter(graph, neighbor, node);
      const childDiameter = result.diameter;
      const depth = result.depth + 1; // Increment depth to include edge to neighbor

      // Update the maximum diameter of the subtree
      diameter = Math.max(diameter, childDiameter);

      // Update the two largest depths from the current node
      if (depth > maxDepth1) {
        maxDepth2 = maxDepth1;
        maxDepth1 = depth;
      } else if (depth > maxDepth2) {
        maxDepth2 = depth;
      }
    }

    // Update the diameter to include the path through the current node
    diameter = Math.max(diameter, maxDepth1 + maxDepth2);

    // Return the diameter and the longest depth
    return { diameter, depth: maxDepth1 };
  }
};

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
  ],
  edges2 = [[0, 1]];
var expected = 3;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [2, 7],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 4],
    [2, 5],
    [3, 6],
    [2, 7],
  ];
var expected = 5;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);

var edges1 = [
    [1, 4],
    [2, 5],
    [3, 2],
    [1, 3],
    [0, 1],
    [0, 6],
  ],
  edges2 = [
    [2, 1],
    [0, 2],
    [0, 3],
  ];
var expected = 6;
var result = minimumDiameterAfterMerge(edges1, edges2);
console.log(result, result === expected);
