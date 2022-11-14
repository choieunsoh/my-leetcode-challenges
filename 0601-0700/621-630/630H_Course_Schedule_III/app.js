// 630. Course Schedule III
// https://leetcode.com/problems/course-schedule-iii/
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
  courses.sort((a, b) => b[1] - a[1]);

  const arr = Array(courses.length + 1).fill(-1);
  arr[0] = Number.MAX_SAFE_INTEGER;
  let maxCount = 0;
  for (let i = 0; i < courses.length; i++) {
    const [duration, end] = courses[i];
    for (let j = maxCount + 1; j > 0; j--) {
      arr[j] = Math.max(arr[j], Math.min(arr[j - 1], end) - duration);
      if (arr[j] !== -1 && j > maxCount) maxCount = j;
    }
  }

  return maxCount;
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
