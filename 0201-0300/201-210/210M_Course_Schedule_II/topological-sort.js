// 210. Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const result = [];
  const courses = Array.from({ length: numCourses }, () => []);
  const inDegrees = Array(numCourses).fill(0);
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preCourse] = prerequisites[i];
    courses[preCourse].push(course);
    inDegrees[course]++;
  }

  let queue = [];
  for (let i = 0; i < inDegrees.length; i++) {
    if (inDegrees[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const qq = [];
    for (let i = 0; i < queue.length; i++) {
      const course = queue[i];
      result.push(course);
      const nextCourses = courses[course];
      for (let j = 0; j < nextCourses.length; j++) {
        const nextCourse = nextCourses[j];
        inDegrees[nextCourse]--;
        if (inDegrees[nextCourse] === 0) {
          qq.push(nextCourse);
        }
      }
    }
    queue = qq;
  }

  if (result.length < numCourses) return [];
  return result;
};

var numCourses = 2,
  prerequisites = [[1, 0]];
var expected = [0, 1];
var result = findOrder(numCourses, prerequisites);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var numCourses = 4,
  prerequisites = [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ];
var expected = [0, 2, 1, 3];
var result = findOrder(numCourses, prerequisites);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());

var numCourses = 1,
  prerequisites = [];
var expected = [0];
var result = findOrder(numCourses, prerequisites);
console.log(result, result.sort((a, b) => a - b).join() === expected.sort((a, b) => a - b).join());
