// 2402. Meeting Rooms III
// https://leetcode.com/problems/meeting-rooms-iii/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number} n
 * @param {number[][]} meetings
 * @return {number}
 */
var mostBooked = function (n, meetings) {
  const roomAvailabilityTime = new Array(n).fill(0);
  const meetingCount = new Array(n).fill(0);
  meetings.sort((a, b) => a[0] - b[0]);
  for (const [start, end] of meetings) {
    let minRoomAvailabilityTime = Number.MAX_SAFE_INTEGER;
    let minAvailableTimeRoom = 0;
    let foundUnusedRoom = false;
    for (let i = 0; i < n; i++) {
      if (roomAvailabilityTime[i] <= start) {
        foundUnusedRoom = true;
        meetingCount[i]++;
        roomAvailabilityTime[i] = end;
        break;
      }

      if (minRoomAvailabilityTime > roomAvailabilityTime[i]) {
        minRoomAvailabilityTime = roomAvailabilityTime[i];
        minAvailableTimeRoom = i;
      }
    }

    if (!foundUnusedRoom) {
      roomAvailabilityTime[minAvailableTimeRoom] += end - start;
      meetingCount[minAvailableTimeRoom]++;
    }
  }

  let maxMeetingCount = 0;
  let maxMeetingCountRoom = 0;
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
