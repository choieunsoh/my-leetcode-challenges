// 757. Set Intersection Size At Least Two
// https://leetcode.com/problems/set-intersection-size-at-least-two/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var intersectionSizeTwo = function (intervals) {
  let result = 0;
  let end1 = -1;
  let end2 = -1;
  const n = intervals.length;
  intervals.sort((a, b) => a[1] - b[1] || b[0] - a[0]);
  for (const [start, end] of intervals) {
    if (start > end2) {
      result += 2;
      end1 = end - 1;
      end2 = end;
    } else if (start > end1) {
      result++;
      end1 = end2;
      end2 = end;
    }
  }
  return result;
};

var intervals = [
  [1, 3],
  [3, 7],
  [8, 9],
];
var expected = 5;
var result = intersectionSizeTwo(intervals);
console.log(result, result === expected);

var intervals = [
  [1, 3],
  [1, 4],
  [2, 5],
  [3, 5],
];
var expected = 3;
var result = intersectionSizeTwo(intervals);
console.log(result, result === expected);

var intervals = [
  [1, 2],
  [2, 3],
  [2, 4],
  [4, 5],
];
var expected = 5;
var result = intersectionSizeTwo(intervals);
console.log(result, result === expected);
