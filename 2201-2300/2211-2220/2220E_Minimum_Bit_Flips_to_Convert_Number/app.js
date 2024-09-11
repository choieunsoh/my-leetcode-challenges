// 2220. Minimum Bit Flips to Convert Number
// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/
// Brian Kernighan’s Algorithm
// T.C.: O(1)
// S.C.: O(1)
/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  let flips = 0;
  let xor = start ^ goal;
  while (xor) {
    flips++;
    xor &= xor - 1;
  }
  return flips;
};

var start = 10,
  goal = 7;
var expected = 3;
var result = minBitFlips(start, goal);
console.log(result, result === expected);

var start = 3,
  goal = 4;
var expected = 3;
var result = minBitFlips(start, goal);
console.log(result, result === expected);
