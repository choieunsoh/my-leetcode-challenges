// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/
var canFinish = function (
  numCourses: number,
  prerequisites: number[][]
): boolean {
  const visited = new Map<number, boolean>();
  const courses = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const [courseId, preCourseId] = prerequisites[i];
    if (!courses.has(courseId)) {
      courses.set(courseId, [preCourseId]);
    }
  }

  function isCycle(courseId: number): boolean {
    const isVisited = visited.get(courseId);
    if (isVisited) return true;
    if (isVisited === false) return false;

    visited.set(courseId, true);

    const preCourses = courses.get(courseId) ?? [];
    for (let i = 0; i < preCourses.length; i++) {
      const preCourseId = preCourses[i];
      if (isCycle(preCourseId)) return true;
    }

    visited.set(courseId, false);

    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (isCycle(i)) return false;
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
