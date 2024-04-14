// 1462. Course Schedule IV
// https://leetcode.com/problems/course-schedule-iv/description/
// T.C.: O(n^3)
// S.C.: O(n^2)
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
  const graph = Array.from({ length: numCourses }, () => []);
  const memo = Array.from({ length: numCourses }, () => new Array(numCourses).fill(false));
  const inDegree = new Array(numCourses).fill(0);
  for (const [course, nextCourse] of prerequisites) {
    graph[course].push(nextCourse);
    inDegree[nextCourse]++;
  }

  let queue = [];
  for (let course = 0; course < numCourses; course++) {
    if (inDegree[course] === 0) {
      queue.push(course);
    }
  }

  while (queue.length) {
    const newQueue = [];
    for (const course of queue) {
      for (const nextCourse of graph[course]) {
        memo[course][nextCourse] = true;
        for (let i = 0; i < numCourses; i++) {
          if (memo[i][course]) {
            memo[i][nextCourse] = true;
          }
        }

        inDegree[nextCourse]--;
        if (inDegree[nextCourse] === 0) {
          newQueue.push(nextCourse);
        }
      }
    }
    queue = newQueue;
  }

  const result = [];
  for (const [a, b] of queries) {
    result.push(memo[a][b]);
  }

  return result;
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
