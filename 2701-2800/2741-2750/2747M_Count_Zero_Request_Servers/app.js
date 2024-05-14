// 2747. Count Zero Request Servers
// https://leetcode.com/problems/count-zero-request-servers/description/
// T.C.: O(m log m + k log k + n)
// S.C.: O(n + m)
/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function (n, logs, x, queries) {
  queries = queries.map((query, i) => [query, i]).sort((a, b) => a[0] - b[0]);
  logs.sort((a, b) => a[1] - b[1]);

  let left = 0;
  let right = 0;
  let activeServers = 0;
  const counts = new Array(n + 1).fill(0);
  const result = new Array(queries.length).fill(0);
  for (const [endTime, index] of queries) {
    while (right < logs.length && logs[right][1] <= endTime) {
      const [serverId] = logs[right++];
      counts[serverId]++;
      if (counts[serverId] === 1) activeServers++;
    }

    const startTime = endTime - x;
    while (left < right && logs[left][1] < startTime) {
      const [serverId] = logs[left++];
      counts[serverId]--;
      if (counts[serverId] === 0) activeServers--;
    }

    result[index] = n - activeServers;
  }
  return result;
};

var n = 3,
  logs = [
    [1, 3],
    [2, 6],
    [1, 5],
  ],
  x = 5,
  queries = [10, 11];
var expected = [1, 2];
var result = countServers(n, logs, x, queries);
console.log(result, result.join() === expected.join());

var n = 3,
  logs = [
    [2, 4],
    [2, 1],
    [1, 2],
    [3, 1],
  ],
  x = 2,
  queries = [3, 4];
var expected = [0, 1];
var result = countServers(n, logs, x, queries);
console.log(result, result.join() === expected.join());
