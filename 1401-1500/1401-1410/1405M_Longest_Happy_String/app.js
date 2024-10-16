// 1405. Longest Happy String
// https://leetcode.com/problems/longest-happy-string/description/
// T.C.: O(n)
// S.C.: O(1)
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let totalLength = a + b + c;
  let currA = 0;
  let currB = 0;
  let currC = 0;
  let result = '';
  while (totalLength > 0) {
    totalLength--;

    if ((a >= b && a >= c && currA < 2) || (a > 0 && (currB === 2 || currC === 2))) {
      result += 'a';
      currA++;
      currB = 0;
      currC = 0;
      a--;
    } else if ((b >= c && b >= a && currB < 2) || (b > 0 && (currC === 2 || currA === 2))) {
      result += 'b';
      currB++;
      currC = 0;
      currA = 0;
      b--;
    } else if ((c >= a && c >= b && currC < 2) || (c > 0 && (currA === 2 || currB === 2))) {
      result += 'c';
      currC++;
      currA = 0;
      currB = 0;
      c--;
    }
  }
  return result;
};

var a = 1,
  b = 1,
  c = 7;
var expected = 'ccaccbcc';
var result = longestDiverseString(a, b, c);
console.log(result, result === expected);

var a = 7,
  b = 1,
  c = 0;
var expected = 'aabaa';
var result = longestDiverseString(a, b, c);
console.log(result, result === expected);
