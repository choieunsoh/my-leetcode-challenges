// 2222. Number of Ways to Select Buildings
// https://leetcode.com/problems/number-of-ways-to-select-buildings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  const n = s.length;

  let n01 = 0;
  let n10 = 0;

  let zeros = 0;
  let ones = 0;
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] === '0') {
      zeros++;
      n01 += ones;
      ans += n10;
    }
    if (s[i] === '1') {
      ones++;
      n10 += zeros;
      ans += n01;
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
