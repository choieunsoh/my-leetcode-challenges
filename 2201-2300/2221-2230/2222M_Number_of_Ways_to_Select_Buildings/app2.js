// 2222. Number of Ways to Select Buildings
// https://leetcode.com/problems/number-of-ways-to-select-buildings/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {string} s
 * @return {number}
 */
var numberOfWays = function (s) {
  let n0 = 0;
  let n1 = 0;
  let n01 = 0;
  let n10 = 0;
  let n010 = 0;
  let n101 = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '0') {
      n0++;
      n10 += n1;
      n010 += n01;
    }
    if (s[i] === '1') {
      n1++;
      n01 += n0;
      n101 += n10;
    }
  }
  return n010 + n101;
};

var s = '001101';
var expected = 6;
var result = numberOfWays(s);
console.log(result, result === expected);

var s = '11100';
var expected = 0;
var result = numberOfWays(s);
console.log(result, result === expected);
