// 1701. Average Waiting Time
// https://leetcode.com/problems/average-waiting-time/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let waitingTime = 0;
  let latestTime = -1;
  for (const [arrival, time] of customers) {
    latestTime = Math.max(latestTime, arrival);
    waitingTime += latestTime - arrival + time;
    latestTime += time;
  }

  const averageTime = waitingTime / customers.length;
  return averageTime;
};

var customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];
var expected = 5.0;
var result = averageWaitingTime(customers);
console.log(result, result === expected);

var customers = [
  [5, 2],
  [5, 4],
  [10, 3],
  [20, 1],
];
var expected = 3.25;
var result = averageWaitingTime(customers);
console.log(result, result === expected);
