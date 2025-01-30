// 2493. Divide Nodes Into the Maximum Number of Groups
// https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/description/
// T.C.: O(n*(n+m))
// S.C.: O(n)
/*
A graph is bipartite when we can divide its nodes into two distinct sets where:
- All edges connect vertices from one set to vertices in the other set.
- No edges exist between vertices within the same set.
*/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var magnificentSets = function (n, edges) {
  const uf = new UnionFind(n + 1);
  const adjList = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    adjList[u].push(v);
    adjList[v].push(u);
    uf.union(u, v);
  }

  const numOfGroupsForComponent = new Map();
  // For each node, calculate the maximum number of groups for its component
  for (let node = 1; node <= n; node++) {
    const numberOfGroups = getNumberOfGroupsForComponent(node);
    if (numberOfGroups === -1) return -1; // If invalid split, return -1

    const rootNode = uf.find(node);
    numOfGroupsForComponent.set(rootNode, Math.max(numOfGroupsForComponent.get(rootNode) ?? 0, numberOfGroups));
  }

  // Calculate the total number of groups across all components
  let totalNumberOfGroups = 0;
  for (const numberOfGroups of numOfGroupsForComponent.values()) {
    totalNumberOfGroups += numberOfGroups;
  }
  return totalNumberOfGroups;

  function getNumberOfGroupsForComponent(node) {
    // Start with the distance of the current node as the maximum
    let queue = [node];
    const layerSeen = new Array(n + 1).fill(-1);
    layerSeen[node] = 0;

    // Perform BFS to calculate the number of layers (groups)
    let deepestLayer = 0;
    while (queue.length) {
      const numOfNodesInLayer = queue.length;
      for (let i = 0; i < numOfNodesInLayer; i++) {
        const currentNode = queue.shift();
        for (const neighbor of adjList[currentNode]) {
          // If neighbor hasn't been visited, assign it to the next layer
          if (layerSeen[neighbor] == -1) {
            layerSeen[neighbor] = deepestLayer + 1;
            queue.push(neighbor);
          } else {
            // If the neighbor is already in the same layer, return -1 (invalid partition)
            if (layerSeen[neighbor] === deepestLayer) {
              return -1;
            }
          }
        }
      }
      deepestLayer++;
    }
    return deepestLayer;
  }
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(1);
    this.groups = n;
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return false;

    if (this.rank[rootX] >= this.rank[rootY]) {
      this.parent[rootY] = rootX;
      this.rank[rootX] += this.rank[rootY];
    } else {
      this.parent[rootX] = rootY;
      this.rank[rootY] += this.rank[rootX];
    }

    this.groups--;
    return true;
  }
}

var n = 6,
  edges = [
    [1, 2],
    [1, 4],
    [1, 5],
    [2, 6],
    [2, 3],
    [4, 6],
  ];
var expected = 4;
var result = magnificentSets(n, edges);
console.log(result, result === expected);

var n = 3,
  edges = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
var expected = -1;
var result = magnificentSets(n, edges);
console.log(result, result === expected);
