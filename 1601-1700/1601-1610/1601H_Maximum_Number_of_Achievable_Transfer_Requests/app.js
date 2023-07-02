// 1601. Maximum Number of Achievable Transfer Requests
// https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
var maximumRequests = function (n, requests) {
  let result = 0;
  const indegree = new Array(n).fill(0);
  backtracking(0, 0);
  return result;

  function backtracking(index, count) {
    if (index === requests.length) {
      if (indegree.some((value) => value > 0)) return;

      result = Math.max(result, count);
      return;
    }

    const [from, to] = requests[index];
    indegree[from]--;
    indegree[to]++;
    backtracking(index + 1, count + 1);
    indegree[from]++;
    indegree[to]--;

    backtracking(index + 1, count);
  }
};

var n = 5,
  requests = [
    [0, 1],
    [1, 0],
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
  ];
var expected = 5;
var result = maximumRequests(n, requests);
console.log(result, result === expected);

var n = 3,
  requests = [
    [0, 0],
    [1, 2],
    [2, 1],
  ];
var expected = 3;
var result = maximumRequests(n, requests);
console.log(result, result === expected);

var n = 4,
  requests = [
    [0, 3],
    [3, 1],
    [1, 2],
    [2, 0],
  ];
var expected = 4;
var result = maximumRequests(n, requests);
console.log(result, result === expected);
