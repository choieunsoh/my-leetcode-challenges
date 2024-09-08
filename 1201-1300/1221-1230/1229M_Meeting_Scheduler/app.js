// 1229. Meeting Scheduler
// https://leetcode.com/problems/meeting-scheduler/description/
// T.C.: O(n log n + m log m)
// S.C.: O(1)
/**
 * @param {number[][]} slots1
 * @param {number[][]} slots2
 * @param {number} duration
 * @return {number[]}
 */
var minAvailableDuration = function (slots1, slots2, duration) {
  const n1 = slots1.length;
  const n2 = slots2.length;
  let index1 = 0;
  let index2 = 0;

  slots1.sort((a, b) => a[0] - b[0]);
  slots2.sort((a, b) => a[0] - b[0]);

  while (index1 < n1 && index2 < n2) {
    const [start1, end1] = slots1[index1];
    const [start2, end2] = slots2[index2];
    const start = Math.max(start1, start2);
    const end = Math.min(end1, end2);
    if (end - start >= duration) {
      return [start, start + duration];
    }

    if (end1 < end2) {
      index1++;
    } else if (end1 > end2) {
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return [];
};

var slots1 = [
    [10, 50],
    [60, 120],
    [140, 210],
  ],
  slots2 = [
    [0, 15],
    [60, 70],
  ],
  duration = 8;
var expected = [60, 68];
var result = minAvailableDuration(slots1, slots2, duration);
console.log(result, expected.join() === result.join());

var slots1 = [
    [10, 50],
    [60, 120],
    [140, 210],
  ],
  slots2 = [
    [0, 15],
    [60, 70],
  ],
  duration = 12;
var expected = [];
var result = minAvailableDuration(slots1, slots2, duration);
console.log(result, expected.join() === result.join());
