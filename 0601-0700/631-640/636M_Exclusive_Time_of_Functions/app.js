// 636. Exclusive Time of Functions
// https://leetcode.com/problems/exclusive-time-of-functions/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const stack = [];
  const result = new Array(n).fill(0);
  for (const log of logs) {
    const [id, func, time] = log.split(':');
    if (func === 'start') {
      stack.push([Number(id), Number(time)]);
    } else if (func === 'end') {
      const [currId, startTime] = stack.pop();
      const elapsedTime = Number(time) - startTime + 1;
      result[currId] += elapsedTime;
      if (stack.length) {
        const [prevId] = stack[stack.length - 1];
        result[prevId] -= elapsedTime;
      }
    }
  }
  return result;
};

var n = 2,
  logs = ['0:start:0', '1:start:2', '1:end:5', '0:end:6'];
var expected = [3, 4];
var result = exclusiveTime(n, logs);
console.log(result, result.join() === expected.join());

var n = 1,
  logs = ['0:start:0', '0:start:2', '0:end:5', '0:start:6', '0:end:6', '0:end:7'];
var expected = [8];
var result = exclusiveTime(n, logs);
console.log(result, result.join() === expected.join());

var n = 2,
  logs = ['0:start:0', '0:start:2', '0:end:5', '1:start:6', '1:end:6', '0:end:7'];
var expected = [7, 1];
var result = exclusiveTime(n, logs);
console.log(result, result.join() === expected.join());
