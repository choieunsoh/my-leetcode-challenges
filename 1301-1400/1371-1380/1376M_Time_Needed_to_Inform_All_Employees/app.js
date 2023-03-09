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
  const org = Array.from({ length: n }, () => []);
  for (let employeeID = 0; employeeID < n; employeeID++) {
    const managerID = manager[employeeID];
    if (managerID !== -1) org[managerID].push(employeeID);
  }

  let totalTime = 0;
  let queue = [[headID, informTime[headID]]];
  while (queue.length) {
    const newQueue = [];
    for (let i = 0; i < queue.length; i++) {
      const [managerID, time] = queue[i];
      const employees = org[managerID];
      for (let j = 0; j < employees.length; j++) {
        const employeeID = employees[j];
        const currentTime = time + informTime[employeeID];
        newQueue.push([employeeID, currentTime]);
        totalTime = Math.max(totalTime, currentTime);
      }
    }
    queue = newQueue;
  }
  return totalTime;
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
