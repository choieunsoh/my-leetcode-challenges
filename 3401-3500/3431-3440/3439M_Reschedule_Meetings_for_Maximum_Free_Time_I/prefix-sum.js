// 3439. Reschedule Meetings for Maximum Free Time I
// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  let n = startTime.length;
  let result = 0;
  const sum = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + endTime[i] - startTime[i];
  }

  for (let i = k - 1; i < n; i++) {
    const right = i === n - 1 ? eventTime : startTime[i + 1];
    const left = i === k - 1 ? 0 : endTime[i - k];
    const time = sum[i + 1] - sum[i - k + 1];
    result = Math.max(result, right - left - time);
  }
  return result;
};

var eventTime = 5,
  k = 1,
  startTime = [1, 3],
  endTime = [2, 5];
var expected = 2;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  k = 1,
  startTime = [0, 2, 9],
  endTime = [1, 4, 10];
var expected = 6;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);

var eventTime = 5,
  k = 2,
  startTime = [0, 1, 2, 3, 4],
  endTime = [1, 2, 3, 4, 5];
var expected = 0;
var result = maxFreeTime(eventTime, k, startTime, endTime);
console.log(result, result === expected);
