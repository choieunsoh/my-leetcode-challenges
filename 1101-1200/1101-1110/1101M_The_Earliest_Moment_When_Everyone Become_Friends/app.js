// 1101. The Earliest Moment When Everyone Become Friends
// https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  logs.sort((a, b) => a[0] - b[0]);
  const dict = [];
  for (let i = 0; i < n; i++) {
    dict.push([i]);
  }
  for (const log of logs) {
    const [ts, a, b] = log;
    if (!dict[a].includes(b)) {
      const group = [...dict[a], ...dict[b]];
      for (const i of group) {
        dict[i] = group;
      }
    }
    if (dict[a].length === n) return ts;
  }
  return -1;
};

var logs = [
    [20190101, 0, 1],
    [20190104, 3, 4],
    [20190107, 2, 3],
    [20190211, 1, 5],
    [20190224, 2, 4],
    [20190301, 0, 3],
    [20190312, 1, 2],
    [20190322, 4, 5],
  ],
  n = 6;
var expected = 20190301;
var result = earliestAcq(logs, n);
console.log(result, result === expected);

var logs = [
    [0, 2, 0],
    [1, 0, 1],
    [3, 0, 3],
    [4, 1, 2],
    [7, 3, 1],
  ],
  n = 4;
var expected = 3;
var result = earliestAcq(logs, n);
console.log(result, result === expected);
