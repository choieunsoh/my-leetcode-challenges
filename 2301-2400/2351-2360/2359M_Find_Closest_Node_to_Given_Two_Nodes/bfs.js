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
  const MAX = Number.MAX_SAFE_INTEGER;
  const n = edges.length;
  const dist1 = new Array(n).fill(MAX);
  const dist2 = new Array(n).fill(MAX);

  bfs(node1, edges, dist1);
  bfs(node2, edges, dist2);

  let minDistNode = -1;
  let minDistTillNow = MAX;
  for (let currNode = 0; currNode < n; currNode++) {
    if (minDistTillNow > Math.max(dist1[currNode], dist2[currNode])) {
      minDistNode = currNode;
      minDistTillNow = Math.max(dist1[currNode], dist2[currNode]);
    }
  }

  return minDistNode;

  function bfs(startNode, edges, dist) {
    const n = edges.length;
    const q = [startNode];

    const visited = new Array(n).fill(false);
    dist[startNode] = 0;

    while (q.length) {
      const node = q.shift();
      q.pop();

      if (visited[node]) {
        continue;
      }

      visited[node] = true;
      const neighbor = edges[node];
      if (neighbor !== -1 && !visited[neighbor]) {
        dist[neighbor] = 1 + dist[node];
        q.push(neighbor);
      }
    }
  }
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
