// 1488. Avoid Flood in The City
// https://leetcode.com/problems/avoid-flood-in-the-city/description/
// T.C.: O(n log n)
// S.C.: O(n)
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const n = rains.length;
  const lakeMap = new Map();
  const dryDays = [];
  const result = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    if (rains[i] === 0) {
      dryDays.push(i);
    } else {
      result[i] = -1;
      if (lakeMap.has(rains[i])) {
        const lastRain = lakeMap.get(rains[i]);
        const idx = binarySearch(dryDays, lastRain);
        if (idx === dryDays.length) return [];
        result[dryDays[idx]] = rains[i];
        dryDays.splice(idx, 1);
      }
      lakeMap.set(rains[i], i);
    }
  }
  return result;

  function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }
};

var rains = [1, 2, 3, 4];
var expected = [-1, -1, -1, -1];
var result = avoidFlood(rains);
console.log(result, result.join() === expected.join());

var rains = [1, 2, 0, 0, 2, 1];
var expected = [-1, -1, 2, 1, -1, -1];
var result = avoidFlood(rains);
console.log(result, result.join() === expected.join());

var rains = [1, 2, 0, 1, 2];
var expected = [];
var result = avoidFlood(rains);
console.log(result, result.join() === expected.join());

var rains = [69, 0, 0, 0, 69];
var expected = [-1, 69, 1, 1, -1];
var result = avoidFlood(rains);
console.log(result, result.join() === expected.join());

var rains = [0, 0, 0, 0, 0];
var expected = [1, 1, 1, 1, 1];
var result = avoidFlood(rains);
console.log(result, result.join() === expected.join());
