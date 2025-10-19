// 1625. Lexicographically Smallest String After Applying Operations
// https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/description/
// T.C.: O(10*n^2)
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
    const t = [...s.slice(i, i + n)];
    add(t, n, a, 1);
    if (b % 2 !== 0) {
      add(t, n, a, 0);
    }
    const tStr = t.join('');
    if (tStr < result) {
      result = tStr;
    }
  }
  return result;

  function add(t, n, a, start) {
    let minVal = 10;
    let times = 0;
    for (let i = 0; i < 10; i++) {
      const added = (t[start].charCodeAt() - '0'.charCodeAt() + i * a) % 10;
      if (added < minVal) {
        minVal = added;
        times = i;
      }
    }
    for (let i = start; i < n; i += 2) {
      t[i] = String.fromCharCode('0'.charCodeAt() + ((t[i].charCodeAt() - '0'.charCodeAt() + times * a) % 10));
    }
  }

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
