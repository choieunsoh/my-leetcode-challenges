// 3208. Alternating Groups II
// https://leetcode.com/problems/alternating-groups-ii/description/
// T.C.: O(n+k)
// S.C.: O(1)
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
  const n = colors.length;
  let count = 0;
  let alternatingCount = 1;
  let lastColor = colors[0];
  for (let i = 0; i < n + k - 1; i++) {
    const index = i % n;
    if (colors[index] === lastColor) {
      alternatingCount = 1;
      lastColor = colors[index];
      continue;
    }

    alternatingCount++;
    if (alternatingCount >= k) {
      count++;
    }

    lastColor = colors[index];
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
