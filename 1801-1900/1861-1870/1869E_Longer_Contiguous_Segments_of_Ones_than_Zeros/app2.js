// 1869. Longer Contiguous Segments of Ones than Zeros
// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
  const n = s.length;
  let i = 0;
  let ones = 0;
  let zeroes = 0;
  while (i < n) {
    let count = 0;
    const char = s[i];
    while (i < n && s[i] === char) {
      count++;
      i++;
    }
    if (char === '1') {
      ones = Math.max(ones, count);
    } else {
      zeroes = Math.max(zeroes, count);
    }
  }
  return ones > zeroes;
};

var s = '1101';
var expected = true;
var result = checkZeroOnes(s);
console.log(result, result === expected);

var s = '111000';
var expected = false;
var result = checkZeroOnes(s);
console.log(result, result === expected);

var s = '110100010';
var expected = false;
var result = checkZeroOnes(s);
console.log(result, result === expected);
