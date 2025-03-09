// 3208. Alternating Groups II
// https://leetcode.com/problems/alternating-groups-ii/description/
// T.C.: O(n+k)
// S.C.: O(n+k)
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const circularColors = [...colors, ...colors.slice(0, k - 1)];
  const n = circularColors.length;
  let count = 0;
  let left = 0;
  let right = 1;
  while (right < n) {
    if (circularColors[right] === circularColors[right - 1]) {
      left = right;
      right++;
      continue;
    }

    right++;
    if (right - left < k) continue;

    count++;
    left++;
  }
  return count;
};

var colors = [0, 1, 0, 1, 0],
  k = 3;
var expected = 3;
var result = numberOfAlternatingGroups(colors, k);
console.log(result, result === expected);

var colors = [0, 1, 0, 0, 1, 0, 1],
  k = 6;
var expected = 2;
var result = numberOfAlternatingGroups(colors, k);
console.log(result, result === expected);

var colors = [1, 1, 0, 1],
  k = 4;
var expected = 0;
var result = numberOfAlternatingGroups(colors, k);
console.log(result, result === expected);
