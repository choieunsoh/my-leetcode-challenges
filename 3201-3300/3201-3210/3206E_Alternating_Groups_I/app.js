// 3206. Alternating Groups I
// https://leetcode.com/problems/alternating-groups-i/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
  let count = 0;
  const n = colors.length;
  for (let i = 0; i < n; i++) {
    const left = colors[i];
    const middle = colors[(i + 1) % n];
    const right = colors[(i + 2) % n];
    if (left !== middle && middle !== right) {
      count++;
    }
  }
  return count;
};

var colors = [1, 1, 1];
var expected = 0;
var result = numberOfAlternatingGroups(colors);
console.log(result, result === expected);

var colors = [0, 1, 0, 0, 1];
var expected = 3;
var result = numberOfAlternatingGroups(colors);
console.log(result, result === expected);
