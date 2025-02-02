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
  const freeTime = [];
  let currTime = 0;
  for (let i = 0; i < startTime.length; i++) {
    freeTime.push(startTime[i] - currTime);
    currTime = endTime[i];
  }

  if (currTime < eventTime) {
    freeTime.push(eventTime - currTime);
  }

  let maxFreeTime = 0;
  let currFreeTime = 0;
  for (let right = 0; right < freeTime.length; right++) {
    currFreeTime += freeTime[right];

    if (right > k) {
      const left = right - k - 1;
      currFreeTime -= freeTime[left];
    }

    maxFreeTime = Math.max(maxFreeTime, currFreeTime);
  }

  return maxFreeTime;
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
