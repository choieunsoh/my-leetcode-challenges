// 1625. Lexicographically Smallest String After Applying Operations
// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/description/
// T.C.: O(n^2)
// S.C.: O(n)
/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var findLexSmallestString = function (s, a, b) {
  const n = s.length;
  let result = s;
  s = s + s;
  const g = gcd(b, n);
  for (let i = 0; i < n; i += g) {
    for (let j = 0; j < 10; j++) {
      const kLimit = b % 2 === 0 ? 0 : 9;
      for (let k = 0; k <= kLimit; k++) {
        const t = [...s.slice(i, i + n)];
        for (let p = 1; p < n; p += 2) {
          t[p] = String.fromCharCode('0'.charCodeAt() + ((t[p].charCodeAt() - '0'.charCodeAt() + j * a) % 10));
        }
        for (let p = 0; p < n; p += 2) {
          t[p] = String.fromCharCode('0'.charCodeAt() + ((t[p].charCodeAt() - '0'.charCodeAt() + k * a) % 10));
        }
        const tStr = t.join('');
        if (tStr < result) {
          result = tStr;
        }
      }
    }
  }
  return result;

  function gcd(a, b) {
    while (b !== 0) {
      const temp = a;
      a = b;
      b = temp % b;
    }
    return a;
  }
};

var s = '5525',
  a = 9,
  b = 2;
var expected = '2050';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);

var s = '74',
  a = 5,
  b = 1;
var expected = '24';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);

var s = '0011',
  a = 4,
  b = 2;
var expected = '0011';
var result = findLexSmallestString(s, a, b);
console.log(result, result === expected);
