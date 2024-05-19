// 2021. Brightest Position on Street
// https://leetcode.com/problems/brightest-position-on-street/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[][]} lights
 * @return {number}
 */
var brightestPosition = function (lights) {
  const ranges = new Map();
  for (const [position, range] of lights) {
    const startPosition = position - range;
    const endPosition = position + range + 1;
    if (!ranges.has(startPosition)) ranges.set(startPosition, 0);
    if (!ranges.has(endPosition)) ranges.set(endPosition, 0);
    ranges.set(startPosition, ranges.get(startPosition) + 1);
    ranges.set(endPosition, ranges.get(endPosition) - 1);
  }

  let result = 0;
  let totalLambs = 0;
  let maxLambs = Number.MIN_SAFE_INTEGER;
  const positions = Array.from(ranges.keys()).sort((a, b) => a - b);
  for (const position of positions) {
    totalLambs += ranges.get(position);
    if (totalLambs > maxLambs) {
      maxLambs = totalLambs;
      result = position;
    }
  }
  return result;
};

var lights = [
  [-3, 2],
  [1, 2],
  [3, 3],
];
var expected = -1;
var result = brightestPosition(lights);
console.log(result, result === expected);

var lights = [
  [1, 0],
  [0, 1],
];
var expected = 1;
var result = brightestPosition(lights);
console.log(result, result === expected);

var lights = [[1, 2]];
var expected = -1;
var result = brightestPosition(lights);
console.log(result, result === expected);
