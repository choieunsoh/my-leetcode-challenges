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
  return dfs(finish.toString()) - dfs((start - 1).toString());

  function dfs(x) {
    if (x.length < s.length) {
      return 0;
    }

    if (x.length === s.length) {
      return x >= s ? 1 : 0;
    }

    const suffix = x.slice(-s.length);
    let count = 0;
    const preLen = x.length - s.length;

    for (let i = 0; i < preLen; i++) {
      const digit = Number(x[i]);
      if (limit < digit) {
        count += Math.pow(limit + 1, preLen - i);
        return count;
      }
      count += digit * Math.pow(limit + 1, preLen - 1 - i);
    }

    if (suffix >= s) {
      count++;
    }
    return count;
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
