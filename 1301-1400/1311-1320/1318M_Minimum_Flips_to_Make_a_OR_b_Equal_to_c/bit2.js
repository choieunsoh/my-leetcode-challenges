// 1318. Minimum Flips to Make a OR b Equal to c
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let result = 0;
  while (a !== 0 || b !== 0 || c !== 0) {
    if ((c & 1) === 1) {
      if ((a & 1) === 0 && (b & 1) === 0) {
        result++;
      }
    } else {
      result += (a & 1) + (b & 1);
    }

    a >>= 1;
    b >>= 1;
    c >>= 1;
  }
  return result;
};

var a = 2,
  b = 6,
  c = 5;
var expected = 3;
var result = minFlips(a, b, c);
console.log(result, result === expected);

var a = 4,
  b = 2,
  c = 7;
var expected = 1;
var result = minFlips(a, b, c);
console.log(result, result === expected);

var a = 1,
  b = 2,
  c = 3;
var expected = 0;
var result = minFlips(a, b, c);
console.log(result, result === expected);
