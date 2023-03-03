// 91. Decode Ways
// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  function validChar(i) {
    if (s.charAt(i) === '1') return true;
    if (s.charAt(i) === '2' && s.charAt(i + 1) <= '6') return true;
    return false;
  }

  function dfs(index) {
    if (index === s.length) return 1;
    if (s.charAt(index) === '0') return 0;
    if (dp[index] !== -1) return dp[index];

    dp[index] = dfs(index + 1);
    if (index + 1 < s.length && validChar(index)) {
      dp[index] += dfs(index + 2);
    }
    return dp[index];
  }

  const dp = Array(s.length).fill(-1);
  return dfs(0);
};

var s = '12';
var expected = 2;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '226';
var expected = 3;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '06';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '30';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '330';
var expected = 0;
var result = numDecodings(s);
console.log(result, result === expected);

var s = '31';
var expected = 1;
var result = numDecodings(s);
console.log(result, result === expected);
