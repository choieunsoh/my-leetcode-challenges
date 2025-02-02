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
  const n = startTime.length;

  // Calculate the prefix sum of event durations
  const prefix = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const duration = endTime[i - 1] - startTime[i - 1];
    prefix[i] = prefix[i - 1] + duration;
  }

  // Check the left candidate for free time
  let leftCandidate = 0;
  const limit = Math.min(k, n - 1);
  for (let i = 0; i <= limit; i++) {
    leftCandidate = Math.max(leftCandidate, startTime[i] - prefix[i]);
  }

  // Check the right candidate for free time
  let rightCandidate = 0;
  const start = Math.max(0, n - 1 - k);
  for (let i = start; i < n; i++) {
    const duration = endTime[i] + prefix[n] - prefix[i + 1];
    rightCandidate = Math.max(rightCandidate, eventTime - duration);
  }

  // Calculate X and Y for each event
  const X = new Array(n);
  const Y = new Array(n);
  for (let i = 0; i < n; i++) {
    X[i] = startTime[i] - prefix[i];
    Y[i] = endTime[i] - prefix[i + 1];
  }

  // Use deque to find middle candidate for free time
  let middleCandidate = 0;
  const deque = [];
  for (let right = 1; right < n; right++) {
    const left = Math.max(0, right - k - 1);
    while (deque.length && deque[0] < left) deque.shift();
    while (deque.length && Y[deque[deque.length - 1]] >= Y[right - 1]) deque.pop();

    deque.push(right - 1);

    const candidate = X[right] - Y[deque[0]];
    middleCandidate = Math.max(middleCandidate, candidate);
  }

  const candidateAll = k === n ? eventTime - prefix[n] : 0;

  // Combine all candidates to find the maximum free time
  return Math.max(0, leftCandidate, rightCandidate, middleCandidate, candidateAll);
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
