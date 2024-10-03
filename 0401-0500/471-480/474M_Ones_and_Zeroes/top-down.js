// 474. Ones and Zeroes
// https://leetcode.com/problems/ones-and-zeroes/description/
// T.C.: O(l*m*n)
// S.C.: O(l*m*n)
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const memo = Array.from({ length: strs.length }, () => Array.from({ length: m + 1 }, () => new Array(n + 1)));
  return dp(0, m, n);

  function dp(i, zeroes, ones) {
    if (i >= strs.length) return 0;

    if (memo[i][zeroes][ones] !== undefined) return memo[i][zeroes][ones];

    const str = strs[i];
    const [zero, one] = countZeroAndOne(str);

    let take = 0;
    if (zeroes - zero >= 0 && ones - one >= 0) {
      take = 1 + dp(i + 1, zeroes - zero, ones - one);
    }
    const notTake = dp(i + 1, zeroes, ones);
    const maxLength = Math.max(take, notTake);
    memo[i][zeroes][ones] = maxLength;
    return maxLength;
  }

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
