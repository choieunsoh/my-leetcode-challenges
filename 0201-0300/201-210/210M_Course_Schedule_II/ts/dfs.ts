// 210. Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/
var findOrder = function (
  numCourses: number,
  prerequisites: number[][]
): number[] {
  const result: number[] = [];
  const visited = new Map<number, boolean>();
  const courses = new Map<number, number[]>();
  for (let i = 0; i < prerequisites.length; i++) {
    const [courseId, preCourseId] = prerequisites[i];
    const preCourses: number[] = courses.get(courseId) ?? [];
    preCourses.push(preCourseId);
    courses.set(courseId, preCourses);
  }

  function isCycle(courseId: number): boolean {
    const isVisited = visited.get(courseId);
    if (isVisited) return true;
    if (isVisited === false) return false;

    visited.set(courseId, true);

    const preCourses = courses.get(courseId) ?? [];
    for (let i = 0; i < preCourses.length; i++) {
      if (isCycle(preCourses[i])) return true;
    }

    visited.set(courseId, false);
    result.push(courseId);

    return false;
  }

  for (let i = 0; i < numCourses; i++) {
    if (isCycle(i)) return [];
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
  prerequisites: number[][] = [];
var expected = [0];
var result = findOrder(numCourses, prerequisites);
console.log(
  result,
  result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join()
);
