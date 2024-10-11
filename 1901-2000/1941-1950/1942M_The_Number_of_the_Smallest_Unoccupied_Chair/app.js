// 1942. The Number of the Smallest Unoccupied Chair
// https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/description/
// T.C.: O(n log n)
// S.C.: O(n)
const { MinPriorityQueue } = require('@datastructures-js/priority-queue');
/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
  const n = times.length;
  const events = [];
  for (let i = 0; i < n; i++) {
    events.push([times[i][0], i]);
    events.push([times[i][1], -i]);
  }

  events.sort((a, b) => a[0] - b[0]);

  const availableChairs = new MinPriorityQueue({ priority: (x) => x });
  for (let i = 0; i < n; i++) {
    availableChairs.enqueue(i);
  }

  const occupiedChairs = new MinPriorityQueue({ priority: (x) => x[0] });
  for (const [time, friendIndex] of events) {
    while (!occupiedChairs.isEmpty() && occupiedChairs.front().element[0] <= time) {
      availableChairs.enqueue(occupiedChairs.dequeue().element[1]);
    }

    if (friendIndex < 0) continue;

    const chair = availableChairs.dequeue().element;
    if (friendIndex === targetFriend) {
      return chair;
    }
    occupiedChairs.enqueue([times[friendIndex][1], chair]);
  }

  return -1;
};

var times = [
    [1, 4],
    [2, 3],
    [4, 6],
  ],
  targetFriend = 1;
var expected = 1;
var result = smallestChair(times, targetFriend);
console.log(result, result === expected);

var times = [
    [3, 10],
    [1, 5],
    [2, 6],
  ],
  targetFriend = 0;
var expected = 2;
var result = smallestChair(times, targetFriend);
console.log(result, result === expected);
