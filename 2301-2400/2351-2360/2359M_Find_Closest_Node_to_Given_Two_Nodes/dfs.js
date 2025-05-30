// 2359. Find Closest Node to Given Two Nodes
// https://leetcode.com/problems/find-closest-node-to-given-two-nodes/
// T.C.: O(n)
// S.C.: O(n)
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
  const dist1 = new Array(n).fill(-1);
  const dist2 = new Array(n).fill(-1);
  dist1[node1] = 0;
  dist2[node2] = 0;
  dfs(node1, dist1);
  dfs(node2, dist2);

  for (let currNode = 0; currNode < n; currNode++) {
    if (dist1[currNode] === -1 || dist2[currNode] === -1) continue;
    const distance = Math.max(dist1[currNode], dist2[currNode]);
    if (minDistance > distance) {
      minDistance = distance;
      result = currNode;
    }
  }

  function dfs(node, distance) {
    const neighbor = edges[node];
    if (neighbor !== -1 && distance[neighbor] === -1) {
      distance[neighbor] = distance[node] + 1;
      dfs(neighbor, distance);
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
