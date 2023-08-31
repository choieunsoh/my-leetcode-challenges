// 1326. Minimum Number of Taps to Open to Water a Garden
// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function (n, ranges) {
  const gardens = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    const from = Math.max(0, i - ranges[i]);
    const to = Math.min(n, i + ranges[i]);
    gardens[from] = Math.max(gardens[from], to);
  }

  let result = 0;
  let currEnd = 0;
  let nextEnd = 0;
  for (let i = 0; i <= n; i++) {
    if (i > nextEnd) {
      return -1;
    }
    if (i > currEnd) {
      result++;
      currEnd = nextEnd;
    }
    nextEnd = Math.max(nextEnd, gardens[i]);
  }
  return result;
};

var n = 5,
  ranges = [3, 4, 1, 1, 0, 0];
var expected = 1;
var result = minTaps(n, ranges);
console.log(result, result === expected);

var n = 3,
  ranges = [0, 0, 0, 0];
var expected = -1;
var result = minTaps(n, ranges);
console.log(result, result === expected);
