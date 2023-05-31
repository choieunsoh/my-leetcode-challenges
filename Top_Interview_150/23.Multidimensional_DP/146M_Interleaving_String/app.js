// 97. Interleaving String
// https://leetcode.com/problems/interleaving-string/
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s3.length !== s1.length + s2.length) return false;
  const n1 = s1.length;
  const n2 = s2.length;
  const dp = new Array(n2 + 1).fill(false);
  for (let i = 0; i <= n1; i++) {
    for (let j = 0; j <= n2; j++) {
      if (i === 0 && j === 0) {
        dp[j] = true;
      } else if (i === 0) {
        dp[j] = dp[j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
      } else if (j === 0) {
        dp[j] = dp[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
      } else {
        const row = dp[j] && s1.charAt(i - 1) === s3.charAt(i + j - 1);
        const col = dp[j - 1] && s2.charAt(j - 1) === s3.charAt(i + j - 1);
        dp[j] = row || col;
      }
    }
  }
  return dp[n2];
};

var s1 = 'aabcc',
  s2 = 'dbbca',
  s3 = 'aadbbcbcac';
var expected = true;
var result = isInterleave(s1, s2, s3);
console.log(result, result === expected);

var s1 = 'aabcc',
  s2 = 'dbbca',
  s3 = 'aadbbbaccc';
var expected = false;
var result = isInterleave(s1, s2, s3);
console.log(result, result === expected);

var s1 = '',
  s2 = '',
  s3 = '';
var expected = true;
var result = isInterleave(s1, s2, s3);
console.log(result, result === expected);
