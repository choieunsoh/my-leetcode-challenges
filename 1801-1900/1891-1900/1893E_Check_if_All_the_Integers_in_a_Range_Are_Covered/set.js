// https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/
// 1893. Check if All the Integers in a Range Are Covered
/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const nums = new Set();
  for (let i = 0; i < ranges.length; i++) {
    const [start, end] = ranges[i];
    for (let j = start; j <= end; j++) {
      nums.add(j);
    }
  }

  for (let i = left; i <= right; i++) {
    if (!nums.has(i)) return false;
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
