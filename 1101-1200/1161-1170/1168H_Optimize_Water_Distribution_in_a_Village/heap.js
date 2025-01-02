// 1168. Optimize Water Distribution in a Village
// https://leetcode.com/problems/optimize-water-distribution-in-a-village
// Prim's Algorithm with Heap
// T.C.: O((N+M) * log⁡(N+M))
// S.C.: O(N+M)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[]} wells
 * @param {number[][]} pipes
 * @return {number}
 */
var minCostToSupplyWater = function (n, wells, pipes) {
  // min heap to maintain the order of edges to be visited.
  const edgesHeap = new MinPriorityQueue({ priority: (pair) => pair[0] });

  // representation of graph in adjacency list
  const graph = Array.from({ length: n + 1 }, () => []);

  // add a virtual vertex indexed with 0,
  // then add an edge to each of the house weighted by the cost
  for (let i = 0; i < wells.length; ++i) {
    graph[0].push([wells[i], i + 1]);
    // initialize the heap with the edges from the virtual vertex.
    edgesHeap.enqueue([wells[i], i + 1]);
  }

  // add the bidirectional edges to the graph
  for (let i = 0; i < pipes.length; ++i) {
    const house1 = pipes[i][0];
    const house2 = pipes[i][1];
    const cost = pipes[i][2];
    graph[house1].push([cost, house2]);
    graph[house2].push([cost, house1]);
  }

  // kick off the exploration from the virtual vertex 0
  const mstSet = new Set();
  mstSet.add(0);

  let totalCost = 0;
  while (mstSet.size < n + 1) {
    const [cost, nextHouse] = edgesHeap.dequeue().element;
    if (mstSet.has(nextHouse)) {
      continue;
    }

    // adding the new vertex into the set
    mstSet.add(nextHouse);
    totalCost += cost;

    // expanding the candidates of edge to choose from in the next round
    for (const [neighborCost, neighborHouse] of graph[nextHouse]) {
      if (!mstSet.has(neighborHouse)) {
        edgesHeap.enqueue([neighborCost, neighborHouse]);
      }
    }
  }

  return totalCost;
};

var n = 3,
  wells = [1, 2, 2],
  pipes = [
    [1, 2, 1],
    [2, 3, 1],
  ];
var expected = 3;
var result = minCostToSupplyWater(n, wells, pipes);
console.log(result, result === expected);

var n = 2,
  wells = [1, 1],
  pipes = [
    [1, 2, 1],
    [1, 2, 2],
  ];
var expected = 2;
var result = minCostToSupplyWater(n, wells, pipes);
console.log(result, result === expected);
