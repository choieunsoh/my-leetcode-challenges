// 38. Count and Say
// https://leetcode.com/problems/count-and-say/
// T.C.: O(n*m)
// S.C.: O(n)
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const dp = new Array(n).fill(0);
  dp[0] = 1;

  for (let i = 1; i < n; i++) {
    dp[i] = rle(dp[i - 1]);
  }
  return dp[n - 1].toString();

  function rle(s) {
    const str = s.toString().split('');
    let nextStr = '';
    for (let i = 0; i < str.length; ) {
      const char = str[i];
      let count = 0;

      while (i < str.length && char === str[i]) {
        count++;
        i++;
      }

      nextStr += count + char;
    }
    return nextStr;
  }
};

var n = 1;
var expected = '1';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 4;
var expected = '1211';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 5;
var expected = '111221';
var result = countAndSay(n);
console.log(result, result === expected);

var n = 6;
var expected = '312211';
var result = countAndSay(n);
console.log(result, result === expected);
