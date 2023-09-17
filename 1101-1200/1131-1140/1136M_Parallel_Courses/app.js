// 1136. Parallel Courses
// https://leetcode.com/problems/parallel-courses/
/**
 * @param {number} n
 * @param {number[][]} relations
 * @return {number}
 */
var minimumSemesters = function (n, relations) {
  const graph = Array.from({ length: n + 1 }, () => []);
  const inCount = new Array(n + 1).fill(0);
  for (const [prevCourse, nextCourse] of relations) {
    graph[prevCourse].push(nextCourse);
    inCount[nextCourse]++;
  }

  let queue = [];
  for (let i = 1; i <= n; i++) {
    if (inCount[i] === 0) {
      queue.push(i);
    }
  }
  if (queue.length === 0) return -1;

  let semesters = 0;
  let studiedCount = 0;
  while (queue.length) {
    semesters++;
    const nextQueue = [];
    for (const currentCourse of queue) {
      studiedCount++;
      for (const nextCourse of graph[currentCourse]) {
        if (--inCount[nextCourse] === 0) {
          nextQueue.push(nextCourse);
        }
      }
    }
    queue = nextQueue;
  }

  return studiedCount === n ? semesters : -1;
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
