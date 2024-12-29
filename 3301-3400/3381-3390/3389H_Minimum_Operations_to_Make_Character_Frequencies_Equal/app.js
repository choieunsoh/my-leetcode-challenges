// 3389. Minimum Operations to Make Character Frequencies Equal
// https://leetcode.com/problems/minimum-operations-to-make-character-frequencies-equal/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var makeStringGood = function (s) {
  const counts = Array(26).fill(0);
  for (const char of s) {
    counts[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  let result = s.length;
  const dp = new Array(27).fill(0);
  for (let target = 1; target <= Math.max(...counts); target++) {
    dp[25] = Math.min(counts[25], Math.abs(counts[25] - target));
    for (let i = 24; i >= 0; i--) {
      const x = counts[i];
      const y = counts[i + 1];
      dp[i] = dp[i + 1] + Math.min(x, Math.abs(x - target));
      if (y < target) {
        const t = x > target ? target : 0;
        dp[i] = Math.min(dp[i], dp[i + 2] + Math.max(x - t, target - y));
      }
    }
    result = Math.min(result, dp[0]);
  }
  return result;
};

var s = 'acab';
var expected = 1;
var result = makeStringGood(s);
console.log(result, result === expected);

var s = 'wddw';
var expected = 0;
var result = makeStringGood(s);
console.log(result, result === expected);

var s = 'aaabc';
var expected = 2;
var result = makeStringGood(s);
console.log(result, result === expected);
