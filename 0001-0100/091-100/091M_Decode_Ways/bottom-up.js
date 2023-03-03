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

  const dp = Array(s.length + 1).fill(0);
  dp[s.length] = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) === '0') {
      continue;
    }

    dp[i] = dp[i + 1];
    if (i < s.length - 1 && validChar(i)) {
      dp[i] += dp[i + 2];
    }
  }

  return dp[0];
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
