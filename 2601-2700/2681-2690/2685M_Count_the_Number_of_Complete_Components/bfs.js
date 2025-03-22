// 2685. Count the Number of Complete Components
// https://leetcode.com/problems/count-the-number-of-complete-components/
// T.C.: O(n + m)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  let completeComponents = 0;
  const graph = Array.from({ length: n }, () => []);
  const visited = new Array(n).fill(false);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  for (let vertex = 0; vertex < n; vertex++) {
    if (visited[vertex]) continue;

    // BFS to find all vertices in the current component
    const component = [];
    const queue = [vertex];
    visited[vertex] = true;

    while (queue.length) {
      const current = queue.shift();
      component.push(current);

      // Process neighbors
      for (const neighbor of graph[current]) {
        if (!visited[neighbor]) {
          queue.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }

    // Check if component is complete (all vertices have the right number of edges)
    let isComplete = true;
    for (const node of component) {
      if (graph[node].length !== component.length - 1) {
        isComplete = false;
        break;
      }
    }

    if (isComplete) {
      completeComponents++;
    }
  }

  return completeComponents;
};

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
  ];
var expected = 3;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);

var n = 6,
  edges = [
    [0, 1],
    [0, 2],
    [1, 2],
    [3, 4],
    [3, 5],
  ];
var expected = 1;
var result = countCompleteComponents(n, edges);
console.log(result, result === expected);
