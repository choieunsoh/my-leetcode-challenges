// 1700. Number of Students Unable to Eat Lunch
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  const n = students.length;
  let wantSquareSandwich = students.reduce((sum, num) => sum + num, 0);
  let wantCircleSandwich = n - wantSquareSandwich;
  for (let i = 0; i < n; i++) {
    if (sandwiches[i]) {
      wantSquareSandwich--;
    } else {
      wantCircleSandwich--;
    }
    if (wantCircleSandwich < 0 || wantSquareSandwich < 0) return n - i;
  }
  return 0;
};

var students = [1, 1, 0, 0],
  sandwiches = [0, 1, 0, 1];
var expected = 0;
var result = countStudents(students, sandwiches);
console.log(result, result === expected);

var students = [1, 1, 1, 0, 0, 1],
  sandwiches = [1, 0, 0, 0, 1, 1];
var expected = 3;
var result = countStudents(students, sandwiches);
console.log(result, result === expected);
