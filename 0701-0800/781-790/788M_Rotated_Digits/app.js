// 788. Rotated Digits
// https://leetcode.com/problems/rotated-digits/description/
// T.C.: O(log n)
// S.C.: O(log n)
/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
  const nums = String(n).split('');
  const k = nums.length;
  const memo = Array.from({ length: k + 1 }, () => Array.from({ length: 2 }, () => Array(2).fill(0)));
  memo[k][0][1] = 1;
  memo[k][1][1] = 1;
  for (let i = k - 1; i >= 0; --i) {
    for (let equalityFlag = 0; equalityFlag <= 1; ++equalityFlag) {
      for (let involutionFlag = 0; involutionFlag <= 1; ++involutionFlag) {
        let result = 0;
        const limit = equalityFlag === 1 ? nums[i] : '9';

        for (let code = 48; code <= limit.charCodeAt(0); ++code) {
          const d = String.fromCharCode(code);
          if (d === '3' || d === '4' || d === '7') continue;

          const involution = d === '2' || d === '5' || d === '6' || d === '9';
          const nextEqualityFlag = d === nums[i] ? equalityFlag : 0;
          const nextInvolutionFlag = involution ? 1 : involutionFlag;
          result += memo[i + 1][nextEqualityFlag][nextInvolutionFlag];
        }

        memo[i][equalityFlag][involutionFlag] = result;
      }
    }
  }

  return memo[0][1][0];
};

var n = 10;
var expected = 4;
var result = rotatedDigits(n);
console.log(result, result === expected);

var n = 1;
var expected = 0;
var result = rotatedDigits(n);
console.log(result, result === expected);

var n = 2;
var expected = 1;
var result = rotatedDigits(n);
console.log(result, result === expected);
