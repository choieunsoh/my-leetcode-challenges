// 1891. Cutting Ribbons
// https://leetcode.com/problems/cutting-ribbons/description/
// T.C.: O(n log n)
// S.C.: O(1)
/**
 * @param {number[]} ribbons
 * @param {number} k
 * @return {number}
 */
var maxLength = function (ribbons, k) {
  let totalLength = 0;
  let min = 1;
  let max = 0;
  for (const ribbon of ribbons) {
    totalLength += ribbon;
    max = Math.max(max, ribbon);
  }

  if (totalLength < k) return 0;

  let length = 0;
  while (min <= max) {
    const mid = min + ((max - min) >> 1);
    if (isPossible(mid)) {
      length = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return length;

  function isPossible(segmentLength) {
    let segments = 0;
    for (const ribbon of ribbons) {
      segments += (ribbon / segmentLength) >> 0;
      if (segments >= k) return true;
    }
    return false;
  }
};

var ribbons = [9, 7, 5],
  k = 3;
var expected = 5;
var result = maxLength(ribbons, k);
console.log(result, result === expected);

var ribbons = [7, 5, 9],
  k = 4;
var expected = 4;
var result = maxLength(ribbons, k);
console.log(result, result === expected);

var ribbons = [5, 7, 9],
  k = 22;
var expected = 0;
var result = maxLength(ribbons, k);
console.log(result, result === expected);
