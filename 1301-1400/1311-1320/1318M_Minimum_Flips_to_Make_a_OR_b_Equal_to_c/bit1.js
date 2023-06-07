// 1318. Minimum Flips to Make a OR b Equal to c
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  const num1 = (a | b) ^ c;
  const num2 = a & b & num1;
  return count1(num1) + count1(num2);

  function count1(num) {
    return num
      .toString(2)
      .split('')
      .filter((c) => c === '1').length;
  }
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
