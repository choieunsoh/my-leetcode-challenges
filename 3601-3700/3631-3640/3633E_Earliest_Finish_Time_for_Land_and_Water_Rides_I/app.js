// 3633. Earliest Finish Time for Land and Water Rides I
// https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i/description/
// T.C.: O(n + m)
// S.C.: O(1)
/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function (landStartTime, landDuration, waterStartTime, waterDuration) {
  const n = landStartTime.length;
  const m = waterStartTime.length;
  let result = Number.MAX_SAFE_INTEGER;

  let minLandFinishTime = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    minLandFinishTime = Math.min(minLandFinishTime, landStartTime[i] + landDuration[i]);
  }
  for (let i = 0; i < m; i++) {
    result = Math.min(result, waterDuration[i] + Math.max(minLandFinishTime, waterStartTime[i]));
  }

  let minWaterFinishTime = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < m; i++) {
    minWaterFinishTime = Math.min(minWaterFinishTime, waterStartTime[i] + waterDuration[i]);
  }
  for (let i = 0; i < n; i++) {
    result = Math.min(result, landDuration[i] + Math.max(minWaterFinishTime, landStartTime[i]));
  }

  return result;
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

var landStartTime = [99],
  landDuration = [59],
  waterStartTime = [99, 54],
  waterDuration = [85, 20];
var expected = 158;
var result = earliestFinishTime(landStartTime, landDuration, waterStartTime, waterDuration);
console.log(result, result === expected);
