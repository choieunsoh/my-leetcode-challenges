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
  let zeroes = 0;
  let ones = 0;
  for (let i = 0; i < n; i++) {
    let count = 0;
    if (s[i] === '0') {
      while (i < n && s[i] === '0') {
        i++;
        count++;
      }
      zeroes = Math.max(zeroes, count);
    } else {
      while (i < n && s[i] === '1') {
        i++;
        count++;
      }
      ones = Math.max(ones, count);
    }
    i--;
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
