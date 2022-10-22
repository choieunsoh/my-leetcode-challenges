// 210. Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const result = [];
  const visited = {};
  const courses = {};
  for (let i = 0; i < prerequisites.length; i++) {
    const [courseId, preCourseId] = prerequisites[i];
    if (!courses[courseId]) courses[courseId] = [];
    courses[courseId].push(preCourseId);
  }

  function isCycling(courseId) {
    if (visited[courseId]) return true;
    if (visited[courseId] === false) return false;

    visited[courseId] = true;
    const preCourses = courses[courseId] ?? [];
    for (let i = 0; i < preCourses.length; i++) {
      if (isCycling(preCourses[i])) return true;
    }
    visited[courseId] = false;
    result.push(courseId);

    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (isCycling(i)) return [];
  }

  return result;
};

var numCourses = 2,
  prerequisites = [[1, 0]];
var expected = [0, 1];
var result = findOrder(numCourses, prerequisites);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);

var numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
var expected = [0, 2, 1, 3];
var result = findOrder(numCourses, prerequisites);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);

var numCourses = 1,
  prerequisites = [];
var expected = [0];
var result = findOrder(numCourses, prerequisites);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);
