// 2798. Number of Employees Who Met the Target
// https://leetcode.com/problems/number-of-employees-who-met-the-target
/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
  let count = 0;
  for (const hour of hours) {
    if (hour >= target) count++;
  }
  return count;
};

var hours = [0, 1, 2, 3, 4],
  target = 2;
var expected = 3;
var result = numberOfEmployeesWhoMetTarget(hours, target);
console.log(result, result === expected);

var hours = [5, 1, 4, 2, 2],
  target = 6;
var expected = 0;
var result = numberOfEmployeesWhoMetTarget(hours, target);
console.log(result, result === expected);
