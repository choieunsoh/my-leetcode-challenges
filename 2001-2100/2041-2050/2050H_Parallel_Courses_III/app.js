// 2050. Parallel Courses III
// https://leetcode.com/problems/parallel-courses-iii/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function (n, relations, time) {
  const graph = Array.from({ length: n }, () => []);
  const indegree = new Array(n).fill(0);
  for (const [prev, next] of relations) {
    graph[prev - 1].push(next - 1);
    indegree[next - 1]++;
  }

  const maxTime = new Array(n).fill(0);
  let queue = [];
  for (let node = 0; node < n; node++) {
    if (indegree[node] === 0) {
      queue.push(node);
      maxTime[node] = time[node];
    }
  }

  while (queue.length) {
    const qq = [];
    for (const node of queue) {
      for (const neighbor of graph[node]) {
        maxTime[neighbor] = Math.max(maxTime[neighbor], maxTime[node] + time[neighbor]);
        indegree[neighbor]--;
        if (indegree[neighbor] === 0) {
          qq.push(neighbor);
        }
      }
    }
    queue = qq;
  }

  return Math.max(...maxTime);
};

var n = 3,
  relations = [
    [1, 3],
    [2, 3],
  ],
  time = [3, 2, 5];
var expected = 8;
var result = minimumTime(n, relations, time);
console.log(result, result === expected);

var n = 5,
  relations = [
    [1, 5],
    [2, 5],
    [3, 5],
    [3, 4],
    [4, 5],
  ],
  time = [1, 2, 3, 4, 5];
var expected = 12;
var result = minimumTime(n, relations, time);
console.log(result, result === expected);
