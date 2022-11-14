// 630. Course Schedule III
// https://leetcode.com/problems/course-schedule-iii/
const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) => a[1] - b[1]);

  let totalDuration = 0;
  const maxHeap = new MaxPriorityQueue();
  for (let i = 0; i < courses.length; i++) {
    const [duration, end] = courses[i];
    totalDuration += duration;
    maxHeap.enqueue(duration);

    while (totalDuration > end) {
      totalDuration -= maxHeap.dequeue();
    }
  }

  return maxHeap.size();
};

var courses = [
  [100, 200],
  [200, 1300],
  [1000, 1250],
  [2000, 3200],
];
var expected = 3;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [[1, 2]];
var expected = 1;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [3, 2],
  [4, 3],
];
var expected = 0;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [5, 5],
  [4, 6],
  [2, 6],
];
var expected = 2;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [5, 15],
  [3, 19],
  [6, 7],
  [2, 10],
  [5, 16],
  [8, 14],
  [10, 11],
  [2, 19],
];
var expected = 5;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);

var courses = [
  [7, 17],
  [3, 12],
  [10, 20],
  [9, 10],
  [5, 20],
  [10, 19],
  [4, 18],
];
var expected = 4;
var result = scheduleCourse(courses);
console.log(result, expected, result === expected);
