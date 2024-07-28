// 2045. Second Minimum Time to Reach Destination
// https://leetcode.com/problems/second-minimum-time-to-reach-destination/
// T.C.: O(N+E)
// S.C.: O(N+E)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }
  console.log(graph);

  const distFirstVisit = new Array(n + 1).fill(-1);
  const distSecondVisit = new Array(n + 1).fill(-1);

  let queue = [[1, 1]]; // [node, freq]
  distFirstVisit[1] = 0;
  while (queue.length) {
    const nextQueue = [];
    for (const [node, freq] of queue) {
      let timeTaken = freq == 1 ? distFirstVisit[node] : distSecondVisit[node];
      const changeCount = (timeTaken / change) | 0;
      console.log([node, freq], timeTaken, changeCount);
      if (changeCount % 2 === 1) {
        timeTaken = change * (changeCount + 1) + time;
        console.log('A', timeTaken);
      } else {
        timeTaken += time;
        console.log('B', timeTaken);
      }

      for (const neighbor of graph[node]) {
        if (distFirstVisit[neighbor] === -1) {
          distFirstVisit[neighbor] = timeTaken;
          nextQueue.push([neighbor, 1]);
        } else if (distSecondVisit[neighbor] === -1 && distFirstVisit[neighbor] !== timeTaken) {
          if (neighbor === n) {
            return timeTaken;
          }
          distSecondVisit[neighbor] = timeTaken;
          nextQueue.push([neighbor, 2]);
        }
      }
    }
    queue = nextQueue;
  }

  return 0;
};

var n = 5,
  edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [3, 4],
    [4, 5],
  ],
  time = 3,
  change = 5;
var expected = 13;
var result = secondMinimum(n, edges, time, change);
console.log(result, result === expected);

var n = 2,
  edges = [[1, 2]],
  time = 3,
  change = 2;
var expected = 11;
var result = secondMinimum(n, edges, time, change);
console.log(result, result === expected);
