/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function (edges1, edges2) {
  const n = edges1.length + 1;
  const m = edges2.length + 1;
  const g1 = buildGraph(edges1, n);
  const g2 = buildGraph(edges2, m);

  // Compute depths and counts for both trees
  const [depth1, [count1Parity0, count1Parity1]] = bfs(g1, n);
  const [, [count2Parity0, count2Parity1]] = bfs(g2, m);

  // Precompute answers for both parities
  const parity0OptionA = count1Parity0 + count2Parity1;
  const parity0OptionB = count1Parity0 + count2Parity0;
  const resultParity0 = Math.max(parity0OptionA, parity0OptionB);

  const parity1OptionA = count1Parity1 + count2Parity1;
  const parity1OptionB = count1Parity1 + count2Parity0;
  const resultParity1 = Math.max(parity1OptionA, parity1OptionB);

  // Prepare the final answer
  const result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (depth1[i] % 2 === 0) {
      result[i] = resultParity0;
    } else {
      result[i] = resultParity1;
    }
  }
  return result;

  function bfs(graph, size) {
    const depth = new Array(size).fill(0);
    const seen = new Array(size);
    seen[0] = true;
    let queue = [0];
    const totalParity = [0, 0];
    while (queue.length > 0) {
      const nextQueue = [];
      for (const node of queue) {
        totalParity[depth[node] % 2]++;
        for (const neighbor of graph[node]) {
          if (seen[neighbor]) continue;
          seen[neighbor] = true;
          depth[neighbor] = depth[node] + 1;
          nextQueue.push(neighbor);
        }
      }
      queue = nextQueue;
    }

    return [depth, totalParity];
  }

  function buildGraph(edges, size) {
    const graph = Array.from({ length: size }, () => []);
    for (const [u, v] of edges) {
      graph[u].push(v);
      graph[v].push(u);
    }
    return graph;
  }
};

var edges1 = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
  ],
  edges2 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [2, 7],
    [1, 4],
    [4, 5],
    [4, 6],
  ];
var expected = [8, 7, 7, 8, 8];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());

var edges1 = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
  ],
  edges2 = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];
var expected = [3, 6, 6, 6, 6];
var result = maxTargetNodes(edges1, edges2);
console.log(result, result.join() === expected.join());
