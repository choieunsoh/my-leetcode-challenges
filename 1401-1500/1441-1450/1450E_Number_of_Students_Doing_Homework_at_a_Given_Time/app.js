// 1450. Number of Students Doing Homework at a Given Time
// https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (queryTime >= startTime[i] && queryTime <= endTime[i]) count++;
  }
  return count;
};

var startTime = [1, 2, 3],
  endTime = [3, 2, 7],
  queryTime = 4;
var expected = 1;
var result = busyStudent(startTime, endTime, queryTime);
console.log(result, result === expected);

var startTime = [4],
  endTime = [4],
  queryTime = 4;
var expected = 1;
var result = busyStudent(startTime, endTime, queryTime);
console.log(result, result === expected);
