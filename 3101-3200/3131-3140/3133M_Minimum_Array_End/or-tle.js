// 3133. Minimum Array End
// https://leetcode.com/problems/minimum-array-end/description/
// T.C.: O(n) TLE
// S.C.: O(1)
/**
 * @param {number} n
 * @param {number} x
 * @return {number}
 */
var minEnd = function (n, x) {
  const X = BigInt(x);
  const ONE = 1n;
  let result = BigInt(x);
  while (--n > 0) {
    result = (result + ONE) | X;
  }
  return Number(result);
};

var n = 3,
  x = 4;
var expected = 6;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 2,
  x = 7;
var expected = 15;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 3,
  x = 7;
var expected = 23;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 4,
  x = 7;
var expected = 31;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 5,
  x = 7;
var expected = 39;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 6,
  x = 7;
var expected = 47;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 7,
  x = 7;
var expected = 55;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);

var n = 6715154,
  x = 7193485;
var expected = 55012476815;
var result = minEnd(n, x);
console.log(x.toString(2), result, result.toString(2), result === expected);
