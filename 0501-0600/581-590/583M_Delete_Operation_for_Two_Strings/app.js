// 583. Delete Operation for Two Strings
// https://leetcode.com/problems/delete-operation-for-two-strings/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  if (!n1) return n2;
  if (!n2) return n1;

  const dp = Array.from({ length: n1 + 1 }, () => Array.from({ length: n2 + 1 }, () => 0));
  for (let i = 1; i <= n1; i++) {
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return n1 + n2 - 2 * dp[n1][n2];
};

var word1 = 'sea',
  word2 = 'eat';
var expected = 2;
var result = minDistance(word1, word2);
console.log(result, result === expected);

var word1 = 'leetcode',
  word2 = 'etco';
var expected = 4;
var result = minDistance(word1, word2);
console.log(result, result === expected);
