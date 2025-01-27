// 1462. Course Schedule IV
// https://leetcode.com/problems/course-schedule-iv/description/
// Floyd-Warshall Algorithm
// T.C.: O(n^3+m)
// S.C.: O(n^2)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const isPrerequisite = Array.from({ length: numCourses }, () => Array(numCourses).fill(false));

  // Initialize the isPrerequisite matrix with the given prerequisites
  for (const [course, nextCourse] of prerequisites) {
    isPrerequisite[course][nextCourse] = true;
  }

  // Floyd-Warshall algorithm to find all pairs reachability
  for (let intermediate = 0; intermediate < numCourses; intermediate++) {
    for (let src = 0; src < numCourses; src++) {
      for (let target = 0; target < numCourses; target++) {
        isPrerequisite[src][target] ||= isPrerequisite[src][intermediate] && isPrerequisite[intermediate][target];
      }
    }
  }

  // Answer the queries
  const answer = [];
  for (const [a, b] of queries) {
    answer.push(isPrerequisite[a][b]);
  }

  return answer;
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
