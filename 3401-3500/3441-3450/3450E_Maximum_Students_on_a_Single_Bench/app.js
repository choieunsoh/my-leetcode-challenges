// 3450. Maximum Students on a Single Bench
// https://leetcode.com/problems/maximum-students-on-a-single-bench/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[][]} students
 * @return {number}
 */
var maxStudentsOnBench = function (students) {
  if (students.length === 0) return 0;

  let maxStudents = 0;
  const counts = new Map();
  for (const [student, bench] of students) {
    if (!counts.has(bench)) {
      counts.set(bench, new Set());
    }
    counts.get(bench).add(student);
    maxStudents = Math.max(maxStudents, counts.get(bench).size);
  }
  return maxStudents;
};

var students = [
  [1, 2],
  [2, 2],
  [3, 3],
  [1, 3],
  [2, 3],
];
var expected = 3;
var result = maxStudentsOnBench(students);
console.log(result, result === expected);

var expected = (students = [
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 2],
  [5, 2],
]);
var expected = 3;
var result = maxStudentsOnBench(students);
console.log(result, result === expected);

var students = [
  [1, 1],
  [1, 1],
];
var expected = 1;
var result = maxStudentsOnBench(students);
console.log(result, result === expected);

var students = [];
var expected = 0;
var result = maxStudentsOnBench(students);
console.log(result, result === expected);
