// 3635. Earliest Finish Time for Land and Water Rides II
// https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-ii/description/
// T.C.: O(n+m)
// S.C.: O(1)
/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
  const land_water = solve(landStartTime, landDuration, waterStartTime, waterDuration);
  const water_land = solve(waterStartTime, waterDuration, landStartTime, landDuration);
  return Math.min(land_water, water_land);

  function solve(start1, duration1, start2, duration2) {
    let finish1 = Infinity;
    for (let i = 0; i < start1.length; i++) {
      finish1 = Math.min(finish1, start1[i] + duration1[i]);
    }
    let finish2 = Infinity;
    for (let i = 0; i < start2.length; i++) {
      finish2 = Math.min(finish2, Math.max(start2[i], finish1) + duration2[i]);
    }
    return finish2;
  }
};

var landStartTime = [2, 8],
  landDuration = [4, 1],
  waterStartTime = [6],
  waterDuration = [3];
var expected = 9;
var result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
console.log(result, result === expected);

var landStartTime = [5],
  landDuration = [3],
  waterStartTime = [1],
  waterDuration = [10];
var expected = 14;
var result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
console.log(result, result === expected);
