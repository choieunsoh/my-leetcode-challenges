// 2402. Meeting Rooms III
// https://leetcode.com/problems/meeting-rooms-iii/description/
// T.C.: O(m log m + m log n)
// S.C.: O(n)
const { PriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  const meetingCount = new Array(n).fill(0);
  const usedRooms = new PriorityQueue((a, b) => a[0] - b[0] || a[1] - b[1]);
  const unusedRooms = new MinPriorityQueue();

  for (let i = 0; i < n; i++) {
    unusedRooms.enqueue(i);
  }

  meetings.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  for (const [start, end] of meetings) {
    while (!usedRooms.isEmpty() && usedRooms.front()[0] <= start) {
      const room = usedRooms.dequeue()[1];
      unusedRooms.enqueue(room);
    }

    if (!unusedRooms.isEmpty()) {
      const room = unusedRooms.dequeue();
      usedRooms.enqueue([end, room]);
      meetingCount[room]++;
    } else {
      const roomAvailabilityTime = usedRooms.front()[0];
      const room = usedRooms.dequeue()[1];
      usedRooms.enqueue([roomAvailabilityTime + end - start, room]);
      meetingCount[room]++;
    }
  }

  let maxMeetingCountRoom = 0;
  let maxMeetingCount = 0;
  for (let i = 0; i < n; i++) {
    if (meetingCount[i] > maxMeetingCount) {
      maxMeetingCount = meetingCount[i];
      maxMeetingCountRoom = i;
    }
  }
  return maxMeetingCountRoom;
};

var n = 2,
  meetings = [
    [0, 10],
    [1, 5],
    [2, 7],
    [3, 4],
  ];
var expected = 0;
var result = mostBooked(n, meetings);
console.log(result, result === expected);

var n = 3,
  meetings = [
    [1, 20],
    [2, 10],
    [3, 5],
    [4, 9],
    [6, 8],
  ];
var expected = 1;
var result = mostBooked(n, meetings);
console.log(result, result === expected);
