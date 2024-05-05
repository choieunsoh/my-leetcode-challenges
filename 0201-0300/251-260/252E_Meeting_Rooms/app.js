// 252. Meeting Rooms
// https://leetcode.com/problems/meeting-rooms/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i - 1][1] > intervals[i][0]) return false;
  }
  return true;
};

var intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
var expected = false;
var result = canAttendMeetings(intervals);
console.log(result, result === expected);

var intervals = [
  [7, 10],
  [2, 4],
];
var expected = true;
var result = canAttendMeetings(intervals);
console.log(result, result === expected);
