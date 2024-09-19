// 2222. Number of Ways to Select Buildings
// https://leetcode.com/problems/number-of-ways-to-select-buildings/description/
// T.C.: O(n)
// S.C.: O(n)
/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  const n = s.length;
  const prefixSum = Array.from({ length: n }, () => new Array(2).fill(0));

  let zeros = 0;
  let ones = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    prefixSum[i][0] += prefixSum[Math.max(i - 1, 0)][0];
    prefixSum[i][1] += prefixSum[Math.max(i - 1, 0)][1];

    if (s[i] === '0') {
      zeros++;
      prefixSum[i][1] += ones;
      ans += prefixSum[i][0];
    }
    if (s[i] === '1') {
      ones++;
      prefixSum[i][0] += zeros;
      ans += prefixSum[i][1];
    }
  }
  return ans;
};

var s = '001101';
var expected = 6;
var result = numberOfWays(s);
console.log(result, result === expected);

var s = '11100';
var expected = 0;
var result = numberOfWays(s);
console.log(result, result === expected);
