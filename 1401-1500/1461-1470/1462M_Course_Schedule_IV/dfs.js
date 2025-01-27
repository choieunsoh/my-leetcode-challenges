// 1462. Course Schedule IV
// https://leetcode.com/problems/course-schedule-iv/description/
// T.C.: O(n^2*m)
// S.C.: O(n^2)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const graph = Array.from({ length: numCourses }, () => []);
  for (const [course, nextCourse] of prerequisites) {
    graph[course].push(nextCourse);
  }

  const result = [];
  for (const [a, b] of queries) {
    result.push(isPrerequisite(a, b, new Array(numCourses).fill(false)));
  }

  return result;

  function isPrerequisite(source, target, visited) {
    visited[source] = true;
    if (source === target) return true;

    for (const nextCourse of graph[source]) {
      if (!visited[nextCourse] && isPrerequisite(nextCourse, target, visited)) {
        return true;
      }
    }
    return false;
  }
};

var numCourses = 2,
  prerequisites = [[1, 0]],
  queries = [
    [0, 1],
    [1, 0],
  ];
var expected = [false, true];
var result = checkIfPrerequisite(numCourses, prerequisites, queries);
console.log(result, result.join() === expected.join());

var numCourses = 2,
  prerequisites = [],
  queries = [
    [1, 0],
    [0, 1],
  ];
var expected = [false, false];
var result = checkIfPrerequisite(numCourses, prerequisites, queries);
console.log(result, result.join() === expected.join());

var numCourses = 3,
  prerequisites = [
    [1, 2],
    [1, 0],
    [2, 0],
  ],
  queries = [
    [1, 0],
    [1, 2],
  ];
var expected = [true, true];
var result = checkIfPrerequisite(numCourses, prerequisites, queries);
console.log(result, result.join() === expected.join());
