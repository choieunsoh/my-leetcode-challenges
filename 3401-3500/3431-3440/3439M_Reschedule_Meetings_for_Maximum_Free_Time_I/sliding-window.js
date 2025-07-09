// 3439. Reschedule Meetings for Maximum Free Time I
// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} eventTime
 * @param {number} k
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, k, startTime, endTime) {
  const n = startTime.length;
  let result = 0;
  let time = 0;
  for (let i = 0; i < n; i++) {
    time += endTime[i] - startTime[i];
    const left = i <= k - 1 ? 0 : endTime[i - k];
    const right = i === n - 1 ? eventTime : startTime[i + 1];
    result = Math.max(result, right - left - time);
    if (i >= k - 1) {
      time -= endTime[i - k + 1] - startTime[i - k + 1];
    }
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
