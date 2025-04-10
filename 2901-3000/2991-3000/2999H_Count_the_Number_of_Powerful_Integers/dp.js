// 2999. Count the Number of Powerful Integers
// https://leetcode.com/problems/count-the-number-of-powerful-integers/description/
// T.C.: O(log(finish))
// S.C.: O(log(finish))
/**
 * @param {number} start
 * @param {number} finish
 * @param {number} limit
 * @param {string} s
 * @return {number}
 */
var numberOfPowerfulInt = function (start, finish, limit, s) {
  let low = start.toString();
  let high = finish.toString();
  const n = high.length;
  low = low.padStart(n, '0'); // align digits
  const preLen = n - s.length; // prefix length
  const memo = new Array(n).fill(-1);
  return dfs(0, true, true);

  function dfs(i, limitLow, limitHigh) {
    // recursive boundary
    if (i === n) {
      return 1;
    }
    if (!limitLow && !limitHigh && memo[i] !== -1) {
      return memo[i];
    }

    const lo = limitLow ? Number(low[i]) : 0;
    const hi = limitHigh ? Number(high[i]) : 9;
    let result = 0;
    if (i < preLen) {
      for (let digit = lo; digit <= Math.min(hi, limit); digit++) {
        result += dfs(i + 1, limitLow && digit === lo, limitHigh && digit === hi);
      }
    } else {
      const x = Number(s[i - preLen]);
      if (lo <= x && x <= Math.min(hi, limit)) {
        result = dfs(i + 1, limitLow && x === lo, limitHigh && x === hi);
      }
    }
    if (!limitLow && !limitHigh) {
      memo[i] = result;
    }

    return result;
  }
};

var start = 1,
  finish = 6000,
  limit = 4,
  s = '124';
var expected = 5;
var result = numberOfPowerfulInt(start, finish, limit, s);
console.log(result, result === expected);

var start = 15,
  finish = 215,
  limit = 6,
  s = '10';
var expected = 2;
var result = numberOfPowerfulInt(start, finish, limit, s);
console.log(result, result === expected);

var start = 1000,
  finish = 2000,
  limit = 4,
  s = '3000';
var expected = 0;
var result = numberOfPowerfulInt(start, finish, limit, s);
console.log(result, result === expected);
