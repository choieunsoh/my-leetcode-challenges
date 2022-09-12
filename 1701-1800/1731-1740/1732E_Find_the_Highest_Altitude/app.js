// https://leetcode.com/problems/find-the-highest-altitude/
// 1732. Find the Highest Altitude
/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let highest = Number.MIN_SAFE_INTEGER;
  let altitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude += gain[i];
    if (altitude > highest) highest = altitude;
  }
  return Math.max(0, highest);
};

var gain = [-5, 1, 5, 0, -7];
var expected = 1;
var result = largestAltitude(gain);
console.log(result, expected, result === expected);

var gain = [-4, -3, -2, -1, 4, 3, 2];
var expected = 0;
var result = largestAltitude(gain);
console.log(result, expected, result === expected);
