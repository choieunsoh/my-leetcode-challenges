// 1376. Time Needed to Inform All Employees
// https://leetcode.com/problems/time-needed-to-inform-all-employees/
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
  let totalTime = 0;
  for (let employeeID = 0; employeeID < n; employeeID++) {
    totalTime = Math.max(totalTime, dfs(employeeID));
  }
  return totalTime;

  function dfs(employeeID) {
    if (manager[employeeID] === -1) return informTime[employeeID];
    informTime[employeeID] += dfs(manager[employeeID]);
    manager[employeeID] = -1;
    return informTime[employeeID];
  }
};

var n = 6,
  headID = 2,
  manager = [2, 2, -1, 2, 2, 4],
  informTime = [0, 0, 1, 0, 0, 2];
var expected = 3;
var result = numOfMinutes(n, headID, manager, informTime);
console.log(result, result === expected);

var n = 6,
  headID = 2,
  manager = [2, 2, -1, 2, 2, 2],
  informTime = [0, 0, 1, 0, 0, 0];
var expected = 1;
var result = numOfMinutes(n, headID, manager, informTime);
console.log(result, result === expected);

var n = 1,
  headID = 0,
  manager = [-1],
  informTime = [0];
var expected = 0;
var result = numOfMinutes(n, headID, manager, informTime);
console.log(result, result === expected);
