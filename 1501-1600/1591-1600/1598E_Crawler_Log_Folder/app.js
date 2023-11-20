// 1598. Crawler Log Folder
// https://leetcode.com/problems/crawler-log-folder/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
  let stack = 0;
  for (const log of logs) {
    if (log === '../') {
      if (stack > 0) stack--;
    } else if (log !== './') {
      stack++;
    }
  }
  return stack;
};

var logs = ['d1/', 'd2/', '../', 'd21/', './'];
var expected = 2;
var result = minOperations(logs);
console.log(result, result === expected);

var logs = ['d1/', 'd2/', './', 'd3/', '../', 'd31/'];
var expected = 3;
var result = minOperations(logs);
console.log(result, result === expected);

var logs = ['d1/', '../', '../', '../'];
var expected = 0;
var result = minOperations(logs);
console.log(result, result === expected);
