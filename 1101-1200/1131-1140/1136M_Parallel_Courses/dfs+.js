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
  };

  const graph = Array.from({ length: n + 1 }, () => []);
  for (const [prevCourse, nextCourse] of relations) {
    graph[prevCourse].push(nextCourse);
  }

  const visited = new Array(n + 1).fill(0);
  let maxLength = 1;
  for (let node = 1; node <= n; node++) {
    const length = dfs(node);

    // we meet a cycle!
    if (length === -1) return -1;

    maxLength = Math.max(length, maxLength);
  }
  return maxLength;

  function dfs(node) {
    // return the longest path (inclusive)
    if (visited[node] !== 0) {
      return visited[node];
    }

    // mark as visiting
    visited[node] = Status.VISITING;

    let maxLength = 1;
    for (const endNode of graph[node]) {
      const length = dfs(endNode);

      // we meet a cycle!
      if (length === -1) return -1;

      maxLength = Math.max(length + 1, maxLength);
    }

    // mark as visited
    visited[node] = maxLength;
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
