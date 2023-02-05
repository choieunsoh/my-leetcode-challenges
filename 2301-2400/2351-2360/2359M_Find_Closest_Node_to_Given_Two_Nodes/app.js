// 2359. Find Closest Node to Given Two Nodes
// https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function (edges, node1, node2) {
  let result = -1;
  const n = edges.length;
  let minDistance = n;
  const visited1 = Array(n).fill(false);
  const visited2 = Array(n).fill(false);
  const dist1 = Array(n).fill(0);
  const dist2 = Array(n).fill(0);
  dfs(node1, visited1, dist1);
  dfs(node2, visited2, dist2);

  for (let i = 0; i < n; i++) {
    const distance = Math.max(dist1[i], dist2[i]);
    if (visited1[i] && visited2[i] && minDistance > distance) {
      minDistance = distance;
      result = i;
    }
  }

  function dfs(node, visited, distance) {
    visited[node] = true;
    const neighbor = edges[node];
    if (neighbor !== -1 && !visited[neighbor]) {
      distance[neighbor] = distance[node] + 1;
      dfs(neighbor, visited, distance);
    }
  }

  return result;
};

var edges = [2, 2, 3, -1],
  node1 = 0,
  node2 = 1;
var expected = 2;
var result = closestMeetingNode(edges, node1, node2);
console.log(result, result === expected);

var edges = [1, 2, -1],
  node1 = 0,
  node2 = 2;
var expected = 2;
var result = closestMeetingNode(edges, node1, node2);
console.log(result, result === expected);
