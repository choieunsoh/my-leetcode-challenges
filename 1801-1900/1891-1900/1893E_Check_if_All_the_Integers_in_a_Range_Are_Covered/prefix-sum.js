// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// 1893. Check if All the Integers in a Range Are Covered
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  let max = 0;
  for (let i = 0; i < ranges.length; i++) {
    max = Math.max(max, ranges[i][1]);
  }

  const diff = Array(max + 2).fill(0);
  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    diff[start]++;
    diff[end + 1]--;
  }

  for (let i = 1; i < diff.length; i++) {
    diff[i] += diff[i - 1];
  }

  for (let i = left; i <= right; i++) {
    if ((diff[i] ?? 0) === 0) return false;
  }
  return true;
};

var ranges = [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  left = 2,
  right = 5;
var expected = true;
var result = isCovered(ranges, left, right);
console.log(result, result === expected);

var ranges = [
    [1, 10],
    [10, 20],
  ],
  left = 21,
  right = 21;
var expected = false;
var result = isCovered(ranges, left, right);
console.log(result, result === expected);

var ranges = [[1, 50]],
  left = 1,
  right = 50;
var expected = true;
var result = isCovered(ranges, left, right);
console.log(result, result === expected);

var ranges = [[50, 50]],
  left = 1,
  right = 50;
var expected = false;
var result = isCovered(ranges, left, right);
console.log(result, result === expected);
