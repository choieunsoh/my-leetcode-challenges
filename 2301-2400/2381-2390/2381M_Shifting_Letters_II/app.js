// 2381. Shifting Letters II
// https://leetcode.com/problems/shifting-letters-ii/description/
// T.C.: O(n+m)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const DIRECTION = { FORWARD: 1, BACKWARD: 0 };
  const n = s.length;
  const a = 'a'.charCodeAt(0);
  const prefixSUm = new Array(n).fill(0);
  for (const [start, end, direction] of shifts) {
    const shift = direction === DIRECTION.FORWARD ? 1 : -1;
    prefixSUm[start] += shift;
    if (end + 1 < n) {
      prefixSUm[end + 1] -= shift;
    }
  }

  let result = '';
  let shiftCount = 0;
  for (let i = 0; i < n; i++) {
    shiftCount = (shiftCount + prefixSUm[i]) % 26;
    if (shiftCount < 0) shiftCount += 26;
    result += String.fromCharCode(((s.charCodeAt(i) - a + shiftCount) % 26) + a);
  }
  return result;
};

var s = 'abc',
  shifts = [
    [0, 1, 0],
    [1, 2, 1],
    [0, 2, 1],
  ];
var expected = 'ace';
var result = shiftingLetters(s, shifts);
console.log(result, result === expected);

var s = 'dztz',
  shifts = [
    [0, 0, 0],
    [1, 1, 1],
  ];
var expected = 'catz';
var result = shiftingLetters(s, shifts);
console.log(result, result === expected);
