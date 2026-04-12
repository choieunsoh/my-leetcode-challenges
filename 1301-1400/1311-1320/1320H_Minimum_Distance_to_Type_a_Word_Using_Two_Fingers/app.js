// 1320. Minimum Distance to Type a Word Using Two Fingers
// https://leetcode.com/problems/minimum-distance-to-type-a-word-using-two-fingers/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} word
 * @return {number}
 */
var minimumDistance = function (word) {
  const n = word.length;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(26).fill(Math.floor(Number.MAX_SAFE_INTEGER / 2));
  }

  for (let j = 0; j < 26; j++) {
    dp[0][j] = 0;
  }

  for (let i = 1; i < n; i++) {
    const cur = word.charCodeAt(i) - 65;
    const prev = word.charCodeAt(i - 1) - 65;
    const d = getDistance(prev, cur);

    for (let j = 0; j < 26; j++) {
      dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + d);

      if (prev === j) {
        for (let k = 0; k < 26; k++) {
          const d0 = getDistance(k, cur);
          dp[i][j] = Math.min(dp[i][j], dp[i - 1][k] + d0);
        }
      }
    }
  }

  let result = Math.floor(Number.MAX_SAFE_INTEGER / 2);
  for (let j = 0; j < 26; j++) {
    result = Math.min(result, dp[n - 1][j]);
  }
  return result;

  function getDistance(p, q) {
    const x1 = (p / 6) | 0;
    const y1 = p % 6;
    const x2 = (q / 6) | 0;
    const y2 = q % 6;
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }
};

var word = 'CAKE';
var expected = 3;
var result = minimumDistance(word);
console.log(result, result === expected);

var word = 'HAPPY';
var expected = 6;
var result = minimumDistance(word);
console.log(result, result === expected);
