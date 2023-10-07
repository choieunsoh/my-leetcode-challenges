// 436. Find Right Interval
// https://leetcode.com/problems/find-right-interval/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  const data = intervals.map(([start], index) => [start, index]).sort((a, b) => a[0] - b[0]);
  const result = new Array(intervals.length);
  for (let i = 0; i < intervals.length; i++) {
    const end = intervals[i][1];
    const index = search(end);
    result[i] = index;
  }
  return result;

  function search(target) {
    let left = 0;
    let right = data.length - 1;
    let result = -1;
    while (left <= right) {
      const mid = (left + right) >> 1;
      if (data[mid][0] >= target) {
        result = data[mid][1];
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return result;
  }
};

var intervals = [[1, 2]];
var expected = [-1];
var result = findRightInterval(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [3, 4],
  [2, 3],
  [1, 2],
];
var expected = [-1, 0, 1];
var result = findRightInterval(intervals);
console.log(result, result.join() === expected.join());

var intervals = [
  [1, 4],
  [2, 3],
  [3, 4],
];
var expected = [-1, 2, -1];
var result = findRightInterval(intervals);
console.log(result, result.join() === expected.join());
