// 1136. Parallel Courses
// https://leetcode.com/problems/parallel-courses/
// T.C.: O(V + E)
// S.C.: O(V + E)
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  const Status = {
    VISITING: -1,
    UNVISITED: 0,
    VISITED: 1,
  };

  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [prevCourse, nextCourse] of relations) {
    graph[prevCourse].push(nextCourse);
  }

  // check if the graph contains a cycle
  const visited = new Array(n + 1).fill(0);
  for (let node = 1; node <= n; node++) {
    if (dfsCheckCycle(node) === -1) return -1;
  }

  // if no cycle, return the longest path
  const visitedLength = new Array(n + 1).fill(0);
  let maxLength = 1;
  for (let node = 1; node <= n; node++) {
    const length = dfsMaxPath(node);
    maxLength = Math.max(length, maxLength);
  }
  return maxLength;

  function dfsCheckCycle(node) {
    // return -1 if has a cycle
    // return 1 if does not have any cycle
    if (visited[node] !== 0) return visited[node];

    // mark as visiting
    visited[node] = Status.VISITING;

    for (const endNode of graph[node]) {
      if (dfsCheckCycle(endNode) === -1) {
        // we meet a cycle!
        return -1;
      }
    }

    // mark as visited
    visited[node] = Status.VISITED;
    return 1;
  }

  function dfsMaxPath(node) {
    // return the longest path (inclusive)
    if (visitedLength[node] !== 0) {
      return visitedLength[node];
    }

    let maxLength = 1;
    for (const endNode of graph[node]) {
      const length = dfsMaxPath(endNode);
      maxLength = Math.max(length + 1, maxLength);
    }

    // store it
    visitedLength[node] = maxLength;
    return maxLength;
  }
};

var n = 3,
  relations = [
    [1, 3],
    [2, 3],
  ];
var expected = 2;
var result = minimumSemesters(n, relations);
console.log(result, result === expected);

var n = 3,
  relations = [
    [1, 2],
    [2, 3],
    [3, 1],
  ];
var expected = -1;
var result = minimumSemesters(n, relations);
console.log(result, result === expected);
