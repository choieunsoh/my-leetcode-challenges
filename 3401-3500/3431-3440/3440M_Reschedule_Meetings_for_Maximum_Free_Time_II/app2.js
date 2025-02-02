// 3440. Reschedule Meetings for Maximum Free Time II
// https://leetcode.com/problems/reschedule-meetings-for-maximum-free-time-ii/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {number} eventTime
 * @param {number[]} startTimes
 * @param {number[]} endTimes
 * @return {number}
 */
var maxFreeTime = function (eventTime, startTimes, endTimes) {
  const len = startTimes.length;
  const lenPlus1 = len + 1;
  const gaps = [];
  let prev = 0;
  for (const [i, startTime] of startTimes.entries()) {
    const endTime = endTimes[i];
    gaps.push(startTime - prev);
    prev = endTime;
  }
  gaps.push(eventTime - prev);

  const maxGapFL = new Array(lenPlus1);
  const maxGapFR = new Array(lenPlus1 + 1);
  maxGapFL[-1] = maxGapFR[lenPlus1] = 0;
  for (let i = 0; i < lenPlus1; i++) {
    maxGapFL[i] = Math.max(gaps[i], maxGapFL[i - 1]);
  }
  for (let i = lenPlus1 - 1; i > -1; i--) {
    maxGapFR[i] = Math.max(gaps[i], maxGapFR[i + 1]);
  }

  let result = 0;
  for (let i = 0; i < len; i++) {
    const startTime = startTimes[i];
    const endTime = endTimes[i];
    const duration = endTime - startTime;
    const left = i > 0 ? endTimes[i - 1] : 0;
    const right = i + 1 < len ? startTimes[i + 1] : eventTime;

    const totalSpace = right - left;
    let outcome = totalSpace - duration;
    if (maxGapFL[i - 1] >= duration || maxGapFR[i + 2] >= duration) {
      // can move elsewhere
      outcome = totalSpace;
    }

    result = Math.max(result, outcome);
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
