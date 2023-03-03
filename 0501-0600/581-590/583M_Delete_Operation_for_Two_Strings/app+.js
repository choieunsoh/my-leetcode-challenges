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

  let dp = Array.from({ length: n2 + 1 }, (_, i) => i);
  for (let i = 1; i <= n1; i++) {
    const curr = Array(n2 + 1).fill(0);
    curr[0] = i;
    for (let j = 1; j <= n2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        curr[j] = dp[j - 1];
      } else {
        const deleteCount = dp[j];
        const insertCount = curr[j - 1];
        curr[j] = Math.min(deleteCount, insertCount) + 1;
      }
    }
    dp = curr;
  }

  return dp[n2];
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
