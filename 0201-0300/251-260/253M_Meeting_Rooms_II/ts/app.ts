// 253. Meeting Rooms II
// https://leetcode.com/problems/meeting-rooms-ii/
// T.C.: O(N log N)
// S.C.: O(N)
var minMeetingRooms = function (intervals: number[][]): number {
  let usedRooms = 0;
  const startIntervals = intervals.map(([start]) => start).sort((a, b) => a - b);
  const endIntervals = intervals.map(([, end]) => end).sort((a, b) => a - b);
  let startIndex = 0;
  let endIndex = 0;
  while (startIndex < intervals.length) {
    if (startIntervals[startIndex] >= endIntervals[endIndex]) {
      usedRooms--;
      endIndex++;
    }

    usedRooms++;
    startIndex++;
  }
  return usedRooms;
};

var intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
var expected = 2;
var result = minMeetingRooms(intervals);
console.log(result, result === expected);

var intervals = [
  [7, 10],
  [2, 4],
];
var expected = 1;
var result = minMeetingRooms(intervals);
console.log(result, result === expected);

var intervals = [
  [2, 11],
  [6, 16],
  [11, 16],
];
var expected = 2;
var result = minMeetingRooms(intervals);
console.log(result, result === expected);
