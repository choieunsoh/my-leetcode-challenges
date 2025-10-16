// 2399. Check Distances Between Same Letters
// https://leetcode.com/problems/check-distances-between-same-letters/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function (s, distance) {
  const prevIndices = new Array(26);
  const a = 'a'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    const charIndex = s.charCodeAt(i) - a;
    if (prevIndices[charIndex] !== undefined) {
      const dist = i - prevIndices[charIndex] - 1;
      if (dist !== distance[charIndex]) {
        return false;
      }
    } else {
      prevIndices[charIndex] = i;
    }
  }
  return true;
};

var s = 'abaccb',
  distance = [1, 3, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var expected = true;
var result = checkDistances(s, distance);
console.log(result, result === expected);

var s = 'aa',
  distance = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var expected = false;
var result = checkDistances(s, distance);
console.log(result, result === expected);
