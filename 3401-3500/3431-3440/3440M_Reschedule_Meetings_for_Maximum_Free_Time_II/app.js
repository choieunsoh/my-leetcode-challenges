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
  const freeTime = [];
  let currTime = 0;
  for (let i = 0; i < startTime.length; i++) {
    freeTime.push([currTime, startTime[i]]);
    currTime = endTime[i];
  }
  freeTime.push([currTime, eventTime]);

  const maxFreeTimeRight = [0];
  for (let i = freeTime.length - 1; i >= 0; i--) {
    maxFreeTimeRight.push(Math.max(maxFreeTimeRight[maxFreeTimeRight.length - 1], freeTime[i][1] - freeTime[i][0]));
  }

  let maxFreeTimeLeft = 0;
  let maxFreeTime = 0;
  for (let i = 0; i < freeTime.length - 1; i++) {
    const curr = freeTime[i][1] - freeTime[i][0];
    const next = freeTime[i + 1][1] - freeTime[i + 1][0];
    maxFreeTime = Math.max(maxFreeTime, curr + next);

    const meetingTime = freeTime[i + 1][0] - freeTime[i][1];
    const maxOutsideGap = Math.max(maxFreeTimeLeft, maxFreeTimeRight[freeTime.length - 2 - i]);
    if (maxOutsideGap >= meetingTime) {
      maxFreeTime = Math.max(maxFreeTime, curr + next + meetingTime);
    }
    maxFreeTimeLeft = Math.max(maxFreeTimeLeft, curr);
  }

  return maxFreeTime;
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
