// 4020. Elevator Requests I
// https://leetcode.com/problems/elevator-requests-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number[]} requests
 * @return {number}
 */
var elevatorRequests = function (n, requests) {
  let seconds = requests[0];
  for (let i = 1; i < requests.length; i++) {
    seconds += Math.abs(requests[i] - requests[i - 1]);
  }
  return seconds;
};

var n = 5,
  requests = [2, 1, 4, 3];
var expected = 7;
var result = elevatorRequests(n, requests);
console.log(result, result === expected);

var n = 3,
  requests = [2, 0, 0];
var expected = 4;
var result = elevatorRequests(n, requests);
console.log(result, result === expected);
