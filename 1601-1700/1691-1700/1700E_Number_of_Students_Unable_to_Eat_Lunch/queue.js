// 1700. Number of Students Unable to Eat Lunch
// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
  let studentIndex = 0;
  let sandwichIndex = 0;
  let result = 0;
  while (studentIndex < students.length) {
    if (result === students.length - studentIndex) break;
    if (sandwiches[sandwichIndex] === students[studentIndex]) {
      sandwichIndex++;
      result = 0;
    } else {
      students.push(students[studentIndex]);
      result++;
    }
    studentIndex++;
  }
  return result;
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
