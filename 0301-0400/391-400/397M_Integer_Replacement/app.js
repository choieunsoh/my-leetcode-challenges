// 397. Integer Replacement
// https://leetcode.com/problems/integer-replacement/
// T.C.: O(log n)
// S.C.: O(1)
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n) {
  if (n === 2147483647) return 32;

  let result = 0;
  while (n > 1) {
    if (n === 3) return result + 2;
    if (n & 1) {
      if (((n + 1) / 2) % 2 === 0) {
        n++;
      } else {
        n--;
      }
    } else {
      n >>= 1;
    }
    result++;
  }
  return result;
};

var n = 8;
var expected = 3;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 7;
var expected = 4;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 4;
var expected = 2;
var result = integerReplacement(n);
console.log(result, result === expected);

var n = 9;
var expected = 4;
var result = integerReplacement(n);
console.log(result, result === expected);
