// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const visited = {};
  const courses = {};
  for (const [courseId, preCourse] of prerequisites) {
    if (!courses[courseId]) {
      courses[courseId] = [];
    }
    courses[courseId].push(preCourse);
  }

  function isCycling(courseId) {
    if (visited[courseId]) return true;

    visited[courseId] = true;
    const preCourses = courses[courseId] ?? [];
    for (const preCourse of preCourses) {
      if (isCycling(preCourse)) return true;
    }

    visited[courseId] = false;
    courses[courseId] = [];

    return false;
  }

  for (let courseId = 0; courseId < numCourses; courseId++) {
    if (isCycling(courseId)) return false;
  }

  return true;
};

var numCourses = 2,
  prerequisites = [[1, 0]];
var expected = true;
var result = canFinish(numCourses, prerequisites);
console.log(result, expected, result === expected);

var numCourses = 2,
  prerequisites = [
    [1, 0],
    [0, 1],
  ];
var expected = false;
var result = canFinish(numCourses, prerequisites);
console.log(result, expected, result === expected);

var numCourses = 5,
  prerequisites = [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ];
var expected = true;
var result = canFinish(numCourses, prerequisites);
console.log(result, expected, result === expected);
