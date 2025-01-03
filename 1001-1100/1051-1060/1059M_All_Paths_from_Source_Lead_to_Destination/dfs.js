// 1059. All Paths from Source Lead to Destination
// https://leetcode.com/problems/all-paths-from-source-lead-to-destination
// T.C.: O(V+E)
// S.C.: O(V+E)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var leadsToDestination = function (n, edges, source, destination) {
  const Color = { WHITE: 0, GRAY: 1, BLACK: 2 };
  const graph = Array.from({ length: n }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
  }
  return leadsToDest(graph, source, destination, new Array(n).fill(Color.WHITE));

  function leadsToDest(graph, node, dest, states) {
    // If the state is GRAY, this is a backward edge and hence, it creates a loop.
    if (states[node] !== Color.WHITE) {
      return states[node] === Color.BLACK;
    }

    // If this is a leaf node, it should be equal to the destination.
    if (graph[node].length === 0) {
      return node === dest;
    }

    // Now, we are processing this node. So we mark it as GRAY
    states[node] = Color.GRAY;

    for (const next of graph[node]) {
      // If we get a `false` from any recursive call on the neighbors, we short circuit and return from there.
      if (!leadsToDest(graph, next, dest, states)) {
        return false;
      }
    }

    // Recursive processing done for the node. We mark it BLACK
    states[node] = Color.BLACK;
    return true;
  }
};

var n = 3,
  edges = [
    [0, 1],
    [0, 2],
  ],
  source = 0,
  destination = 2;
var expected = false;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 1],
    [0, 3],
    [1, 2],
    [2, 1],
  ],
  source = 0,
  destination = 3;
var expected = false;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);

var n = 4,
  edges = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
  ],
  source = 0,
  destination = 3;
var expected = true;
var result = leadsToDestination(n, edges, source, destination);
console.log(result, result === expected);
