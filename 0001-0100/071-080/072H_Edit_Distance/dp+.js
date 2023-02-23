// 72. Edit Distance
// https://leetcode.com/problems/edit-distance/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  const n1 = word1.length;
  const n2 = word2.length;
  if (n1 === 0) return n2;
  if (n2 === 0) return n1;

  let dp = Array.from({ length: n2 + 1 }, (_, i) => i);
  for (let i = 1; i <= n1; i++) {
    const curr = Array(n2 + 1).fill(0);
    curr[0] = i;
    for (let j = 1; j <= n2; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        curr[j] = dp[j - 1];
      } else {
        const insertCount = curr[j - 1];
        const deleteCount = dp[j];
        const replaceCount = dp[j - 1];
        curr[j] = Math.min(insertCount, deleteCount, replaceCount) + 1;
      }
    }
    dp = curr;
  }

  return dp[n2];
};

var word1 = 'horse',
  word2 = 'ros';
var expected = 3;
var result = minDistance(word1, word2);
console.log(result, result === expected);

var word1 = 'intention',
  word2 = 'execution';
var expected = 5;
var result = minDistance(word1, word2);
console.log(result, result === expected);
