// mapDecoding
// LC-91. Decode Ways
// https://leetcode.com/problems/decode-ways/
/**
 * @param {string} message
 * @return {number}
 */
function mapDecoding(message) {
  const MOD = 1e9 + 7;
  const n = message.length;
  const dp = Array(n).fill(-1);
  return dfs(0);

  function dfs(i) {
    if (i === n) return 1;
    if (message.charAt(i) === '0') return 0;
    if (dp[i] !== -1) return dp[i];
    // 1 char
    dp[i] = dfs(i + 1);
    // 2 chars
    if (i + 1 < n && validChar(i)) {
      dp[i] += dfs(i + 2);
    }
    dp[i] %= MOD;
    return dp[i];
  }

  function validChar(i) {
    if (message.charAt(i) === '1') return true;
    if (message.charAt(i) === '2' && message.charAt(i + 1) <= '6') return true;
    return false;
  }
}

var message = '123';
var expected = 3;
var result = mapDecoding(message);
console.log(result, result === expected);

var message = '1221112111122221211221221212212212111221222212122221222112122212121212221212122221211112212212211211';
var expected = 782204094;
var result = mapDecoding(message);
console.log(result, result === expected);
