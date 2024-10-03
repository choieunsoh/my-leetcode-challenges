// 474. Ones and Zeroes
// https://leetcode.com/problems/ones-and-zeroes/description/
// T.C.: O(l*m*n)
// S.C.: O(m*n)
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (const str of strs) {
    const [zero, one] = countZeroAndOne(str);
    for (let i = m; i >= zero; i--) {
      for (let j = n; j >= one; j--) {
        const take = 1 + dp[i - zero][j - one];
        dp[i][j] = Math.max(dp[i][j], take);
      }
    }
  }
  return dp[m][n];

  function countZeroAndOne(str) {
    let zero = 0;
    for (const bit of str) {
      if (bit === '0') zero++;
    }
    return [zero, str.length - zero];
  }
};

var strs = ['10', '0001', '111001', '1', '0'],
  m = 5,
  n = 3;
var expected = 4;
var result = findMaxForm(strs, m, n);
console.log(result, result === expected);

var strs = ['10', '0', '1'],
  m = 1,
  n = 1;
var expected = 2;
var result = findMaxForm(strs, m, n);
console.log(result, result === expected);
