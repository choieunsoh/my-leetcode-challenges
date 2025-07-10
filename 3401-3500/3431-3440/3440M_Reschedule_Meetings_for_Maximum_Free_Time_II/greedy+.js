// 3440. Reschedule Meetings for Maximum Free Time II
// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} eventTime
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTime, endTime) {
  const n = startTime.length;
  const q = new Array(n).fill(false);
  let t1 = 0;
  let t2 = 0;
  for (let i = 0; i < n; i++) {
    if (endTime[i] - startTime[i] <= t1) {
      q[i] = true;
    }
    t1 = Math.max(t1, startTime[i] - (i === 0 ? 0 : endTime[i - 1]));

    if (endTime[n - i - 1] - startTime[n - i - 1] <= t2) {
      q[n - i - 1] = true;
    }
    t2 = Math.max(t2, (i === 0 ? eventTime : startTime[n - i]) - endTime[n - i - 1]);
  }

  let result = 0;
  for (let i = 0; i < n; i++) {
    const left = i === 0 ? 0 : endTime[i - 1];
    const right = i === n - 1 ? eventTime : startTime[i + 1];
    if (q[i]) {
      result = Math.max(result, right - left);
    } else {
      result = Math.max(result, right - left - (endTime[i] - startTime[i]));
    }
  }
  return result;
};

var eventTime = 5,
  startTime = [1, 3],
  endTime = [2, 5];
var expected = 2;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  startTime = [0, 7, 9],
  endTime = [1, 8, 10];
var expected = 7;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 10,
  startTime = [0, 3, 7, 9],
  endTime = [1, 4, 8, 10];
var expected = 6;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);

var eventTime = 5,
  startTime = [0, 1, 2, 3, 4],
  endTime = [1, 2, 3, 4, 5];
var expected = 0;
var result = maxFreeTime(eventTime, startTime, endTime);
console.log(result, result === expected);
